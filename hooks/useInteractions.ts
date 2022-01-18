
import { useState, HTMLAttributes } from 'react';
import { useHover, useFocusWithin, usePress } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'

import { PressEvent, HoverEvent } from '../interfaces/Events'

export interface InteractionProps {
    isDisabled?: boolean; 
    isLoading?: boolean;
    focusType?: 'visible' | 'within' | 'target';
}

export interface InteractionResult {
    isFocused: boolean;
    isHovered: boolean;
    isPressed: boolean;
    isDisabled: boolean; 
    isLoading: boolean; 
    interactionProps: HTMLAttributes<HTMLElement>;
}


export const useInteractions = ({ 
    isDisabled = false, 
    isLoading = false,
    focusType = 'within'
}: InteractionProps): InteractionResult => {

    const [isFocused, setFocus] = useState<boolean>(false);
    const [pressInfo, setPressInfo] = useState<PressEvent | undefined>(undefined);
    const [hoverInfo, setHoverInfo] = useState<HoverEvent | undefined>(undefined);

    const handlePressChange = (event: PressEvent) =>  setPressInfo({ ...event });
    const handleHoverChange = (event: HoverEvent) =>  setHoverInfo({ ...event });


    let { focusWithinProps } = useFocusWithin({
        isDisabled,
        onFocusWithinChange: (isFocusWithin: boolean) => setFocus(isFocusWithin)
    });

    let { pressProps, isPressed } = usePress({
        isDisabled,
        onPressStart: (event: PressEvent) => handlePressChange(event),
        onPressEnd: (event: PressEvent) => handlePressChange(event)
    }); 

    let { hoverProps, isHovered } = useHover({
        isDisabled,
        onHoverStart: (event: HoverEvent) => handleHoverChange(event),
        onHoverEnd: (event: HoverEvent) => handleHoverChange(event)
    }); 

    const interactionProps: HTMLAttributes<HTMLElement> = { 
        ...mergeProps(pressProps, mergeProps(focusWithinProps, hoverProps))
    }

    return {
        isFocused,
        isPressed,
        isHovered,
        isDisabled,
        isLoading,
        interactionProps
    };
}