import { ReactNode, Children, cloneElement, isValidElement, Fragment } from 'react'
import { styled, CSS, VariantProps } from 'stitches.config'
import { useLocale } from '@react-aria/i18n'

import { avatarVariables, StyledAvatar } from './styles'
import type { AvatarProps } from './types'
import { Avatar } from './Avatar'

export const StyledAvatarMore = styled('div', {
    ...avatarVariables, 

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
    ...avatarVariables,

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
        display: 'flex',
        marginLeft: '0em',
        zIndex: 10
    },
    '&:nth-child(n + 2)': {
        display: 'flex',
        marginLeft: '-19px',
        zIndex: 9
    },
    '&:nth-child(n + 3)': {
        display: 'flex',
        marginLeft: '-22px',
        opacity: 0.55,
        zIndex: 8
    },
    '&:nth-child(n + 4)': {
        display: 'flex',
        marginLeft: '-25px',
        opacity: 0.40,
        zIndex: 7
    },
    '&:nth-child(n + 5)': {
        display: 'flex',
        marginLeft: '-28px',
        opacity: 0.25,
        zIndex: 6
    },
    '&:nth-child(n + 6)': {
        visibility: 'hidden',
        opacity: 0,
        zIndex: 0
    },
    
}
 
export const StyledAvatarBody = styled('div', {
    ...avatarVariables,
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
    ...avatarVariables,
    
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',

    height: 'var(--size)',
    margin: '0em',
    padding: '0em',
    alignSelf: 'center',

    [`& ${StyledAvatarBody}`]: {
        position: 'absolute',
    },

    variants: {
        size: {
            1: {
                minWidth: 'calc(var(--size) * 1.3)'
            },
            2: {
                minWidth: 'calc(var(--size) * 1.8)'
            },
            3: {
                minWidth: 'calc(var(--size) * 2.3)'
            }
        }
    },
    defaultVariants: {
        size: '2'
    }
})


type AvatarStackProps = { 
    children: ReactNode; 
}

const AvatarStackItem = (props: AvatarProps) => (
    <Avatar {...props} /> 
)
AvatarStackItem.displayName = 'AvatarStackItem'

const AvatarStack = ({ children }: AvatarStackProps) => {
    const { direction } = useLocale() // TODO

    const count = Children.count(children)
    const stackSize = Math.min(Math.max(count, 1), 3) as unknown as VariantProps<typeof StyledAvatarStack>['size']

    return (
        <StyledAvatarStack size={stackSize}>
            <StyledAvatarBody>
                {Children.map(children, (child, index: number) => {
                    if(!isValidElement(child)) return child
            
                    if(index === 2) {
                        return (
                            <Fragment key={`avatar-stack-item-${index}`}>
                                <StyledAvatarMore /> 
                                <Fragment> 
                                    {cloneElement(child, {
                                        index
                                    })} 
                                </Fragment>
                            </Fragment>
                        )
                    }

                    return cloneElement(child, {
                        squared: true,
                        rounded: false,
                        key: `avatar-stack-item-${index}`,
                        index
                    })
                })}
            </StyledAvatarBody>
        </StyledAvatarStack>
    )
}
AvatarStack.Item = AvatarStackItem

AvatarStack.displayName = 'AvatarStack'

export {
    AvatarStack,
    AvatarStackItem
}

export type {
    AvatarStackProps
}