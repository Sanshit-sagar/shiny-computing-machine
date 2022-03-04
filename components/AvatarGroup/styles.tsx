import { styled, CSS } from 'stitches.config'

export const vars: CSS = {
    '--size': '48px',
    '--background-color': '$colors$accentBase',
    '--border-radius': '$sizes$1',
    '--border-width': '1px',
    '--border-style': 'solid',
    '--border-color': '$colors$accentBase',
    '--shadow-color': 'var(--border-color)',

    '--color-canvas': '$colors$accentBase',
    '--color-avatar-stack-fade': '$colors$accentLine',
    '--color-avatar-stack-fade-more': '$colors$accentBorder',
    '--color-avatar-child-shadow': '-1px -1px 0 var(--shadow-color)'
}

export const StyledAvatar = styled('img', {
    ...vars,

    display: 'inline-block',
    overflow: 'hidden',
    lineHeight: '$1',
    verticalAlign: 'middle',
    backgroundColor: 'var(--background-color)',
    borderWidth: 'var(--border-width)',
    borderStyle: 'var(--border-style)',
    borderColor: 'var(--border-color)',
    borderRadius: 'var(--border-radius)',
    flexShrink: 0,

    height: 'var(--size)',
    width: 'var(--size)',
    padding: '0em',
    margin: '0em',
    boxShadow: 'var(--box-shadow)',

    '&:hover': {
        borderColor: '$infoSolid'
    },

    variants: {
        linked: {
            true: {
                float: 'left',
                lineHeight: '$1'
            },
            false: null
        },
        grouped: {
            true: {
                display: 'inline-block',
                marginBottom: '3px'
            },
            false: null
        },
        relation: {
            'parent': {
                position: 'relative'
            },
            'child': {
                display: 'inline-flex',
                position: 'absolute',
                right: '-15%',
                bottom: '-9%',
                height: 'calc(var(--size) * 0.40)',
                width: 'calc(var(--size) * 0.40)',
                backgroundColor: 'transparent',
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--color-avatar-child-shadow)'
            },
            'none': null
        }
    },
    defaultVariants: {
        linked: false,
        grouped: false,
        relation: 'none'
    }
})

export const StyledAvatarPair = styled('div', {
    ...vars, 

    display: 'inline-flex'
})


export const StyledAvatarMore = styled('div', {
    ...vars, 

    zIndex: 1,
    marginRight: 0,
    background: 'var(--color-canvas-subtle)',

    '&::before': {
        position: 'absolute',
        display: 'block',
        height: 'var(--size)',
        content: '',
        borderRadius: 'var(--border-radius)',
        outline: 'var(--border-width) var(--border-style) var(--color-canvas-default)',
        width: 'calc(var(--size) * 0.25)',
        background: 'var(--color-avatar-stack-fade-more)'
    },
    '&::after': {
        position: 'absolute',
        display: 'block',
        height: 'var(--size)',
        content: '',
        borderRadius: 'var(--border-radius)',
        outline: 'var(--border-width) var(--border-style) var(--color-canvas-default)',
        width: 'calc(var(--size) * 0.50)',
        background: 'var(--color-avatar-stack-fade)'
    }
})

const sharedStyles: CSS = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    height: 'var(--size)',
    width: 'var(--size)',

    boxSizing: 'content-box',
    marginRight: '-11px',

    backgroundColor: 'pink',
    borderRight: 'var(--border-width) var(--border-style) var(--border-color)',
    borderRadius: 'var(--border-radius)',

    boxShadow: 'none',
    transition: 'margin 300ms ease',

    '&:first-child': {
        zIndex: 3
    },

    '&:last-child': {
        zIndex: 1,
        borderRight: '0em'
    },
    '& img': {
        borderRadius: '$1'
    },

    '&:nth-child(n+2)': {
        display: 'flex',
        opacity: 0.7
    },
    '&:nth-child(n+3)': {
        display: 'flex',
        opacity: 0.4
    },
    '&:nth-child(n+4)': {
        display: 'flex',
        opacity: 0
    }
}
 
export const StyledAvatarBody = styled('div', {
    ...vars,
    display: 'flex',
    background: 'var(--canvas-color)',

    [`& ${StyledAvatar}`]: { 
        ...sharedStyles
    },
  
    '&:hover': {
        [`& ${StyledAvatar}`]: {
            marginRight: '3px',

            '&:nth-child(n + 2)': {
                display: 'flex',
                opacity: 1
            }
        },
       
        [`& ${StyledAvatarMore}`]: {
            display: 'none !important'
        }
    }
      
})


export const StyledAvatarStack = styled('div', {
    ...vars,
    
    position: 'relative',
    minWidth: 'calc(var(--size) * 1.3)',
    height: 'var(--size)',
    margin: '0em',
    padding: '0em',
    alignSelf: 'center',
    

    [`& ${StyledAvatarBody}`]: {
        position: 'absolute',
    },

    variants: {
        size: {
            '2': {
                minWidth: 'calc(var(--size) * 1.8)',
            },
            '3+': {
                minWidth: 'calc(var(--size) * 2.3)',
            }
        }
    },
    defaultVariants: {
        size: '2'
    }
})
