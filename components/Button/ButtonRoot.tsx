import React, { forwardRef, Ref, RefObject, HTMLAttributes } from 'react'

import { FocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import { useButton, ButtonAria } from '@react-aria/button'

import { StyledRoot } from './styles'
import { ButtonProps } from './types'

import ButtonBase from './ButtonBase'
import ButtonPrefix from './ButtonPrefix'
import ButtonSuffix from './ButtonSuffix'
import ButtonContext from './ButtonContext'

import { useFocusableRef } from '@/utils/useRefs'
import { isElementOfType } from '@/interfaces/Guards'

import { isDOMElementTrigger } from './utils'


function AriaButton<T extends object>(props: ButtonProps<T>, ref: Ref<HTMLButtonElement>) {

    const { elementType: Component = 'button', css, radius = "y=x-n", ...rest } = props
   
    const domRef: RefObject<HTMLButtonElement> = useFocusableRef<HTMLButtonElement>(ref) 
    const { buttonProps }: ButtonAria<HTMLAttributes<HTMLButtonElement>> = useButton({ 
         ...rest, 
         elementType: Component 
    }, domRef)


    let hasPrefix = false
    let nodes = {
        prefix: null,
        base: null,
        suffix: null
    }

    const prefixRadius = radius === "y=x" ? "topLeftRound" : radius==="y=x-n" ? "bottomLeftRound" : radius
    const suffixRadius = radius === "y=x" ? "bottomRightRound" : radius==="y=x-n" ? "topRightRound" : radius
    

    const contextValue = {
        ...rest,
        prefix: nodes.prefix,
        base: nodes.base,
        suffix: nodes.suffix
    }

    const flattenedChildren = React.Children.toArray(props.children)
    const childCount = flattenedChildren.length


    return (
        <ButtonContext.Provider value={contextValue}>
            <FocusRing autoFocus={props.autoFocus}>
                <StyledRoot {...buttonProps} ref={domRef} css={{ ...css }}>
                    {flattenedChildren.map((child, index: number) => {
                        const isFirst   =   index === 0
                        const isSecond  =   index === 1
                        const isThird   =   index === 2

                        const childCountIsOne   = childCount === 1
                        const childCountIsTwo   = childCount === 2
                        const childCountIsThree = childCount === 3
                        
                        const isAlone           = childCountIsOne
                        const isAccompanied     = childCountIsTwo || childCountIsThree 

                        const isPrefix          = isElementOfType(child, ButtonPrefix) || isDOMElementTrigger(child)
                        const isBase            = isElementOfType(child, ButtonBase)   || isDOMElementTrigger(child)
                        const isSuffix          = isElementOfType(child, ButtonSuffix) || isDOMElementTrigger(child)
                        const isRoot            = isElementOfType(child, ButtonRoot)

                        const hasPrevNode       = index >= 1 && index - 1 >= 0
                        const hasNextNode       = index >= 0 && index + 1 < childCount
                        const isLastNode        = index === childCount - 1

                        const nextNode = flattenedChildren[index + 1]
                        const prevNode = flattenedChildren[index - 1]

                        const precedesBase      =   isElementOfType(nextNode, ButtonBase) 
                        const precedesSuffix    =   hasNextNode && isElementOfType(nextNode, ButtonSuffix)
                        const precedesPrefix    =   hasPrefix || isElementOfType(nextNode, ButtonPrefix)

                        const succeedsBase      =   hasPrevNode && isElementOfType(prevNode, ButtonBase)
                        const succeedsPrefix    =   isSecond && hasPrefix && isElementOfType(prevNode, ButtonPrefix)
                        const preceedsSuffix    =   isSecond && !hasPrefix && hasNextNode && isElementOfType(prevNode, ButtonSuffix)
                    

                        if(isFirst && isAccompanied && !isRoot) {
                            hasPrefix = true
                            return React.cloneElement(child, {
                                variant: 'outlined',
                                radius: child.props?.radius ?? prefixRadius
                            })
                        } else if(isBase && !isRoot && (isSecond || (isFirst && isAlone && !hasPrefix) || (isFirst && !isAlone && !hasPrefix && precedesSuffix))) {
                            return React.cloneElement(child, {
                                prefixed: succeedsPrefix,
                                suffixed: preceedsSuffix
                            })
                        } else if(isSuffix && !isRoot && ((isThird && succeedsBase) || (isSecond && (succeedsBase || succeedsPrefix)))) {
                            return React.cloneElement(child, {
                                variant: child.props?.variant ?? rest?.variant ?? 'secondary',
                                radius: child.props?.radius ?? suffixRadius
                            })
                        }

                        return null
                    })}       
                </StyledRoot>
            </FocusRing>
        </ButtonContext.Provider>
    )
}

AriaButton.displayName = "ButtonRoot"
const ForwardedButton = forwardRef(AriaButton)
export const ButtonRoot = <T, >({ ref, ...rest }: ButtonProps<T> & { ref?: Ref<HTMLButtonElement> }) => ( 
    <ForwardedButton {...rest} ref={ref} /> 
)

