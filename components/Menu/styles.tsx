import { styled, CSS } from 'stitches.config'

const cssVariables: CSS = {
    '--menu-button-height': '2.5rem',
    '--menu-button-font-size': '1rem',
    '--menu-button-line-height': '1.5rem',
    '--menu-button-border-radius': '0.25rem',

    '--menu-button-background': 'hsl(200, 100%, 40%)',
    '--menu-button-background-hover': 'hsl(204, 100%, 32%)',
    '--menu-button-foreground': 'hsl(0, 0%, 100%)',

    '--menu-button-opacity': 1,
    '--menu-button-opacity-disabled': 0.5,

    '--outline-color': 'hsl(204, 100%, 40%)',

    '@media(:prefers-colors-scheme: dark)': {
        '--menu-button-background': 'hsl(200, 100%, 40%)',
        '--menu-button-background-hover': 'hsl(204, 100%, 32%)',
        '--menu-button-foreground': 'hsl(0, 0%, 100%)',
    }
}

export const StyledMenuButton = styled('button', {
    ...cssVariables, 

    display: 'flex',
    height: '2.5rem',
    cursor: 'pointer',

    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',

    borderRadius: '0.5rem',
    borderStyle: 'none',

    backgroundColor: 'var(--menu-button-background)',
    
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1rem',
    lineHeight: '1.5rem',

    color: 'var(--menu-button-foreground)',
    opacity: 'var(--menu-button-opacity)',

    variants: {
        isHovered: {
            true: {
                backgroundColor: 'var(--menu-button-background-hover)',
            },
            false: null
        },
        isFocused: {
            true: {

            },
            false: null
        },
        isFocusVisible: {
            true: {
                outline: '2px solid var(--outline-color)',
                outlineOffset: '2px'
            },
            false: null
        },
        isDisabled: {
            true: {
                opacity: 'var(--menu-button-opacity-disabled)'
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
    '--menu-padding': '0.5rem',
    '--menu-shadow': 'drop-shadow(0 4px 6px rgba(0, 0, 0, 15%))',
    '--menu-outline-color': 'transparent',
    '--menu-color': 'hsl(204, 10%, 10%)',
    '--menu-background': 'hsl(204, 20%, 100%)',
    '--menu-border': 'hsl(204, 20%, 88%)',

    '@media(prefers-color-scheme: dark)': {
        '--menu-border': 'hsl(204, 3%, 32%)',
        '--menu-background': 'hsl(204, 3%, 20%)',
        '--menu-color': 'hsl(0, 0%, 100%)',
        '--menu-shadow': 'drop-shadow(0 4px 6px rgba(0, 0, 0, 30%))'
    }
}

export const StyledMenu = styled('ul', {
    ...menuCssVars,

    minWidth: '180px',

    position: 'relative',
    zIndex: 50,

    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.5rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'var(--menu-border-color)',
    backgroundColor: 'var(--menu-background)',

    padding: 'var(--menu-padding)',
    color: 'var(--menu-color)',
    outline: '2px solid var(--menu-outline-color)',
    outlineOffset: '2px',

    filter: 'var(--menu-shadow)'
})

export const StyledMenuItem = styled('li', {
    display: 'flex',
    cursor: 'default',
    scrollMargin: '0.5rem',

    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.25rem',
    padding: '0.5rem',

    outline: '2px solid transparent',
    outlineOffset: '2px',

    variants: {
        isHovered: {
            true: {
                backgroundColor: 'hsl(204, 100%, 40%)',
                color: 'hsl(0, 0%, 100%)'
            },
            false: null
        },
        isFocused: {
            true: {
                backgroundColor: 'hsl(204, 100%, 40%)',
                color: 'hsl(0, 0%, 100%)'
            },
            false: null
        },
        isDisabled: {
            true: {
                opacity: 0.25
            },
            false: null
        },
        isSelected: {
            true: {
                backgroundColor: 'hsl(104,100%, 40%)',
                color: 'hsl(0, 0%, 100%)'
            }
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
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