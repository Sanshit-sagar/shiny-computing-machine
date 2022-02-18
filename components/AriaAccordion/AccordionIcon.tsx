import { forwardRef, ReactNode, RefObject, ElementRef, ComponentPropsWithoutRef} from 'react' 
import { CSS } from 'stitches.config'

interface AccordionIconProps {
    id?: string;
    opened?: ReactNode | HTMLOrSVGElement;
    closed?: ReactNode | HTMLOrSVGElement;
    isSelected: boolean;
    isDisabled: boolean; 
}

const DEFAULT_TAG = 'span'
type IconElement = ElementRef<typeof DEFAULT_TAG>
type IconProps = Omit<ComponentPropsWithoutRef<typeof DEFAULT_TAG>, keyof AccordionIconProps> & AccordionIconProps & {
    css?: CSS;
    children?: ReactNode; 
}

export const AccordionIcon = forwardRef<IconElement, IconProps>(({ 
    id, 
    opened = '-', 
    closed = '+',
    isSelected,
    isDisabled
}, ref: RefObject<HTMLSpanElement>) => {

    return (
        <span 
            id={`accordion-icon-${id}`}
            className="Accordion-icon" 
            aria-hidden="true"
            ref={ref}
        > 
            {isDisabled ? closed : isSelected ? opened : closed} 
        </span>
    )
})

AccordionIcon.displayName = 'AccordionIcon'
 
