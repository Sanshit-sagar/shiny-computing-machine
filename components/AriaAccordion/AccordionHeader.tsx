import { ReactNode, RefObject, forwardRef } from 'react' 

import { useAccordionContext } from './utils'

import { Node } from '@react-types/shared' 
import { mergeProps } from '@react-aria/utils'

import { useButton } from '@react-aria/button'
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

import { StyledHeading, StyledTitle, StyledButton } from './styles'

type AccordionHeaderProps<T> = {
    item: Node<T>; 
    children: ReactNode; 
    index: number; 
} & { ref?: RefObject<HTMLButtonElement>; }

const AccordionHeader = <T extends object>(
    props: AccordionHeaderProps<T>, 
    ref: RefObject<HTMLButtonElement>
) => {

    const { item, children, index } = props
    const { selectedKey, setSelectedKey, disabledKeys, size } = useAccordionContext()

    const isSelected = selectedKey !== null && selectedKey === item.key
    const isDisabled = disabledKeys.has(item.key)

    const { isHovered, hoverProps } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true })
    const { isPressed, buttonProps } = useButton({ 
        onPress: (event) => setSelectedKey(isSelected ? null : item.key),
        isDisabled
    }, ref)

    const mergedProps = mergeProps(buttonProps, focusProps, hoverProps)

    const interactions = { 
        isHovered, 
        isFocused, 
        isPressed,
        isFocusVisible, 
        isDisabled, 
        isSelected,
        isFirst: index == 0,
        isLast: index == size - 1
    }

    return (
        <StyledHeading>
            <StyledButton
                {...mergedProps}
                id={`accordion-trigger-${item.key}`}
                aria-controls={`accordion-panel-${item.key}`}
                aria-expanded={isSelected.toString()}
                className="Accordion-trigger"
                {...interactions}
                ref={ref}
                isFirst={index==0}
                isLast={index==size-1}
                isSelected={isSelected}
            >
                <StyledTitle className="Accordion-title" {...interactions}> 
                    {children}
                </StyledTitle>
            </StyledButton>
        </StyledHeading>
    )
}

AccordionHeader.displayName = 'AccordionHeader'
const _AccordionHeader = forwardRef(AccordionHeader) as <T>(props: AccordionHeaderProps<T> & {
    ref?: RefObject<HTMLDivElement>
}) => ReturnType<typeof AccordionHeader>

export { 
    _AccordionHeader as AccordionHeader 
}