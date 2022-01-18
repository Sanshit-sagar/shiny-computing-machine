import {
    Children,
    isValidElement,
    cloneElement
  } from "react";
  
  import { isFragment } from "react-is";
  
  import type {
    ReactNode,
    ReactChild,
    ReactFragment,
    ReactPortal
  } from 'react'



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