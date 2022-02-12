import { useRef } from 'react' 
import { styled, CSS } from 'stitches.config'

import Checkbox from '@/components/Checkbox'
import { RobotIcon } from '@/components/Icons'

import { useHover } from '@react-aria/interactions'
import { useFocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'
import { useCheckbox } from '@react-aria/checkbox'
import { useToggleState } from '@react-stately/toggle'
import { useLocale } from '@react-aria/i18n'
import { VisuallyHidden } from '@react-aria/visually-hidden'

import {
    PressEvents,
    HoverEvents,
    FocusEvents
} from '@/interfaces/Interactions'

// https://codepen.io/TommiTikall/pen/KymYBN
// https://5t3ph.dev/a11y-forms 
// https://www.sarasoueidan.com/blog/style-settings-with-css-variables/
// https://codepen.io/scottohara/pen/MWoEGZe

const cssVariables: CSS = {
    '--theme-bg': '#fff',
    '--theme-text': '#000',
    '--theme-shadow': '#fdd',
    '--theme-bg-hover': '#7d7d',
    '--theme-text-hover': '#8cc',
    '--theme-border-hover': '#7eee',
    '--theme-focus': '#909',
    '--theme-active': '#d7d911',
    '--theme-focus-visible': '#454588',
    '--theme-focus-within': '#1122aa',
    '--theme-bg-disabled': '#999',
    '--theme-text-disabled': '#ccc',
    '--theme-border-disabled': '#333',

    '--transition-duration': '300ms',

}


const FormControl = styled('fieldset', {
    ...cssVariables,

    display: 'grid',
    gridTemplateColumns: '1em auto',
    gap: '0.5em',

    variants: {
        isDisabled: {
            true: {
                color: 'var(--theme-disabled-text)',
                background: 'var(--theme-disabled-bg)',
            },
            false: null
        }
    },
    defaultVariants: {
        isDisabled: false
    }
})

const StyledLabel = styled('label', {
    ...cssVariables,

    appearance: 'none',
    userSelect: 'no-select',
    WebkitTapHighlightColor: 'transparent',

    height: 'fit-content',
    width: 'fit-content',

    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    '& svg': {
        width: '24px',
        height: '24px',
        cursor: 'pointer',
        '& rect': {
            x: 1,
            y: 1,
            height: '22px',
            width: '22px',
            rx: '10%',
            ry: '10%',
            stroke: '$accentBorder',
            strokeWidth: '1px'
        }
    },
    variants: {
        isChecked: {
            true: {
                '& svg': {
                    '& rect': {
                        transition: 'all 0.4s ease-in',
                        fill: 'currentColor'
                    },
                    '& path': {
                        transition: 'all 0.2s ease-in',
                        opacity: 1,
                        visibility: 'visible',
                        fill: '$white1',
                        stroke: '$accentText',
                        strokeWidth: '1px',
                        pointerEvents: 'all'
                    }
                }
            },
            false: {
                '& svg': {
                    '& rect': {
                        transition: 'all 0.4s ease-out',
                        fill: '$white1'
                    },
                    '& path': {
                        transition: 'all 0.2s ease-out',
                        opacity: 0,
                        visibility: 'hidden',
                        fill: 'none',
                        pointerEvents: 'none'
                    }
                }
            }
        },
        isFocused: {
            true: {
                transition: 'outline 0.3s ease',
                outline: '2px solid dodgerblue',
                outlineOffset: '2px',
                borderRadius: '2px'
            },
            false: null
        },
        isHovered: {
            true: {
                '& svg': {
            
                }
            },
            false: null
        },
        isDisabled: {
            true: {
                transition: 'all 0.3s ease',
                background: 'var(--theme-bg-disabled)',
                border: 'var(--theme-border-disabled)',
                color: 'var(--theme-text-disabled)',
                pointer: 'not-allowed',
                pointerEvents: 'none'
            },
            false: null
        },
        isLoading: {
            true: {

            },
            false: null
        },
        direction: {
            'ltr': {
                transform: 'rotate(0deg)'
            },
            'rtl': {
                transform: 'rotate(180deg)'
            }
        }
    },
    defaultVariants: {
        isChecked: false,
        isFocused: false,
        isHovered: false,
        isDisabled: false,
        isLoading: false,
        direction: 'ltr'
    }
})

const StyledLabelText = styled('span', {
    position: 'relative',
    fontFamily: '$jetbrains',
    fontSize: '13px',
    fontWeight: 300,
    lineHeight: 1,
    direction: 'ltr' 
})


interface CheckboxInstanceProps extends FocusEvents, HoverEvents, PressEvents {
    isDisabled?: boolean;
    isLoading?: boolean;
    checked?: boolean; 
    defaultChecked?: boolean; 
    onCheckedChange?: (checked: boolean) => void; 
    autoFocus?: boolean;
    excludeFromTabOrder?: boolean;
    label?: string; 
}

export const CheckboxInstance = ({ 
    isDisabled = false, 
    isLoading = false,
    autoFocus = false,
    label,
    ...props
}: CheckboxInstanceProps) => {
    const { direction } = useLocale() 
    const checkboxRef = useRef<HTMLInputElement>()

    const state = useToggleState(props)
    const { inputProps } = useCheckbox(props, state, checkboxRef)
    
    const { hoverProps, isHovered } = useHover({ isDisabled })
    const { isFocused, isFocusVisible, focusProps } = useFocusRing({ 
        within: true, 
        isTextInput: false, 
        autoFocus 
    })

    return (

        <FormControl 
            {...mergeProps(hoverProps,focusProps)} 
            isDisabled={isDisabled}
        >
            <StyledLabel
                isChecked={state.isSelected}
                isHovered={isHovered}
                isFocused={isFocused || isFocusVisible}
                isDisabled={isDisabled}
                isLoading={isLoading}
                direction={direction}
            >
                <VisuallyHidden>
                    <input 
                        {...inputProps} 
                        {...focusProps} 
                        {...hoverProps} 
                        type="checkbox" 
                    />
                </VisuallyHidden>

                <svg aria-hidden="true">
                    <rect className="checkbox-rect" />
                    
                    <path
                        transform="scale(1.5) translate(3 3)"
                        d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
                        1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
                        6A.999.999 0 0 1 3.788 9z`} 
                    />
                </svg>

                <StyledLabelText> {label} </StyledLabelText> 

            </StyledLabel>
        </FormControl>
    )
}

export const CheckboxInstanceOnOff = () => (
    <Checkbox.Root defaultSelected={false}>
        <Checkbox.On shape='square' size={2}> <RobotIcon /> </Checkbox.On> 
        <Checkbox.Off shape='square' size={2} />
        <Checkbox.Label> Apocalypse </Checkbox.Label>  
    </Checkbox.Root>
) 


// pass defaults to root or to individual subcomponents -> overwrite w/ merge props 
// icon specified as param to root, or as a child to subcomponents
// create an async version with <Async /> 
// animation, animationDuration etc. 
// loading, loading effect around border 