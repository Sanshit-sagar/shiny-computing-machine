import { CSS } from 'stitches.config' 
import { useInteractions } from '@/hooks/useInteractions'
import { PopoverStyles, PopoverInteractions } from './types'

type InteractionStatesGetterProps = {
    isOpen: boolean;
    isDisabled?: boolean;
    isLoading?: boolean; 
}

const popoverSize = {
    height: 'fit-content', 
    width: '300px'
}

const DEFAULT_PLACEMENT = 'top'
const staticSideMap = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
}

export const getStaticSide = (placement) => {
    try {
        return staticSideMap[placement.split('-')[0]]
    } catch(err) {
        return staticSideMap[placement] || staticSideMap[DEFAULT_PLACEMENT]
    }
}

export const getPopoverStyles = ({ placement, strategy, arrowX, arrowY, x, y }): PopoverStyles => {
    
    const staticSide = getStaticSide(placement)

    const triggerStyles: CSS = { }

    const popoverStyles: CSS = {
        position: strategy,
        top:  y ?? '',
        left:  x ?? '',
        height: `${popoverSize.height}`,
        width: `${popoverSize.width}`
    }

    const arrowStyles: CSS = {
        position: strategy,
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowX}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px'
    }

    const contentStyles: CSS = {
        height: '100%', 
        width: '100%' 
    }

    return {
        triggerStyles,
        popoverStyles, 
        contentStyles,
        arrowStyles
    }
}

export const getInteractionStates = ({ 
    isOpen, 
    isDisabled = false,
    isLoading = false 
}: InteractionStatesGetterProps): PopoverInteractions => {

    const { interactionProps, isHovered, isFocused, isFocusVisible, isPressed, ...rest } = useInteractions({
        isDisabled,
        isLoading
    })

    return {
        interactionProps,
        isHovered, 
        isFocused,
        isFocusVisible, 
        isPressed,
        isVisible: !isDisabled && (isHovered || isFocused || isPressed || isOpen),
        ...rest
    }
}