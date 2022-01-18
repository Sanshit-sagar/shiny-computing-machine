import { cloneElement, isValidElement, Children, useEffect } from 'react'
import type { ReactNode, ReactChild } from 'react'
import { isFragment } from 'react-is'

import { 
    SplitDirection, 
    SplitDirections 
} from './interfaces'

export function useEventListener(
    event: keyof WindowEventMap, 
    handler: (event: Event) => void, 
    deps: any[] = []
) {
    useEffect(() => {
        window.addEventListener(event, handler)
        return () => window.removeEventListener(event, handler)
    }, [event, handler, ...deps])
}


export const getInnerSize = (direction: SplitDirection, element: HTMLElement) => {
    const computedStyle = getComputedStyle(element)

    if (!computedStyle) 
        return
  
    let size: number = (direction === SplitDirections.HORIZONTAL) 
        ? element.clientWidth 
        : element.clientHeight

    if (size === 0) 
        return

    if (direction === SplitDirections.HORIZONTAL) {
        size -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)
    } else {
        size -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)
    }

    return size;
}

export const getGutterSizes = (gutterSize: number, isFirst: boolean, isLast: boolean) => {

    let antecedentGutterSize: number
    let consequentGutterSize: number

    if(isFirst) {
        antecedentGutterSize = gutterSize / 2
        consequentGutterSize = gutterSize
    } else if(isLast) {
        antecedentGutterSize = gutterSize
        consequentGutterSize = gutterSize / 2
    } else {
        antecedentGutterSize = gutterSize
        consequentGutterSize = gutterSize
    }

    return {
        antecedentGutterSize,
        consequentGutterSize
    }
}

/** https://www.smashingmagazine.com/2021/08/react-children-iteration-methods */
export const flattenChildren = (
    children: ReactNode, 
    depth: number = 0, 
    keys: (string | number)[] = []
): ReactChild[] => {
    return Children.toArray(children).reduce((acc: ReactNode[], node, nodeIndex: number) => {
        if(isFragment(node)) {
            acc.push.apply(
                acc,
                flattenChildren(
                    node.props.children,
                    depth + 1,
                    keys.concat(node.key || nodeIndex)
                )
            )
        } else {
            if(isValidElement(node)) {
                acc.push(
                    cloneElement(node, {
                        key: keys.concat(String(node.key)).join(".")
                    })
                )
            } else if(typeof node === 'string' || typeof node === 'number') {
                acc.push(node)
            }
        }
        return acc
    }, []) 
}