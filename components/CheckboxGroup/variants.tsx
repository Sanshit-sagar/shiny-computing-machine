import { useRef, createContext, useContext, ReactNode, FormEventHandler } from 'react' 
import { styled } from 'stitches.config'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useCheckboxGroupState } from '@react-stately/checkbox'
import { useCheckboxGroup, useCheckboxGroupItem } from '@react-aria/checkbox'
import { SketchLogoIcon, NotionLogoIcon, FramerLogoIcon, FigmaLogoIcon } from '@radix-ui/react-icons'
import { useId } from '../Dropdown/hooks'

const StyledCheckboxGroup = styled('div', {
    userSelect: 'none',
    
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',

    width: '90%',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',

    '& > *': {
        margin: '0.5rem 0.5rem'
    }
})

const StyledCheckbox = styled('div', {

})

const StyledCheckboxWrapper = styled('label', {

})

const StyledCheckboxInput = styled('input', {
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    height: '1px',
    overflow: 'hidden',

    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',

    '&:focus': {
        borderColor: '#2260ff',
        boxShadow: `
            0 5px 10px rgba(#000, 0.1), 
            0 0 0 4px #b5c9fc
        `,

        '&::before': {
            transform: 'scale(1)',
            opacity: 1
        }
    }
})

const StyledCheckboxTile = styled('span', {
    cursor: 'pointer',
    position: 'relative',
    userSelect: 'none',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '5.5rem',
    minHeight: '5.5rem',
    border: '1px solid #b5bfd9',
    borderRadius: '0.5rem',

    backgroundColor: '$accentBg',
    boxShadow: '0 5px 10px rgba($accentTextContrast, 0.1)',
    transition: 'all 300ms ease',

    '&::before': {
        content: "",
        position: 'absolute',
        display: 'block',

        width: '$3',
        height: '$3',
        border: '1.25px solid #b5bfd9',
        backgroundColor: '$accentBg',
        borderRadius: '$1',

        top: '0.25rem',
        left: '0.25rem',
        opacity: 0,
        transform: 'scale(0)',
        transition: 'transform 300ms ease',

        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E")`,
        backgroundSize: '12px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    },

    '&:hover': {
        bc: '$accentBgHover',
        borderColor: '#2260ff',

        '&::before': {
            transform: 'scale(1.0)',
            opacity: 1
        }
    },

    variants: {
        isSelected: {
            true: {
                $$shadowColor: '$colors$accentTextContrast',
                boxShadow: '0 5px 10px rgba($$shadowColor, 0.1)',
                color: '#2260ff',
                borderColor: '#2260ff',

                '&::before': {
                    transform: 'scale(1)',
                    opacity: 1,
                    backgroundColor: '#2260ff',
                    borderColor: '#2260ff'
                }
            },
            false: null
        }
    }
})

const StyledCheckboxIcon = styled('span', {
    transition: '375ms ease',
    color: '#494949',

    '& svg': {
        width: '3rem',
        height: '3rem'
    },

    variants: {
        isSelected: {
            true: {
                color: '#2260ff'
            },
            false: null
        }
    },
    defaultVariants: {
        isSelected: false
    }
})

const StyledCheckboxLabel = styled('span', {
    userSelect: 'none',
    appearance: 'none',
    WebkitTapHighlightColor: 'transparent',

    transition: 'color 375ms ease',

    color: '$accentText',
    textAlign: 'center',
   
    fontFamily: '$jetbrains',
    fontSize: '13px',
    fontWeight: 400,
    fontStyle: 'normal',
    fontVariant: 'tabular',
    verticalAlign: 'middle',
    letterSpacing: '$2',

    variants: {
        isSelected: {
            true: {
                color: '#2260ff'
            },
            false: null
        }
    },
    defaultVariants: {
        isSelected: false
    }
})


type CheckboxItemProps = {
    id?: string; 
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean; 
    excludeFromTabOrder?: boolean;
    validationState?: 'valid' | 'invalid';
    autoFocus?: boolean;
    value: string;
    name?: string;
    isIndeterminate?: boolean;
    children?: ReactNode;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-details'?: string;
    'aria-errormessage'?: string; 
    isSelected?: boolean;
    defaultSelected?: boolean;
    onChange?: (isSelected: boolean) => void; 
}
type CheckboxItemContent = { 
    value: string; 
    icon: ReactNode | HTMLOrSVGElement; 
}

type CheckboxItemState = CheckboxItemProps & CheckboxItemContent


const Checkbox = (props: CheckboxItemProps & { index: number; value: string; icon: ReactNode | HTMLOrSVGElement; }) => {

    const ref = useRef<HTMLInputElement>()
    const state = useContext(CheckboxGroupContext)
    const { inputProps } = useCheckboxGroupItem(props, state, ref)

    const checkboxProps: CheckboxItemProps = {
        id: props.id || useId(),
        name: `item-${props.index}`,
        value: props.value,
        isSelected: state.isSelected(props.value),
        isDisabled: state.isDisabled || props.isDisabled,
        isIndeterminate: false,
        isReadOnly: false,
        isRequired: false,
        autoFocus: false
    }

    const checkboxState: CheckboxItemState = {
        ...checkboxProps,
        value: props.value,
        icon: props.icon
    }

    return (
        <StyledCheckbox>
            <StyledCheckboxWrapper>
                <VisuallyHidden>
                    <StyledCheckboxInput {...inputProps} type="checkbox" />
                </VisuallyHidden>

                <StyledCheckboxTile {...checkboxState}>
                    <StyledCheckboxIcon {...checkboxState}> {checkboxState.icon} </StyledCheckboxIcon>
                    <StyledCheckboxLabel {...checkboxState}> {checkboxState.value} </StyledCheckboxLabel>
                </StyledCheckboxTile> 
            </StyledCheckboxWrapper>
        </StyledCheckbox> 
    )
}

const CheckboxGroupContext = createContext(null)

export const CheckboxGroup = (props) => {
    const state = useCheckboxGroupState(props)
    const { groupProps, labelProps } = useCheckboxGroup(props, state)

    const items: CheckboxItemContent[] = [
       { value: 'Sketch', icon: <SketchLogoIcon /> },
       { value: 'Discord', icon: <NotionLogoIcon /> },
       { value: 'Framer', icon: <FramerLogoIcon />},
       { value: 'Figma', icon: <FigmaLogoIcon /> }
    ]

    return (
        <StyledCheckboxGroup {...groupProps}>
            {props.label && (
                <StyledCheckboxLabel {...labelProps}> 
                    {props.label} 
                </StyledCheckboxLabel>
            )}
            <CheckboxGroupContext.Provider value={state}>
                {items.map((item: CheckboxItemContent, index: number) => (
                    <Checkbox key={`checkbox-tile-${index}`} index={index} {...item} />
                ))}
            </CheckboxGroupContext.Provider>
        </StyledCheckboxGroup>
    )
}