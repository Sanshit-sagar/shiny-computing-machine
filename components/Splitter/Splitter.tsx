import React, { Fragment, useRef, useReducer, useEffect, useCallback } from 'react' 

import { reducer } from './State/reducer'
import { Actions } from './State/reducer.actions'

import { 
    SplitProps, 
    ReducerState, 
    SplitDirection, 
    SplitDirections 
} from './interfaces'
import {
    getInnerSize,
    getGutterSizes,
    flattenChildren,
    useEventListener 
} from './utils'

import { Gutter } from './Gutter'
import { StyledSplitter, StyledContainer, StyledChildWrapper } from './Styles'
// import { PropsList } from '@/components/PropsList'

const DefaultMinSize = 16

const initialState: ReducerState = {
    isReady: false,
    isDragging: false,
    pairs: [],
}

const getMousePosition = (dir: SplitDirection, e: MouseEvent) => {
    if (dir === SplitDirections.HORIZONTAL) return e.clientX;
    return e.clientY;
}

const getCursorIcon = (direction: SplitDirection) => (
    direction === SplitDirections.HORIZONTAL ? 'col-resize' : 'row-resize' 
)

export const Splitter = ({
    direction = SplitDirections.HORIZONTAL,
    minWidths = [],
    minHeights = [],
    initialSizes,
    gutterClassName,
    draggerClassName,
    children: reactChildren,
    onResizeStarted,
    onResizeEnded,
    classes = [],
}: SplitProps) => {
    const children = flattenChildren(reactChildren)
    const [state, dispatch] = useReducer(reducer, initialState)

    const containerRef = useRef<HTMLDivElement | null>(null)
    const childRefs = useRef<HTMLElement[]>([] as HTMLElement[])
    const gutterRefs = useRef<HTMLElement[]>([] as HTMLElement[])

    childRefs.current = []
    gutterRefs.current =  []

    const setIsReadyToCompute = useCallback((isReady: boolean) => {
        dispatch({
            type: Actions.SetIsReadyToCompute,
            payload: { 
                isReady
            }
        })
    }, [])

    const startDragging = useCallback((direction: SplitDirection, gutterIndex: number) => {
        dispatch({
            type: Actions.StartDragging,
            payload: {
                gutterIdx: gutterIndex
            }
        })

        const pair = state.pairs[gutterIndex] 
        onResizeStarted?.(pair.index)

        pair.antecedent.style.userSelect = 'none'
        pair.consequent.style.userSelect = 'none'

        pair.gutter.style.cursor = getCursorIcon(direction)
        pair.parent.style.cursor = getCursorIcon(direction)
        document.body.style.cursor = getCursorIcon(direction)
    }, [state.pairs])

    const stopDragging = useCallback(() => {
        dispatch({
            type: Actions.StopDragging,
            payload: null
        })
    
        const allSizes: number[] = []
        for (let i = 0; i < state.pairs.length; i++) {
            const pair = state.pairs[i]
            const parentSize = getInnerSize(direction, pair.parent)

            if (parentSize === undefined) {
                throw new Error(`Cannot call the 'onResizeFinished' callback - parentSize is undefined`)
            }
            if (pair.gutterSize === undefined) {
                throw new Error(`Cannot call 'onResizeFinished' callback - gutterSize is undefined`)
            }
            
            const isFirst = i === 0
            const isLast = i === state.pairs.length - 1
            
            const antecedentSize = pair.antecedent.getBoundingClientRect()[direction === SplitDirections.HORIZONTAL ? 'width' : 'height']
            const { antecedentGutterSize, consequentGutterSize } = getGutterSizes(pair.gutterSize, isFirst, isLast)
            const antecedentPct = ((antecedentSize + antecedentGutterSize) / parentSize) * 100
            allSizes.push(antecedentPct);
            
            if (isLast) {
              const consequentSize = pair.consequent.getBoundingClientRect()[direction === SplitDirections.HORIZONTAL ? 'width' : 'height']
              const consequentPct = ((consequentSize + consequentGutterSize) / parentSize) * 100
              allSizes.push(consequentPct);
            }
        }
    
        if (state.draggingIndex === undefined) {
            throw new Error(`Could not reset cursor and user-select because 'state.draggingIdx' is undefined`)
        }

        const pair = state.pairs[state.draggingIndex]
        onResizeEnded?.(pair.index, allSizes)
    
        pair.antecedent.style.userSelect = ''
        pair.consequent.style.userSelect = ''
    
        pair.gutter.style.cursor = ''
        pair.parent.style.cursor = ''
        document.body.style.cursor = ''
    }, [state.draggingIndex, state.pairs, direction])

    
    const calculateSizes = useCallback((
        direction: SplitDirection, 
        gutterIndex: number
    ) => {
        dispatch({
            type: Actions.CalculateSizes,
            payload: { 
                direction, 
                gutterIdx: gutterIndex 
            },
        })
    }, [])

    const createPairs = useCallback((
        direction: SplitDirection, 
        children: HTMLElement[], 
        gutters: HTMLElement[]
    ) => {
        dispatch({
            type: Actions.CreatePairs,
            payload: { 
                direction, 
                children, 
                gutters 
            },
        })
    }, [])

    const setInitialSizes = useCallback((
        direction: SplitDirection,
        children: HTMLElement[],
        gutters: HTMLElement[],
        initialSizes?: number[],
    ) => {

        const parent = children[0].parentNode
        if (!parent) throw new Error(`Cannot set initial sizes - parent is undefined`)
        
        const parentSize = getInnerSize(direction, parent as HTMLElement)
        if (parentSize === undefined) throw new Error(`Cannot set initial sizes - parent has undefined size`)
    
        children.forEach((c, idx) => {
            const isFirst = idx === 0
            const isLast = idx === children.length - 1
      
            let gutterSize = 0
            if (children.length > 1) {
                const gutter = gutters[isLast ? idx-1 : idx]
                let gutterSize = gutter.getBoundingClientRect()[direction === SplitDirections.HORIZONTAL ? 'width' : 'height']
                gutterSize = isFirst || isLast ? gutterSize / 2 : gutterSize
            }

            let calc: string
            if (initialSizes && idx < initialSizes.length)  {
                calc = `calc(${initialSizes[idx]}% - ${gutterSize}px)`
            } else {
                calc = `calc(${100 / children.length}% - ${gutterSize}px)`
            }

            if (direction === SplitDirections.HORIZONTAL) {
                c.style.width = calc
                c.style.height = '100%'
            } else {
                c.style.height = calc
                c.style.width = '100%'
            }
        })
    }, [])
      
    const adjustSize = useCallback((direction: SplitDirection, offset: number) => {
        if (state.draggingIndex === undefined) {
            throw new Error(`Cannot adjust size - 'draggingIdx' is undefined`)
        }
    
        const pair = state.pairs[state.draggingIndex]
        if (pair.size === undefined) {
            throw new Error(`Cannot adjust size - 'pair.size' is undefined`)
        }
        if (pair.gutterSize === undefined) {
            throw new Error(`Cannot adjust size - 'pair.gutterSize' is undefined`)
        }
        const percentage = pair.antecedentPct + pair.consequentPct
    
        const antecedentPct = (offset / pair.size) * percentage
        const consequentPct = percentage - (offset / pair.size) * percentage
    
        const isFirst = state.draggingIndex === 0
        const isLast = state.draggingIndex === state.pairs.length - 1
        const { antecedentGutterSize, consequentGutterSize } = getGutterSizes(pair.gutterSize, isFirst, isLast)
    
        const antecedentCalc = `calc(${antecedentPct}% - ${antecedentGutterSize}px)`
        const consequentCalc = `calc(${consequentPct}% - ${consequentGutterSize}px)`

        if (direction === SplitDirections.HORIZONTAL) {
          pair.antecedent.style.width = antecedentCalc
          pair.consequent.style.width = consequentCalc
        } else {
          pair.antecedent.style.height = antecedentCalc
          pair.consequent.style.height = consequentCalc
        }
    }, [state.draggingIndex, state.pairs, direction])

    const drag = useCallback((e: MouseEvent, direction: SplitDirection, minSizes: number[]) => {
        if (!state.isDragging) return
        if (state.draggingIndex === undefined) throw new Error(`Cannot drag - 'draggingIdx' is undefined`)
    
        const pair = state.pairs[state.draggingIndex]
        
        if (pair.start === undefined) throw new Error(`Cannot drag - 'pair.start' is undefined`)
        if (pair.size === undefined) throw new Error(`Cannot drag - 'pair.size' is undefined`)
        if (pair.gutterSize === undefined) throw new Error(`Cannot drag - 'pair.gutterSize' is undefined`)
    
        let offset = getMousePosition(direction, e) - pair.start

        let antecedentMinSize = DefaultMinSize
        let consequentMinSize = DefaultMinSize
        if (minSizes.length > state.draggingIndex) {
            antecedentMinSize = minSizes[state.draggingIndex]
        }
        if (minSizes.length >= state.draggingIndex + 1) {
            consequentMinSize = minSizes[state.draggingIndex + 1]
        }
        if (offset < pair.gutterSize + antecedentMinSize) {
            offset = pair.gutterSize + antecedentMinSize
        }
        if (offset >= pair.size - (pair.gutterSize + consequentMinSize)) {
            offset = pair.size - (pair.gutterSize + consequentMinSize)
        }

        adjustSize(direction, offset)
    }, [state.isDragging, state.draggingIndex, state.pairs, adjustSize])

    function handleGutterMouseDown(gutterIdx: number, event: React.MouseEvent<HTMLDivElement>) {
        event.preventDefault()
        calculateSizes(direction, gutterIdx)
        startDragging(direction, gutterIdx)
    }

    useEventListener('mouseup', () => {
        if (!state.isDragging) 
            return
        if (state.draggingIndex === undefined) 
            throw new Error(`Cannot calculate sizes after dragging = 'state.draggingIdx' is undefined`)
        
        calculateSizes(direction, state.draggingIndex)
        stopDragging()
    }, [
        state.isDragging, 
        stopDragging
    ])

    useEventListener('mousemove', (event: MouseEvent) => {
        if (!state.isDragging) 
            return
        drag(event, direction, direction === SplitDirections.HORIZONTAL ? minWidths : minHeights)
    }, [
        direction, 
        state.isDragging, 
        drag, 
        minWidths, 
        minHeights
    ])
    
    useEffect(function watchParentSize() {
        if (!containerRef.current) return

        const el = containerRef.current.parentElement
        // Splitter must have a parent element. In the most trivial example it's either <body> or <html>.
        // if (!el) return
    
        // TODO: Potential performance issue!
        // When nesting Splitters the `observer` is registered for each nesting "level".
        // Splitter's parent element is another Splitter in the nesting use case.
        const observer = new ResizeObserver(() => {
          const style = getComputedStyle(el)
          const size = direction === SplitDirections.HORIZONTAL ? el.clientWidth : el.clientHeight
          const isReady = !!style && !!size
          setIsReadyToCompute(isReady)
        })

        observer.observe(el)
        return () => { observer.disconnect() }
      }, [containerRef.current, direction])

    // RUN EFFECT FOR INITAL SETUP
    useEffect(function initialSetup() {
        if (!state.isReady) return
       
        if (!childRefs.current || !gutterRefs.current) {
          throw new Error(`Cannot create pairs - either variable 'childRefs' or 'gutterRefs' is undefined`);
        }
    
        if (children.length <= 1) {
          setInitialSizes(direction, childRefs.current, gutterRefs.current, initialSizes);
        } else {
          setInitialSizes(direction, childRefs.current, gutterRefs.current, initialSizes);
          createPairs(direction, childRefs.current, gutterRefs.current);
        }
    
      }, [
        reactChildren,
        state.isReady,
        direction,
        setInitialSizes,
        createPairs,
        initialSizes,
    ]);
    

    function addRef(refs: typeof childRefs | typeof gutterRefs, el: any) {
        if (!refs.current) {
            throw new Error(`Can't add element to ref object - ref isn't initialized`)
        }
        
        if (el && !refs.current.includes(el)) {
            refs.current.push(el)
        }
    }

    return (
        <>
        <StyledSplitter direction={direction} ref={containerRef}>
            {state.isReady && children.map((child: React.ReactNode, index: number) => (
                <Fragment key={index}>
                    <StyledChildWrapper ref={(el) => addRef(childRefs, el)}>
                        {child}
                    </StyledChildWrapper>
                
                    {index < (children as React.ReactNodeArray).length - 1 && (
                        <Gutter
                            ref={(el) => addRef(gutterRefs, el)}
                            className={gutterClassName}
                            draggerClassName={draggerClassName}
                            direction={direction}
                            onMouseDown={(event) => handleGutterMouseDown(index, event)}
                        />
                    )} 
                </Fragment>
            ))}
        </StyledSplitter>
        {/* <PropsList {...state} /> */}
        
        </>
    )
}

export default Splitter