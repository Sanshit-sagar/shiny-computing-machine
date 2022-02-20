
import { HTMLAttributes } from 'react'
import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'
import { useHover, usePress } from '@react-aria/interactions'

import { PressEvent, HoverEvent } from '@/interfaces/Interactions'

export interface InteractionProps {
    isDisabled?: boolean; 
    isLoading?: boolean;
    autoFocus?: boolean; 
    focusType?: 'visible' | 'within' | 'target';
}
type IsHoveredType = Pick<ReturnType<typeof useHover>, 'isHovered'>
type isFocusedType = Pick<ReturnType<typeof useFocus>, 'isFocused'>

export interface InteractionResult extends Required<InteractionProps> {
    isFocused: boolean;
    isHovered: boolean;
    isPressed: boolean;
    interactionProps: HTMLAttributes<HTMLElement>;
}

const pressNoop = (_event: PressEvent) => {}
const hoverNoop = (_event: HoverEvent) => {}

export const useInteractions = ({ 
    isDisabled = false, 
    isLoading = false,
    autoFocus = false,
    focusType = 'within'
}: InteractionProps): InteractionResult => {

    const { focusProps, isFocused, isFocusVisible } = useFocusRing({ within: focusType === 'within', autoFocus })
    const { pressProps, isPressed } = usePress({ isDisabled, onPressStart: pressNoop, onPressEnd: pressNoop }) 
    const { hoverProps, isHovered } = useHover({ isDisabled, onHoverStart: hoverNoop, onHoverEnd: hoverNoop }) 

    return {
        isHovered,
        isFocused: isFocused || isFocusVisible,
        isFocusVisible,
        isPressed,
        isDisabled,
        isLoading,
        autoFocus, 
        focusType,
        interactionProps: mergeProps(pressProps, hoverProps, focusProps)
    };
}