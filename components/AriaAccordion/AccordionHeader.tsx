import { ReactNode, RefObject, forwardRef } from 'react' 
import { styled } from 'stitches.config'

import { useAccordionContext } from './utils'

import { Node } from '@react-types/shared' 
import { mergeProps } from '@react-aria/utils'

import { useButton } from '@react-aria/button'
import { useFocusRing } from '@react-aria/focus'
import { useHover } from '@react-aria/interactions'

type AccordionHeaderProps<T> = {
    item: Node<T>; 
    children: ReactNode; 
} & { ref?: RefObject<HTMLButtonElement>; }

const AccordionHeader = <T extends object>(
    props: AccordionHeaderProps<T>, 
    ref: RefObject<HTMLButtonElement>
) => {

    const { item, children } = props
    const { selectedKey, setSelectedKey, setActivePanelDims, disabledKeys } = useAccordionContext()

    const isSelected = selectedKey !== null && selectedKey === item.key
    const isDisabled = disabledKeys.has(item.key)

    const { isHovered, hoverProps } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true })
    const { isPressed, buttonProps } = useButton({ 
        onPress: (event) => {
            setSelectedKey(isSelected ? null : item.key)
            setActivePanelDims(event.target.getBoundingClientRect())
        },
        isDisabled
    }, ref)

    const mergedProps = mergeProps(buttonProps, focusProps, hoverProps)

    const interactions = { isHovered, isFocused, isPressed, isFocusVisible, isDisabled, isSelected }

    return (
        <h3 style={{ all: 'unset' }}>
            <StyledButton
                {...mergedProps}
                id={`accordion-trigger-${item.key}`}
                aria-controls={`accordion-panel-${item.key}`}
                aria-expanded={isSelected.toString()}
                className="Accordion-trigger"
                {...interactions}
                ref={ref}
            >
                <StyledTitle className="Accordion-title" {...interactions}> 
                    {children}
                </StyledTitle>
            </StyledButton>
        </h3>
    )
}

AccordionHeader.displayName = 'AccordionHeader'
const _AccordionHeader = forwardRef(AccordionHeader) as <T>(props: AccordionHeaderProps<T> & {
    ref?: RefObject<HTMLDivElement>
}) => ReturnType<typeof AccordionHeader>

export { 
    _AccordionHeader as AccordionHeader 
}

const StyledButton = styled('button', {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    whiteSpace: 'nowrap',

    width: '100%',
    height: 'fit-content',
    padding: '$2',
    margin: 0,

    backgroundColor: '$dark1',
    border: 'none',
    borderRadius: 'inherit',
  
    boxShadow: 'none',

    color: '$white1',
    transition: 'all 0.3s ease',
    outline: '2px solid transparent',
    outlineOffset: '2px',

    variants: {
        isHovered: {
            true: {
                backgroundColor: '$dark2',
            },
            false: null
        },
        isFocused: {
            true: {
            
            },
            false: null
        },
        isPressed: {
            true: {

            },
            false: null
        },
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        },
        isSelected: {
            true: {
            
            
            
            },
            false: null
        },
        isDisabled: {
            true: {
                backgroundColor: '$disabledBg',
                borderColor: '$disabledBorder',
                color: '$disabledText',
                cursor: 'not-allowed'
            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isFocusVisible: false,
        isDisabled: false,
        isSelected: false
    }
})

const StyledTitle = styled('span', {
    appearance: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    height: '100%',
    width: '100%', 
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 0,
    flexWrap: 'nowrap',
    overflow: 'hidden',

    fontFamily: '$jetbrains',
    fontSize: '$3',
    fontWeight: 'bold',
    fontVariant: 'tabular',
    verticalAlign: 'middle',

    textAlign: 'start',
    textOverflow: 'ellipsis',
    textDecoration: 'none',

    color: '$black2',
    
    variants: {
        isHovered: {
            true: {
                color: '$black1'
            },
            false: null
        },
        isFocused: {
            true: null,
            false: null
        },
        isPressed: {
            true: null,
            false: null
        },
        isFocusVisible: {
            true: null,
            false: null
        },
        isSelected: {
            true: {
                color: '$white1'
            },
            false: null
        },
        isDisabled: {
            true: {
                color: '$disabledText'
            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isSelected: false,
        isDisabled: false
    }
})