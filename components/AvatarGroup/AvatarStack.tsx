import { ReactNode, Children, cloneElement, isValidElement, ReactElement, ElementType } from 'react'
import { styled, CSS } from 'stitches.config'
import { avatarVariables, StyledAvatar } from './styles'
import { useLocale } from '@react-aria/i18n'

export const StyledAvatarStack = styled('div', {
    ...avatarVariables,
    
    position: 'relative',
    display: 'flex',
    height: 'var(--size)',
    margin: '0em',
    padding: '0em',

    alignItems: 'center',
    
    variants: {
        size: {
            '1': {
                minWidth: 'var(--size)',
            },
            '2': {
                minWidth: '30px',
            },
            '3+': {
                minWidth: '38px'
            }
        },
        direction: {
            'ltr': { justifyContent: 'flex-start' },
            'rtl': { justifyContent: 'flex-end' }
        }
    },
    defaultVariants: {
        size: '2',
        direction: 'ltr'
    }
})

// borderRight: 'var(--border-width) var(--border-style) var(--border-color)',
// borderRadius: 'var(--border-radius)',
// boxSizing: 'content-box',
// marginRight: '-11px',

export const StyledAvatarItem = styled(StyledAvatar, {
    '--tf': 'ease-in-out',
    '--shadow-color': '$colors$accentText',

    flexShrink: 0,
    height: 'var(--size)',
    width: 'var(--size)',
    boxShadow: '0 0 0 1px var(--shadow-color)',
    position: 'relative',
    overflow: 'hidden',
    transition: `
        margin 300s var(--tf), 
        opacity 300ms var(--tf), 
        visibility 300ms var(--tf), 
        box-shadow 200ms var(--tf)
    `,
    
    boxSizing: 'content-box',
    marginRight: '-11px',

    '&:first-child': {
        marginLeft: '0em',
        zIndex: 10
    },
    '&:nth-child(n + 2)': {
        marginLeft: '-11px',
        zIndex: 9
    },
    '&:nth-child(n + 3)': {
        marginLeft: '-17px',
        opacity: 0.55,
        zIndex: 8
    },
    '&:nth-child(n + 4)': {
        marginLeft: '-var(--size)',
        opacity: 0.40,
        zIndex: 7
    },
    '&:nth-child(n + 5)': {
        opacity: 0.25,
        zIndex: 6
    },
    '&:nth-child(n + 6)': {
        visibility: 'hidden',
        opacity: 0,
        zIndex: 0
    },

    variants: {
        direction: {
            'ltr': null,
            'rtl': {
                marginLeft: '0 !important',

                '&:first-child': {
                    marginRight: '0em'
                },
                '&:nth-child(n + 2)': {
                    marginRight: '-11px'
                },
                '&:nth-child(n + 3)': {
                    marginRight: '-17px'
                },
                '&:nth-child(n + 4)': {
                    marginRight: '-var(--size)'
                }
            }
        }
    },
    defaultVariants: {
        direction: 'ltr'
    }
})

export const StyledAvatarBody = styled('div', {
    ...avatarVariables,

    position: 'absolute',
    display: 'flex',
    width: '38px',

    '&:hover': {
        width: 'auto',

        [`& ${StyledAvatarItem}`]: {
            marginLeft: '$1',
            opacity: '100%',
            visibility: 'visible',
            boxShadow: '0 0 0 4px var(--shadow-color)',

            '&:first-child': {
                marginLeft: '0em'
            }
        }
    },

    variants: {
        direction: {
            'ltr': { 
                flexDirection: 'row' 
            },
            'rtl': { 
                flexDirection: 'row-reverse',

                '&:hover': {
                    [`& ${StyledAvatarItem}`]: {
                        marginRight: '$1 !important',
                        marginLeft: '0 !important',
                        
                        '&::first-child': {
                            marginRight: '0em !important'
                        }
                    }
                }
            },
        }
    },
    defaultVariants: {
        direction: 'ltr'
    }
})

type AvatarStackProps = {
    children: ReactNode[];
    css: CSS; 
}

const transformChildren = (children: ReactNode) => {
    return Children.map(children, (child, index) => {
        if(!isValidElement(child)) return child

        return cloneElement(child, {
            key: `avatar-item-${index}`,
            index, 
            ...child.props
        })
    })
}

export const AvatarStack = ({ children, css, ...props }: AvatarStackProps) => {
    const { direction } = useLocale()

    const count = Children.count(children)
    const stackSize = count >= 3 ? '3+' : `${Math.max(count, 1)}`

    return (
        <StyledAvatarStack size={stackSize} direction="ltr" css={{ ...css }}>
            <StyledAvatarBody direction={direction}>
                {transformChildren(children)}
            </StyledAvatarBody>
        </StyledAvatarStack>
    )
}