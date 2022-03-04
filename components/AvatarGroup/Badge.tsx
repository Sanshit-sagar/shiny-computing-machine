import { ElementType, HTMLAttributes } from 'react' 
import { styled, CSS, VariantProps } from 'stitches.config'

export const cssVars: CSS = {
    '--badge-shadow': '$colors$accentText',

    '--color-canvas-default': '$colors$accentBgSubtle',
    '--color-shadow-medium': '0 1px 2px var(--badge-shadow)',
    '--color-border-default': '$colors$accentText',

    '--badge-size-1': '56px',
    '--badge-size-2': '96px',
    '--badge-size-3': '128px'
}

export const StyledBadge = styled('img', {
    ...cssVars,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-canvas-default)',
    borderRadius: '50%',
    filter: 'drop-shadow(0px 1px 2px var(--badge-shadow))',
    aspectRatio: '1 / 1',

    transition: 'all 300ms ease',

    variants: {
        size: {
            1: {
                height: 'var(--badge-size-1)',
                width: 'var(--badge-size-1)'
            },
            2: {
                height: 'var(--badge-size-2)',
                width: 'var(--badge-size-2)'
            },
            3: {
                height: 'var(--badge-size-3)',
                width: 'var(--badge-size-3)'
            }
        },
        icon: {
            true: {
                maxWidth: '60% !imortant',
                height: 'auto !important',
                maxHeight: '55% !imortant'
            }
        }
    },
    defaultVariants: {
        size: 1,
        icon: 'false'
    }
})

export const StyledBadgeGroup = styled('div', {
    ...cssVars,

    position: 'relative',

    [`& ${StyledBadge}`]: {
        position: 'relative'
    },

    display: 'flex',
    gap: '$0',
    flexWrap: 'nowrap',

    variants: {
        orientation: {
            'vertical': {
                minHeight: '350px',
                flexDirection: 'column',
                '&::before': {
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    height: '100%',
                    content: '',
                    borderRight: '2px dashed var(--color-border-default)'
                }
            },
            'horizontal': {
                minWidth: '400px',
                flexDirection: 'row',
                '&::before': {
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    width: '100%',
                    content: '',
                    borderBottom: '2px dashed var(--color-border-default)'
                }
            }
        },
        justify: {
            'between': {
                justifyContent: 'space-between'
            },
            'evenly': {
                justifyContent: 'space-between'
            }
        },
        align: {
            'start': {
                alignItems: 'flex-start'
            },
            'end': {
                alignItems: 'flex-end'
            },
            'center': {
                alignItems: 'center'
            }
        }
    },
    defaultVariants: {
        orientation: 'vertical',
        justify: 'between',
        align: 'center'
    }
})

const DEFAULT_TAG = 'img' 

export interface BadgeProps extends HTMLAttributes<typeof StyledBadge> {
    size?:  VariantProps<typeof StyledBadge>['size']; 
    element?: ElementType<any>;
    css?: CSS; 
}

// aria-label, 

export const Badge = ({ src, alt }) => {
    const defaultBadgeProps: BadgeProps = {
        size: 2,
        element: 'div',
        src,
        alt 
    }

    return <StyledBadge {...defaultBadgeProps} />
}

Badge.displayName = 'Badge'


export const BadgeGroup = () => {
    
    return (
        <StyledBadgeGroup>
            <Badge src="https://github.com/slackhq.png" alt="Slack HQ" />
            <Badge src="https://github.com/travis-ci.png" alt="Travis CI" />  
            <Badge src="https://github.com/slackhq.png" alt="Slack HQ" />
        </StyledBadgeGroup>
    )
}


