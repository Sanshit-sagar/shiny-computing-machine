import { ElementType, ReactNode, RefObject } from 'react'
import { useOverlayContext } from './utils'
import { useFocusRing } from '@react-aria/focus'
import { styled } from 'stitches.config'

type OverlayTriggerProps = {
    element?: ElementType;
    children: ReactNode;
    triggerProps?: any;
    triggerRef?: RefObject<HTMLDivElement>;
}

const StyledTrigger = styled('button', {
    size: '32px',
    padding: '$2',
    
    d: 'flex',
    ai: 'center',
    jc: 'center',
    gap: '$2',

    bc: '$accentBg',
    border: '1px solid $accentBorder',
    br: '50%',

    variants: {
        isFocused: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            }
        }
    },
    defaultVariants: {
        isFocused: true
    }
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
    const { 
        isFocused, 
        isFocusVisible, 
        focusProps 
    } = useFocusRing({ within: true, isTextInput: false, autoFocus: false })

    return (
        <span {...focusProps}>
            <StyledTrigger 
                {...triggerProps} 
                onPress={() => state.open()}
                ref={triggerRef}
                isFocused={isFocused || isFocusVisible}
            >
                {children}
            </StyledTrigger>
        </span>
    )
}


OverlayTrigger.displayName = 'OverlayTrigger'
export default OverlayTrigger