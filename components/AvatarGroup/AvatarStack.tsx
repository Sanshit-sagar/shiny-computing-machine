import { ReactNode, Children, cloneElement, isValidElement, Fragment } from 'react'
import { styled, CSS, VariantProps } from 'stitches.config'
import { useLocale } from '@react-aria/i18n'

import { avatarVariables, StyledAvatar } from './styles'
import type { AvatarProps } from './types'
import { Avatar } from './Avatar'

export const StyledAvatarMore = styled('div', {
    ...avatarVariables, 

    zIndex: 1,
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

const visibleAvatarItemStyles: CSS = {
    visibility: 'visible',
    display: 'flex',
    opacity: 1
}
const hiddenAvatarItemStyles: CSS = {
    visibility: 'hidden',
    display: 'none',
    opacity: 0,
    zIndex: 0
}

const sharedStyles: CSS = {
    ...avatarVariables,

    position: 'relative',
    zIndex: 10,

    display: 'flex',
    height: 'var(--size)',
    width: 'var(--size)',

    boxSizing: 'content-box',
    

    backgroundColor: 'pink',
    borderRight: 'var(--border-width) var(--border-style) var(--border-color)',
    borderRadius: 'var(--border-radius)',

    boxShadow: 'none',
    transition: 'margin 300ms ease',

    marginLeft:'0px',
    marginRight: '0px',

    '&:first-child': {
        ...visibleAvatarItemStyles,
        marginLeft: '0em',
        zIndex: 10
    },
    '&:nth-child(n + 2)': {
        ...visibleAvatarItemStyles,
        marginLeft: '-30px',
        opacity: 0.90,
        zIndex: 9
    },
    '&:nth-child(n + 3)': {
        ...visibleAvatarItemStyles,
        marginLeft: '-35px',
        opacity: 0.80,
        zIndex: 8
    },
    '&:nth-child(n + 4)': {
        ...visibleAvatarItemStyles,
        marginLeft: '-40px',
        opacity: 0.75,
        zIndex: 7
    },
    '&:nth-child(n + 5)': {
        ...visibleAvatarItemStyles,
        marginLeft: '-45px',
        opacity: 0.70,
        zIndex: 6
    },
    '&:nth-child(n + 6)': hiddenAvatarItemStyles,
    
}
 
export const StyledAvatarBody = styled('div', {
    display: 'flex',
    background: '$transparent',
    [`& ${StyledAvatar}`]: sharedStyles,
  
    '&:hover': {
        [`& ${StyledAvatar}`]: {
            marginRight: '3px',
            '&:first-child': { ...visibleAvatarItemStyles, zIndex: 10 },
            '&:nth-child(n + 2)': { ...visibleAvatarItemStyles, zIndex: 9 },
            '&:nth-child(n + 3)': { ...visibleAvatarItemStyles, zIndex: 8 },
            '&:nth-child(n + 4)': { ...visibleAvatarItemStyles, zIndex: 7 },
            '&:nth-child(n + 5)': { ...visibleAvatarItemStyles, zIndex: 6 },
            '&:nth-child(n + 6)': { ...visibleAvatarItemStyles, zIndex: 5 },
            '&:nth-child(n + 7)': { ...visibleAvatarItemStyles, zIndex: 2 },
            '&:last-child': { ...visibleAvatarItemStyles, zIndex: 1 }
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

    [`& ${StyledAvatarBody}`]: { position: 'absolute' },

    variants: {
        size: {
            1: { minWidth: 'calc(var(--size) * 1.3)' },
            2: { minWidth: 'calc(var(--size) * 1.8)' },
            3: { minWidth: 'calc(var(--size) * 2.3)' }
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