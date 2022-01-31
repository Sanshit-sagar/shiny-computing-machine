import { useEffect, useRef } from 'react'
import { useFloating, shift, offset, flip, arrow, getScrollParents } from '@floating-ui/react-dom'
import { useInteractions } from '@/hooks/useInteractions'

import { 
    StyledTooltipArrow,
    StyledTooltipContent, 
    StyledTooltipTrigger,
    StyledTooltipContainer
} from './styles'

const TRIGGER_CONTENT = 'Hover me!'
const TOOLTIP_CONTENT = `The evil rabbit jumped over the fence`

type FloatingTooltipProps = {
    tooltipPlacement?: 'left' | 'top' | 'bottom' | 'right'; 
    isOpen?: boolean;
}

export const FloatingTooltip = ({ 
    tooltipPlacement = 'top',
    isOpen = true
}: FloatingTooltipProps) => {
    const arrowRef = useRef<HTMLDivElement | null>(null)

    const { interactionProps, ...interactionStates } = useInteractions({
        isDisabled: false
    })
    const { isHovered, isFocused, isPressed, ...rest } = interactionStates

    const {
        x, 
        y, 
        reference, 
        floating, 
        strategy, 
        update, 
        refs,
        placement,
        middlewareData: { 
            arrow: { 
                x: arrowX, 
                y: arrowY,
                centerOffset: arrowCenterOffset
            } = {} 
        }
    }= useFloating({
        placement: tooltipPlacement,
        middleware: [
            offset(6), 
            flip(), 
            shift({ padding: 5 }), 
            arrow({ 
                element: arrowRef 
            })
        ] 
    })

    useEffect(() => {
        if (!refs.reference.current || !refs.floating.current) {
          return
        }
     
        const parents = [
          ...getScrollParents(refs.reference.current),
          ...getScrollParents(refs.floating.current),
        ]
     
        parents.forEach((parent) => {
          parent.addEventListener('scroll', update)
          parent.addEventListener('resize', update)
        })
     
        return () => {
          parents.forEach((parent) => {
            parent.removeEventListener('scroll', update)
            parent.removeEventListener('resize', update)
          })
        }
    }, [refs.reference, refs.floating, update])

    const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
    }[placement.split('-')[0]]

    const tooltipSize = {
        height: '50px', 
        width: '200px'
    }

    return (
        <>
            <StyledTooltipTrigger 
                {...interactionProps} 
                {...interactionStates}
                ref={reference}
            > 
                {TRIGGER_CONTENT} 
            </StyledTooltipTrigger>

            <StyledTooltipContainer
                isVisible={isHovered || isPressed || isFocused || isOpen}
                ref={floating}
                css={{
                    position: 'absolute',
                    top: y ?? '',
                    left: x ?? '',
                    ...tooltipSize          
                }}
            >
                <StyledTooltipContent 
                    css={{  
                        height: `calc(${tooltipSize.height} - $2)`,
                        width: `calc(${tooltipSize.width} - $4)`
                    }}
                >
                    {TOOLTIP_CONTENT}
                </StyledTooltipContent>

                <StyledTooltipArrow 
                    ref={arrowRef} 
                    placement={tooltipPlacement}
                    css={{ 
                        position: 'absolute',
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: '-4px',
                    }} 
                />
            </StyledTooltipContainer>  
        </>
    )
}
