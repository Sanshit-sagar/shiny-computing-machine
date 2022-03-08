import { useEffect, useState, FormEvent } from 'react'
import { styled, CSS } from 'stitches.config'

import { useHover } from '@react-aria/interactions'

const cssVariables: CSS = {
    '--text-inactive': '$colors$disabledLine',
    '--text': '$colors$accentText',
    '--text-placeholder': '$colors$infoText',
    '--icon': '$colors$disabledLine',
    '--icon-hover': '$colors$accentText',
    '--icon-focus': '$colors$accentTextContrast',
    '--icon-valid': '$colors$successSolid',
    '--icon-invalid': '$colors$dangerSolid',
    '--background': '$colors$accentBase',
    '--background-hover': '$colors$accentBgHover',
    '--background-focus': '$colors$accentBgActive',
    '--border': '$colors$accentBorder',
    '--border-hover': '$colors$accentBorderHover',
    '--border-focus': '$colors$accentFocusRing',
    '--shadow-focus': 'rgba(39, 94, 254, 0.32)',

    '--suffix-background': '$colors$accentSolid',
    '--suffix-background-hover': '$colors$accentSolidHover',
    '--suffix-background-focus': '$colors$accentSolidActive',
    '--suffix-icon': '$colors$accentText',
    '--suffix-icon-hover': '$colors$accentTextContrast',
    '--suffix-icon-focus': '$colors$accentTextContrast',
    '--suffix-opacity': 0,
    '--suffix-scale': 0
}

export const StyledContainer = styled('div', {
    ...cssVariables,

    position: 'relative',
    maxWidth: '300px',
    width: '100%',
    

    '& svg': {
        top: '10px',
        left: '10px',
        display: 'block',
        position: 'absolute',
        fill: 'none',
        stroke: 'var(--i, var(--icon))',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',

        strokeWidth: 1.6,
        transition: 'stroke 300ms ease',

        '& path': {
            strokeDasharray: 80,
            strokeDashoffset: 'var(--path ,170)',
            transition: 'stroke-dashoffset 500ms ease var(--path-delay, 300ms)'
        },
        '& polyline': {
            strokeDasharray: '12',
            strokeDashoffset: 'var(--tick, 12)',
            transition: 'stroke-dashoffset 450ms ease var(--tick-delay, 0s)'
        }
    },
    
    variants: {
        isValid: {
            true: {
                '--i': 'var(--icon-valid)',
                '--path': 132,
                '--path-delay': '0ms',
                '--tick': 0,
                '--tick-delay': '300ms'
            },
            false: null
        },
        isInvalid: {
            true: {
                '--i': 'var(--icon-invalid)'
            },
            false: null
        },
        isHovered: {
            true: {
                '--bc': 'var(--border-hover)',
                '--i': 'var(--icon-hover)',
            },
            false: null
        },
        isFocused: {
            true: {
                '--bc': 'var(--border-focus)',
                '--i': 'var(--icon-focus)',
                '& input': {
                    boxShadow: '0 1px 6px -1px var(--shadow-focus)'
                }
            },
            false: null
        },
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        }
    },
    compoundVariants: [
        {
            isValid: false,
            isInvalid: false,
            isHovered: false,
            isFocused: false,
            isFocusVisible: false,
            css: {  
                '--i': 'var(--icon)'
            }
        }
    ],
    defaultVariants: {
        isValid: false,
        isInvalid: false
    }
})

export const StyledInput = styled('input', {
    ...cssVariables,
    appearance: 'none',
    width: '100%',
    outline: 'none',
    display: 'block',
    fontSize: '13px',
    fontFamily: '$jetbrains',
    margin: 0,
    padding: '$2 $4 $2 $6',

    verticalAlign: 'middle',
    textAlign: 'left',
    lineHeight: '20px',
    borderRadius: '$2',

    color: 'var(--text)',
    border: '1.25px solid var(--bc, var(--border))',
    background: 'var(--background)',
    transition: `
        border-color 300ms ease, 
        box-shadow 300ms ease
    `,
    '&::placeholder': {
        color: 'var(--text-inactive)'
    },
    '&::selection': {
        backgroundColor: '$accentTextContrast',
        opacity: 0.2,
        color: '$accentBase'
    },
    caretColor: '$accentTextContrast'
})

export const StyledSuffix = styled('button', {
    ...cssVariables,

    appearance: 'none',
    position: 'relative',
    zIndex: 1,

    padding: 0,
    margin: '12px 12px 12px 0',
    border: 'none',
    outline: 'none',

    background: 'var(--suffix-background)',
    transition: 'background 300ms ease',
    borderRadius: '6px',

    opacity: 'var(--suffix-opacity)',
    transform: 'scale(var(--suffix-scale)) translateZ(0)',

    '& svg': {

        '&.line': {
            display: 'block',
            position: 'relative',
            zIndex: 1,
            width: '20px',
            height: '20px',
            outline: 'none',
            cursor: 'pointer',
            fill: 'none',
            stroke: 'var(--suffix-icon)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            '& path': {
                transition: 'stroke 300ms ease'
            }
        }
    }
})

const emailRegex = new RegExp(
    '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
)

const LinkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.05 7.95001C11.55 9.45001 11.55 11.775 10.05 13.275L7.95 15.375C6.45 16.875 4.125 16.875 2.625 15.375C1.125 13.875 1.125 11.55 2.625 10.05L4.5 8.25001" />
        <path d="M7.9502 10.05C6.4502 8.55 6.4502 6.225 7.9502 4.725L10.0502 2.625C11.5502 1.125 13.8752 1.125 15.3752 2.625C16.8752 4.125 16.8752 6.45 15.3752 7.95L13.5002 9.75" />
        <polyline points="5 9.25 8 12 13 6" />
    </svg>
)

const AtIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5,10.5 C6.4987941,17.5909626 1,3.73719105 11.5,6 C10.4594155,14.5485365 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9 C1,13.418278 4.581722,17 9,17 C13.418278,17 17,13.42 17,9" />
        <polyline points="5 9.25 8 12 13 6" />
    </svg>
)

const renderIcon = ({ type }: { type: 'email' | 'url' | 'todo' }) => {
    if(type === 'email')
        return <AtIcon />
    if(type === 'url')
        return <LinkIcon />
    return <AtIcon />  
}

type InputProps = { 
    type?: 'email' | 'url' | 'todo'; 
    placeholder?: string; 
}

const TextInput = ({ 
    type = 'email', 
    placeholder = 'sanshit.sagar@gmail.com',
    ...rest
}: InputProps) => {

    const [value, setValue] = useState<string>('')
    const [isValid, setValid] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        setValid(
            (value?.length ?? 0) > 5 ? emailRegex.test(value) : undefined
        )    
    }, [value, isValid, setValid, setValue, emailRegex])

    const handleChange = (event: FormEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

    const { hoverProps, isHovered } = useHover({ isDisabled: false })
    
    return (
        <StyledContainer
            {...hoverProps}
            isValid={isValid !== undefined && isValid === true}
            isInvalid={isValid !== undefined && isValid === false}
            isHovered={isHovered}
            isFocused={false}
        >
            <> {renderIcon({ type })} </>
            <StyledInput 
                type="email" 
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />        
        </StyledContainer>
    )
}

TextInput.displayName = 'TextualInput'
export default TextInput