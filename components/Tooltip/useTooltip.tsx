import { useEffect, useRef } from 'react' 
import { useFloating, shift, flip, offset, arrow, getScrollParents } from '@floating-ui/react-dom'
import { getTooltipStyles, getInteractionStates } from './utils'
import { UseTooltipProps, UseTooltipReturnValue } from './types'

export const useTooltip = (props: UseTooltipProps): UseTooltipReturnValue => {
    const { placement = 'right', isDisabled = false, isLoading = false, isOpen } = props 

    const arrowRef = useRef<HTMLDivElement>()

    const {
        x, 
        y, 
        reference, 
        floating, 
        strategy, 
        update, 
        refs,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }  
    }= useFloating({
        placement,
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
        if (!refs.reference.current || !refs.floating.current) return
     
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

    const tooltipStyles = getTooltipStyles({ x, y, arrowX, arrowY, placement, strategy })
    const interactionStates = getInteractionStates({ isDisabled, isLoading, isOpen })

    return {
        triggerRef: reference,
        floatingRef: floating,
        arrowRef,
        ...tooltipStyles,
        ...interactionStates
    }
}