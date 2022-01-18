import { ElementType, ReactNode, RefObject } from 'react'
import { useOverlayContext } from './utils'
import { Button } from '@/components/Button'
import { styled } from 'stitches.config'

type OverlayTriggerProps = {
    element?: ElementType;
    children: ReactNode;
    triggerProps?: any;
    triggerRef?: RefObject<HTMLDivElement>;
}

const StyledTrigger = styled('button', {
    py: '$2',
    px: '$5',
    fontSize: '11px',
    color: '$accentText',
    bc: '$accentBg',
    border: '1px solid $accentBorder',
    br: '$2',

    d: 'inline-flex',
    ai: 'center',
    jc: 'space-evenly',
    gap: '$2',
})

const OverlayTrigger = (props: OverlayTriggerProps) => {
    const { 
        children,
        element: Component = 'button', 
        triggerProps, 
        triggerRef, 
        ...rest 
    } = props
    const { state } = useOverlayContext()

    return (
        <StyledTrigger {...triggerProps} as={Component} onPress={() => state.close()} ref={triggerRef}>
            {children}
        </StyledTrigger>
    )
}


OverlayTrigger.displayName = 'OverlayTrigger'
export default OverlayTrigger