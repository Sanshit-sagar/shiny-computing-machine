
import { Action, Actions } from './reducer.actions'
import { getInnerSize, getGutterSizes } from '../utils'
import { ReducerState, Pair, SplitDirections } from '../interfaces'

export const reducer = (state: ReducerState, action: Action) => {

    switch(action.type) {
        case Actions.SetIsReadyToCompute: {
            return {
                ...state,
                isReady: action.payload.isReady
            }
        };
        case Actions.CreatePairs: {
            const { direction, children, gutters } = action.payload

            const parent = children[0].parentNode
            if(!parent) throw new Error(`Cannot create pairs - parent is undefined`)
            
            const parentSize = getInnerSize(direction, parent as HTMLElement)
            if(!parentSize) throw new Error(`Parent element hasn't been initialized yet.`)

            const pairs: Pair[] = [];
          
            children.forEach((_, index) => {
                if (index > 0) {
                const antecedent = children[index-1]
                const consequent = children[index]
                const gutter = gutters[index-1]

                const start: number = (direction ===  SplitDirections.HORIZONTAL) 
                    ? antecedent.getBoundingClientRect().left 
                    : antecedent.getBoundingClientRect().top 
                const end: number   = (direction ===  SplitDirections.HORIZONTAL)
                    ? consequent.getBoundingClientRect().right
                    : consequent.getBoundingClientRect().bottom

                const size: number  = (direction === SplitDirections.HORIZONTAL) 
                    ? ( 
                        antecedent.getBoundingClientRect().width + 
                        gutter.getBoundingClientRect().width     + 
                        consequent.getBoundingClientRect().width
                    ) : ( 
                        antecedent.getBoundingClientRect().height + 
                        gutter.getBoundingClientRect().height     + 
                        consequent.getBoundingClientRect().height
                    )
                const gutterSize: number = (direction ===  SplitDirections.HORIZONTAL) 
                    ? gutter.getBoundingClientRect().width
                    : gutter.getBoundingClientRect().height
                
                pairs.push({
                    key: index,
                    index: index - 1,
                    antecedent, 
                    consequent, 
                    gutter, 
                    parent: parent as HTMLElement, 
                    start, 
                    end, 
                    size, 
                    gutterSize,
                    antecedentPct: 100 / children.length,
                    consequentPct: 100 / children.length
                })
            }})

            return {
                ...state,
                pairs
            }
        };
        case Actions.StartDragging: {
            const { gutterIdx } = action.payload
            return {
                ...state,
                isDragging: true,
                draggingIndex: gutterIdx
            }
        };
        case Actions.StopDragging: {
            return {
                ...state,
                isDragging: false
            }
        };
        case Actions.CalculateSizes: {
            const { direction, gutterIdx } = action.payload
            const pair: Pair = state.pairs[gutterIdx]
            const parentSize = getInnerSize(direction, pair.parent)

            const gutterSize = pair.gutter[direction === SplitDirections.HORIZONTAL ? 'clientWidth' : 'clientHeight']
            const isFirst = gutterIdx === 0
            const isLast = gutterIdx === state.pairs.length - 1

            const { antecedentGutterSize, consequentGutterSize } = getGutterSizes(gutterSize, isFirst, isLast) 

            if(direction === SplitDirections.HORIZONTAL) {
                state.pairs[gutterIdx] = {
                    ...pair,
                    start: pair.antecedent.getBoundingClientRect().left,
                    end: pair.consequent.getBoundingClientRect().right,
                    size:  pair.antecedent.getBoundingClientRect().width + antecedentGutterSize + consequentGutterSize + pair.consequent.getBoundingClientRect().width,
                    antecedentPct:  ((pair.antecedent.getBoundingClientRect().width + antecedentGutterSize) / parentSize) * 100,
                    consequentPct:  ((pair.consequent.getBoundingClientRect().width + consequentGutterSize) / parentSize) * 100,
                    gutterSize
                }
            } else {
                state.pairs[gutterIdx] = {
                    ...pair,
                    start: pair.antecedent.getBoundingClientRect().top,
                    end: pair.consequent.getBoundingClientRect().bottom,
                    size:  pair.antecedent.getBoundingClientRect().height + antecedentGutterSize + consequentGutterSize + pair.consequent.getBoundingClientRect().height,
                    antecedentPct:  ((pair.antecedent.getBoundingClientRect().height + antecedentGutterSize) / parentSize) * 100,
                    consequentPct:  ((pair.consequent.getBoundingClientRect().height + consequentGutterSize) / parentSize) * 100,
                    gutterSize
                }
            }

            return {
                ...state
            }
        };
        default: 
            return state
    }
}

