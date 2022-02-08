import { useEffect, useRef } from 'react' 
import { useFloating, shift, offset, flip, arrow, getScrollParents } from '@floating-ui/react-dom'

const tooltipSize = { 
    height: '50px', 
    width: '200px' 
}

interface UseTooltipProps {
    tooltipPlacement?: 'left' | 'top' | 'bottom' | 'right'
    offset?: number; 
    shift?: number; 
}

export const useTooltip = ({ 
    tooltipPlacement = 'left',
    offset = 10,
    shift = 5 
}: UseTooltipProps) => {
    const arrowRef = useRef<HTMLDivElement>()

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
            offset(offset), 
            flip(), 
            shift({ 
                padding: shift
            }), 
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
        left: 'right' 
    }[placement.split('-')[0]]


    return {
        triggerRef: reference,
        floatingRef: floating,
        arrowRef: arrowRef,
        tooltipLeft: x ?? '',
        tooltipTop: y ?? '',
        arrowLeft: arrowX != null ? `${arrowX}px` : '',
        arrowTop: arrowY != null ? `${arrowX}px` : '',
        tooltipHeight:  `calc(${tooltipSize.height} - $2)`,
        tooltipWidth: `calc(${tooltipSize.width} - $4)`,
        arrowOffset: arrowCenterOffset,
        placement,
        strategy,
        update,
        staticSide,
        tooltipSize
    }
}