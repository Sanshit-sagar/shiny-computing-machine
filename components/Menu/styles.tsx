import { styled, CSS } from 'stitches.config'

const cssVariables: CSS = {
    '--menu-button-height': '2.5rem',
    '--menu-button-font-size': '1rem',
    '--menu-button-line-height': '1.5rem',
    '--menu-button-border-radius': '0.25rem',

    '--menu-button-background': 'hsl(204, 100%, 40%)',
    '--menu-button-background-hover': 'hsl(204, 100%, 45%)',
    '--menu-button-foreground': 'hsl(0, 0%, 100%)',

    '--menu-button-opacity': 1,
    '--menu-button-opacity-disabled': 0.5,

    '--outline-color': 'hsl(204, 100%, 40%)',

    '@media(:prefers-colors-scheme: dark)': {
        '--menu-button-background': 'hsl(200, 100%, 40%)',
        '--menu-button-background-hover': 'hsl(204, 100%, 45%)',
        '--menu-button-foreground': 'hsl(0, 0%, 100%)',
    }
}

export const StyledMenuButton = styled('button', {
    ...cssVariables, 

    display: 'flex',
    height: 'fit-content',
    minHeight: '1.75rem',
    maxHeight: '3rem',
    cursor: 'pointer',

    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',

    borderWidth: '0.05rem',
    borderRadius: '0.5rem',
    borderStyle: 'solid',

    color: '$accentText',
    borderColor: '$accentBorder',
    backgroundColor: '$accentBg',
    
    fontSize: '1rem',
    lineHeight: '1.5rem',
    padding: '0.5rem 1.0rem',

    opacity: 'var(--menu-button-opacity)',

    outline: '2px solid transparent',
    outlineOffset: '2px',

    variants: {
        isHovered: {
            true: {
                backgroundColor: '$accentBgHover',
                borderColor: '$accentBorderHover',
                color: '$accentTextContrast'
            },
            false: null
        },
        isFocused: {
            true: {
                backgroundColor: '$accentBgActive',
                borderColor: '$accentFocusRing',
                color: '$accentTextContrast'
            },
            false: null
        },
        isFocusVisible: {
            true: {
                outline: '2px solid hsl(204, 100%, 45%)',
                outlineOffset: '2px'
            },
            false: null
        },
        isPressed: {
            true: {

            },
            false: null
        },
        isDisabled: {
            true: {
                opacity: 'var(--menu-button-opacity-disabled)'
            },
            false: null
        },
        isLoading: {
            true: {

            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isFocusVisible: false,
        isDisabled: false
    }
})

const menuCssVars: CSS = {
    '--menu-padding': '0.45rem',
    '--menu-shadow': 'drop-shadow(0 2px 3px rgba(0, 0, 0, 15%))',
    '--menu-outline-color': 'transparent',
    '--menu-color': 'hsl(204, 10%, 10%)',
    '--menu-background': 'hsl(204, 20%, 100%)',
    '--menu-border': 'hsl(204, 20%, 88%)',

    '@media(prefers-color-scheme: dark)': {
        '--menu-border': 'rgba(24,28,36, 1.0)',
        '--menu-background': 'rgba(15,16,17, 1.0)',
        '--menu-background-hover': 'rgba(37,39,43, 1.0)',
        '--menu-color': 'rgba(240,240,240, 1.0)',
        '--menu-shadow': 'drop-shadow(0 2px 3px rgba(24, 36, 50, 1))'
    }
}

export const StyledMenu = styled('ul', {
    ...menuCssVars,

    minWidth: 220,
    position: 'relative',
    zIndex: 999,

    display: 'flex',
    flexDirection: 'column',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--menu-border)',
    borderRadius: 6,

    backgroundColor: '$white1',

    padding: 3,
    color: '$black1',

    boxShadow: `
        0px 10px 38px -10px rgba(233, 232, 231, 0.65),
        0px 10px 20px -15px rgba(232, 232, 231, 0.8)
    `,
    '@media (prefers-reduced-motion: no-preference)': {
        animationDuration: '400ms',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity'
    }
})

export const StyledMenuItem = styled('li', {
    all: 'unset',

    fontSize: 13,
    lineHeight: 1,

    position: 'relative',
    userSelect: 'none',
    cursor: 'default',
    scrollMargin: '0.5rem',
    height: 25,

    backgroundColor: '$white1',

    display: 'flex',
    alignItems: 'center',

    borderRadius: 3,
    padding: '0 5px',
    paddingLeft: 25,

    outline: '2px solid transparent',
    outlineOffset: '2px',

    variants: {
        isHovered: {
            true: {
                backgroundColor: '$infoSolid',
                color: '$infoTextContrast'
            },
            false: null
        },
        isFocused: {
            true: null,
            false: null
        },
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            },
            false: null
        },
        isDisabled: {
            true: {
                opacity: 0.25,
                pointerEvents: 'none',
                cursor: 'not-allowed',
            },
            false: null
        },
        isSelected: {
            true: {
                backgroundColor: 'hsl(50, 75%, 100%)',
                color: 'hsl(0, 0%, 0%)'
            }
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isFocusVisible: false,
        isDisabled: false,
        isSelected: false
    }
})

export const StyledMenuSeparator = styled('li', {
    borderWidth: '1px 0 0',
    borderColor: 'currentColor',

    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    height: '0px',
    opacity: 0.25
})

export const StyledRightSlot = styled('div', {
    marginLeft: 'auto',
    paddingLeft: 20,
    color: 'var(--menu-color)',

    variants: {
        isFocusVisible: {
            true: {
                color: '$white1'
            },
            false: null
        }
    },
    defaultVariants: {
        isFocusVisible: false
    }
})

export const StyledMenuSection = styled('li', {
    margin: '0em',
    padding: '0em',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    height: 'fit-content',
    width: 'inherit',
    overflow: 'hidden'
})

export const StyledMenuSectionHeading = styled('span', {
    fontSize: '1.1em', 
    fontWeight: 'normal', 
    pl: '0.2rem',
    pr: '0.5rem',
    pt: '0.05rem',
    pb: '0.1rem'
})

export const StyledMenuSectionGroup = styled('ul', {
    listStyleType: 'none',
    padding: '0em'
})
