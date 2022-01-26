import { ReactNode, ElementType } from 'react'
import { styled, CSS, VariantProps } from 'stitches.config'
import { Flex } from '@/components/Flex'

import {  
    infoVariant,
    dangerVariant, 
    warningVariant,
    primaryVariant,
    successVariant, 
    outlinedVariant
} from '@/components/Button/variants'

export const AccessibleButton = styled('button', {
    WebkitWritingMode: 'horizontal-tb !important',

    appearance: 'none',
    fontFamily: 'inherit',
    display: 'inline-block',
    minWidth: '6.25em',

    border: '1px solid transparent',
    borderRadius: '0.3125em',

    textRendering: 'auto',
    textDecoration: 'none',
    textAlign: 'center',

    backgroundColor: '$accentBorder',
    color: '$accentText',

    cursor: 'pointer',

    willChange: 'background-color, border-color, color, opacity',
    transition: 'all 0.2s ease-out',
    
    $$buttonBoxShadow: '$colors$accentFocusRing',

    '&:hover': {
        '&:not(:disabled)': {
            '& svg': {
                fill: '$light1'
            }
        }
    },
    '&:focus': {
        '&:not(:disabled)': {
            outline: 'none',
            boxShadow: '0 0 0 1px $$buttonBoxShadow',

            '& svg': {
                fill: '$accentTextContrast'
            }
        }
    },
    '&:active': {
        '&:not(:disabled)': {
            transform: 'translateY(2px)',
            
        }
    },
    '&:disabled': {
        backgroundColor: '$disabledBg',
        color: '$disabledTextContrast',
        cursor: 'not-allowed'
    },

    '& svg': {
        display: 'inline-block',
        verticalAlign: 'middle',
        fill: 'currentColor',
        transition: 'all 0.2s ease-in-out'
    },

    variants: {
        size: {
            0: {
                fontSize: '80%',
                padding: '0.485em 0.68em'
            },
            1: {
                fontSize: '1em',
                padding: '0.625em 0.85em'
            },
            2: {
                fontSize: '120%',
                padding: '0.76em 1.02em'
            },
            3: {
                fontSize: '140%',
                padding: '0.9em 1.19em'
            }
        },
        shape: {
            circle: {
                br: '50%',
                aspectRatio: '1'
            },
            oval: {
                br: '$6',
            },
            rounded: {
                br: '$2',
            },
            sharp: {
                br: '0em'
            },
            alternating: {
                bblr: '$5', btrr: '$5', bbrr: '$2', btlr: '$2' 
            }
        },
        iconOnly: {
            true: {
                minWidth: 'initial',
                textAlign: 'center',
                padding: '0.485 0.68'
            },
            false: null
        },
        visuallyHidden: {
            true: {
                border: '0',
                clip: 'rect(0,0,0,0)',
                clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',
                width: '1px',
                whiteSpace: 'nowrap'
            },
            false: null
        },
        intent: {
            primary: primaryVariant,
            success: successVariant,
            danger: dangerVariant,
            info: infoVariant,
            warning: warningVariant,
            outlined: outlinedVariant
        }
    },
    compoundVariants: [
        { 
            shape: 'circle', 
            size: '0', 
            css: {

            } 
        }, 
        {  shape: 'circle',  size: '1', css: {  } },      
        {  shape: 'circle',  size: '2', css: {  } },
        {  shape: 'circle',  size: '3', css: {  } },
        {  shape: 'oval',    size: '0', css: {  } },
        {  shape: 'oval',    size: '1', css: {  } },
        {  shape: 'oval',    size: '2', css: {  } },
        {  shape: 'oval',    size: '3', css: {  } },
        {  shape: 'rounded', size: '0', css: {  } },
        {  shape: 'rounded', size: '1', css: {  } },
        {  shape: 'rounded', size: '2', css: {  } },
        {  shape: 'rounded', size: '3', css: {  } }
    ],
    defaultVariants: {
        size: '0',
        iconOnly: false,
        shape: 'rounded',
        visuallyHidden: false,
        intent: 'info'
    }
})

export const VisuallyHidden = styled('span', {
    border: '0',
    clip: 'rect(0,0,0,0)',
    clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
})

export const InnerFlex = styled(Flex, {
    height: '100%', 
    width: '100%', 
    margin: '0em', 
    padding: '0em', 
    fd: 'row', 
    jc: 'center',
    ai: 'center',
    gap: '$3'
})

interface ButtonInjectedProps {
    children: ReactNode;
    element?: ElementType;
    css?: CSS; 
}

type ButtonVariantProps = VariantProps<typeof AccessibleButton>
type ButtonOwnProps = {
    renderContainer: (props: ButtonInjectedProps) => JSX.Element; 
    children?: ReactNode;
    element?: ElementType;
    css?: CSS; 
}
type ButtonProps = ButtonVariantProps & ButtonOwnProps

interface IconButtonProps {
    renderContainer: (props: ButtonInjectedProps) => JSX.Element;
    children: JSX.Element | HTMLOrSVGElement;
    label: string; 
    css?: CSS;
}

const Button = ({
    renderContainer,
    children,
    element,
    size,
    css
}: ButtonProps) => {

    return renderContainer({
        css,
        element,
        size,
        children: (
            <InnerFlex>
                {children}
            </InnerFlex> 
        )
    })
}

const defaultProps: Pick<ButtonProps, 'renderContainer'> = {
    renderContainer: ({ children, ...props }) => (
        <AccessibleButton as={'button'} size="1" {...props}>
            {children}
        </AccessibleButton>
    )
}

Button.defaultProps = defaultProps
Button.displayName = 'Button'

export const IconButton = ({
    renderContainer,
    children,
    label,
    css
}: IconButtonProps) => {
    return renderContainer({
        css,
        children: (
            <Flex>
                <svg aria-hidden="true" focusable="false" width="16" height="16" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
                </svg>
                <VisuallyHidden 
                    aria-hidden="true" 
                    aria-label={label} 
                    aria-labelledby={label}
                > 
                    {label} 
                </VisuallyHidden>
            </Flex> 
        )
    })
}

const defaultIconProps: Pick<ButtonProps, 'renderContainer'> = {
    renderContainer: (props) => (
        <AccessibleButton {...props} iconOnly={true} />
    )
}
IconButton.defaultProps = defaultIconProps
IconButton.displayName = 'IconButton'

export default Button