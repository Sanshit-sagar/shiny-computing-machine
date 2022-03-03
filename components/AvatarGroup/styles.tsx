import { styled, CSS, VariantProps } from 'stitches.config'

const AVATAR_URI = `https://github.com/jonrohan.png?v=3&s=56`

const vars: CSS = {
    '--size': '48px',
    '--background-color': '$colors$accentBase',
    '--border-radius': '$sizes$1',
    '--border-width': '1px',
    '--border-style': 'solid',
    '--border-color': '$colors$accentBase',
    '--shadow-color': 'var(--border-color)',

    '--color-canvas': '#22272e',
    '--color-avatar-stack-fade': '#d1d5da',
    '--color-avatar-stack-fade-more': '#e1e4e8',
    '--color-avatar-child-shadow': '-1px -1px 0 var(--shadow-color)'
}

const StyledAvatar = styled('img', {
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

    '&.avatar-more': {
        zIndex: 1,
        marginRight: 0,
        background: 'var(--canvas-color)',

        '&::before': {
            position: 'absolute',
            display: 'block',
            height: 'var(--size)',
            content: '',
            borderRadius: 'var(--border-radius)',
            outline: 'var(--border-width) var(--border-style) var(--border-color)',
            background: 'var(--color-avatar-stack-fade-more)',
            width: '14px'
        },
        '&::after': {
            position: 'absolute',
            display: 'block',
            height: 'var(--size)',
            content: '',
            borderRadius: 'var(--border-radius)',
            outline: 'var(--border-width) var(--border-style) var(--border-color)',
            width: '14px',
            background: 'var(--color-avatar-stack-fade)'
        }
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


const StyledAvatarStack = styled('div', {
    ...vars,

    position: 'relative',
    height: 'var(--size)', 
    minWidth: 'calc(var(--size) * 3)',

    variants: {
        size: {
            '2': {
                minWidth: '36px'
            },
            '3+': {
                minWidth: '46px'
            }
        }
    }
})

const StyledAvatarPair = styled('div', {
    display: 'inline-flex'
})
 
const StyledAvatarBody = styled('div', {
    ...vars,

    position: 'absolute',
    display: 'flex',
    background: 'var(--canvas-color)',

    '&.avatar': {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        width: 'var(--size)',
        height: 'var(--size)',

        boxSizing: 'content-box',
        marginRight: '-11px',

        backgroundColor: 'pink',
        borderRight: 'var(--border-width) var(--border-style) var(--border-color)',
        borderRadius: '$1',

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

        '&:nth-child(n+4)': {
            display: 'none',
            opacity: 0
        }
    },

    '&:hover': {
        '&.avatar': {
            marginRight: '3px',

            '&:nth-child(n+4)': {
                display: 'flex',
                opacity: 1
            }
        },

        '&.avatar-more': {
            display: 'none !important'
        }
    }
})

const StyledCircleBadge = styled('div', {
    // TODO
})

type AvatarVariantProps = VariantProps<typeof StyledAvatar> 

export type AvatarProps = {
    linked: AvatarVariantProps['linked'];
    grouped: AvatarVariantProps['grouped'];
    relation: AvatarVariantProps['relation'];
    src: string; 
    alt: string; 
}

export const Avatar = (props) => {
    const defaultAvatarProps: AvatarProps & { className: string; } = {
        src: `https://github.com/jonrohan.png?v=3&s=56`,
        alt: '@octocat',
        linked: false,
        grouped: true,
        relation: 'none',
        className: "avatar"
    }

    return <StyledAvatar {...defaultAvatarProps} {...props} /> 
}
Avatar.displayName = 'Avatar'

export const AvatarPair = () => {

    return (
        <StyledAvatarPair css={{ position: 'relative' }}>
            <StyledAvatar 
                className="avatar" 
                alt="jonrohan" 
                src="https://github.com/jonrohan.png?v=3&s=48" 
                grouped={false} 
                linked={false} 
                relation="parent"
            />
            <StyledAvatar
                className="avatar" 
                alt="josh"
                src="https://github.com/josh.png?v=3&s=40"  
                grouped={false} 
                linked={false} 
                relation="child"
            />
        </StyledAvatarPair>
    )
}
AvatarPair.displayName = 'AvatarPair'

export const AvatarStack = () => {

    return (
        <StyledAvatarStack size='3+'>
            <StyledAvatarBody aria-label="octocat, octocat and octocat">  
                <Avatar className="avatar" />
                <Avatar className="avatar" />
                <Avatar className="avatar" />
            </StyledAvatarBody>
        </StyledAvatarStack>
    )
}
AvatarStack.displayName = 'AvatarStack'