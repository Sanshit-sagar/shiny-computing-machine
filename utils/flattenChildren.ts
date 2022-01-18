import {
    Children,
    isValidElement,
    cloneElement
  } from "react";
  
  import { isFragment } from "react-is";
  
  import type {
    ReactNode,
    ReactChild,
  } from 'react'
  
  /*************** 1. ***************/
  export function flattenChildren(
    // only needed argument
    children: ReactNode,
    // only used for debugging
    depth: number = 0,
    // is not required, start with default = []
    keys: (string | number)[] = [] 
  ): ReactChild[] {
    /*************** 2. ***************/
    const res = Children.toArray(children).reduce(
      (acc: ReactChild[], node, nodeIndex) => {
        if (isFragment(node)) {
          /*************** 5. ***************/
          acc.push.apply(
            acc,
            flattenChildren(
              node.props.children,
              depth + 1,
              /*************** 6. ***************/
              keys.concat(node.key || nodeIndex)
            )
          );
        } else {
          /*************** 4. ***************/
          if (isValidElement(node)) {
            acc.push(
              cloneElement(node, {
                /*************** 6. ***************/
                key: keys.concat(String(node.key)).join('.')
              })
            );
          } else if (
            /*************** 3. ***************/
            typeof node === "string"
            || typeof node === "number"
          ) {
            acc.push(node);
          }
        }
        return acc; 
      },
      /*************** Acculumator Array ***************/
      []
    )

    return res;
  }