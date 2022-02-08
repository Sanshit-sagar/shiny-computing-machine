import { CSS } from 'stitches.config' 
import { useInteractions } from '@/hooks/useInteractions'

type TooltipStylesCollection = {
    triggerStyles: CSS;
    floatingStyles: CSS;
    contentStyles: CSS;
    arrowStyles: CSS;
}

type InteractionStatesGetterProps = {
    isOpen: boolean;
    isDisabled?: boolean;
    isLoading?: boolean; 
}

const tooltipSize = {
    height: '50px', 
    width: '200px'
}

const DEFAULT_PLACEMENT = 'top'
const staticSideMap = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
}

export const getStaticSide = (placement) => {
    try {
        return staticSideMap[placement.split('-')[0]]
    } catch(err) {
        return staticSideMap[placement] || staticSideMap[DEFAULT_PLACEMENT]
    }
}

export const getTooltipStyles = ({
    placement,
    strategy, 
    arrowX,
    arrowY,
    x,
    y
}): TooltipStylesCollection => {
    
    const staticSide = getStaticSide(placement)


    const triggerStyles: CSS = {

    }

    const floatingStyles: CSS = {
        position: strategy,
        top:  y ?? '',
        left:  x ?? '',
        height: `calc(${tooltipSize.height} - $2)`,
        width: `calc(${tooltipSize.width} - $4)`
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
        floatingStyles, 
        contentStyles,
        arrowStyles
    }
}

export const getInteractionStates = ({ 
    isOpen, 
    isDisabled = false,
    isLoading = false 
}: InteractionStatesGetterProps) => {

    const { interactionProps, isHovered, isFocused, isPressed, ...rest } = useInteractions({
        isDisabled,
        isLoading
    })

    return {
        interactionProps,
        isHovered, 
        isFocused, 
        isPressed,
        isVisible: !isDisabled && (isHovered || isFocused || isPressed || isOpen)
    }
}