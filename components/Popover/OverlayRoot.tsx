import React, { useRef } from 'react'

import { useButton } from '@react-aria/button'
import { mergeProps } from '@react-aria/utils'
import { useOverlayTriggerState } from '@react-stately/overlays'
import { useOverlayPosition, useOverlayTrigger, OverlayContainer } from '@react-aria/overlays'

import { flattenChildren } from '@/utils/flattenChildren'

import OverlayContext from './OverlayContext'
import OverlayTrigger from './OverlayTrigger'
import { IOverlayContext, OverlayProps } from './interfaces'
import { isOverlayTrigger, initStateAndProps } from './utils'

const OverlayRoot = ({ children, ...rest }: OverlayProps) => {
    const props = initStateAndProps(rest)
    const state = useOverlayTriggerState({ })
    
    const triggerRef = useRef<HTMLDivElement>()
    const overlayRef = useRef<HTMLDivElement>()
    
    const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef)
    const { overlayProps: positionProps } = useOverlayPosition({ 
        targetRef: triggerRef, 
        overlayRef, 
        placement: props.placement, 
        offset: props.offset, 
        crossOffset: props.crossOffset,
        isOpen: state.isOpen
    })

    const { buttonProps } = useButton({ onPress: () => state.open() }, triggerRef)

    const overlayContextValue: IOverlayContext = {
        ...props,
        state,
        mergedOverlayProps: mergeProps(overlayProps, positionProps),
        overlayRef
    }

    const flattenedChildren = flattenChildren(children)

    return (
        <OverlayContext.Provider value={overlayContextValue}>
            {flattenedChildren.map((child, index) => {
                if(isOverlayTrigger(child, index)) {
                    return React.cloneElement(child, {
                        key: index,
                        triggerProps: mergeProps(buttonProps, triggerProps),
                        triggerRef: triggerRef
                    })
                }
                if(state.isOpen) return (
                    <OverlayContainer> {child} </OverlayContainer>
                )
            })}
        </OverlayContext.Provider>
    ) 
}

OverlayRoot.displayName = 'OverlayRoot'
export default OverlayRoot