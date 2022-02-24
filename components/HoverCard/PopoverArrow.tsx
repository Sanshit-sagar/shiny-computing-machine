import { forwardRef } from 'react' 
import { styled, CSS, VariantProps } from 'stitches.config'

const cssVars: CSS = {
    '--popover-arrow-height': '8px',
    '--popover-arrow-width': '8px',
    '--popover-arrow-z-index': 100,

    '--popover-arrow-background': 'inherit',
    '--popover-arrow-background-hover': 'inherit',
    '--popover-arrow-background-focus': 'inherit',
    '--popover-arrow-background-disabled': 'inherit',

    '--popover-arrow-border-width': '1px',
    '--popover-arrow-border-style': 'solid',
    '--popover-arrow-border-inward-color': 'transparent',
    '--popover-arrow-border-outward-color': '$colors$white1',
    '--popover-arrow-border-radius': '$sizes$1',
    
    '--popover-arrow-transform-top': 'rotate(-45deg)',
    '--popover-arrow-transform-bottom': 'rotate(135deg)',
    '--popover-arrow-transform-left': 'rotate(225deg)',
    '--popover-arrow-transform-right': 'rotate(45deg)',

    '--popover-placement-top-position-x': '35%',
    '--popover-placement-top-position-y': '10%',
    '--popover-placement-bottom-position-x': '35%',
    '--popover-placement-bottom-position-y': '10%',
    '--popover-placement-left-position-x': '10%',
    '--popover-placement-left-position-y': '35%',
    '--popover-placement-right-position-x': '10%',
    '--popover-placement-right-position-y': '35%'
}   

export const StyledArrow = styled('div', {
    ...cssVars, 

    position: 'absolute',
    height: '12px',
    width: '12px',
    zIndex: 1,

    backgroundColor: 'rgba(31, 37, 42, 1.0)',
    borderLeft: '2px solid rgba(31, 37, 42, 1.0)',
    borderBottom: '2px solid rgba(31, 37, 42, 1.0)',

    borderRadius: '1px',
    
    variants: {
        placement: {
            'top': { transform: 'rotate(-45deg)', right: '40%', bottom: '0%'  },
            'top-start': { },
            'top-end': { },
            'bottom': { transform: 'rotate(135deg)', right: '40%', top: '0%' },
            'bottom-start': { },
            'bottom-end': { },
            'left': { transform: 'rotate(225deg)', right: '0%', top: '47.5%'  },
            'left-start': { },
            'left-end': { },
            'right': { transform: 'rotate(45deg)', left: '0%', top: '47.5%' },
            'right-start': { },
            'right-end': { }
        }
    },
    defaultVariants: {
        placement: 'top'
    }
})


export type ArrowProps  =  VariantProps<typeof StyledArrow> & { css?: CSS; }

const PopoverArrow = forwardRef<HTMLDivElement, ArrowProps>(
    (props, forwardedRef) => {

        return (
            <StyledArrow id="arrow" {...props} ref={forwardedRef} />     
        )
    }
)

PopoverArrow.displayName = 'PopoverArrow'
export default PopoverArrow


