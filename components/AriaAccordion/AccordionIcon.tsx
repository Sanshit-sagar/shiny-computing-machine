import { forwardRef, ReactNode, RefObject, ElementRef, ComponentPropsWithoutRef} from 'react' 
import { CSS } from 'stitches.config'

import { useAccordionContext } from './utils'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import { Node } from '@react-types/shared'
import { StyledIcon } from './styles'

interface AccordionIconProps {
    id?: string;
    item: Node<any>;
}

const DEFAULT_TAG = 'span'
type IconElement = ElementRef<typeof DEFAULT_TAG>
type IconProps = Omit<ComponentPropsWithoutRef<typeof DEFAULT_TAG>, keyof AccordionIconProps> & AccordionIconProps & {
    css?: CSS;
    children?: ReactNode; 
}

export const AccordionIcon = forwardRef<IconElement, IconProps>((props, ref: RefObject<HTMLSpanElement>) => {
    const { id, item } = props

    const { openIcon = <PlusIcon />, closeIcon =<MinusIcon /> } = item.props 

    const { selectedKey, disabledKeys } = useAccordionContext()

    const isSelected = selectedKey !== null && selectedKey === item.key
    const isDisabled = disabledKeys.has(item.key)

    return (
        <StyledIcon 
            id={`accordion-icon-${id}`}
            className="Accordion-icon" 
            aria-hidden="true"
            ref={ref}
            isSelected={isSelected}
        >
            {isSelected ? openIcon : closeIcon}
        </StyledIcon> 
    )
})

AccordionIcon.displayName = 'AccordionIcon'