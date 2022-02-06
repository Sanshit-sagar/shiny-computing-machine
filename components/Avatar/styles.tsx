import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { styled, VariantProps } from 'stitches.config'

export const StyledAvatarRoot = styled('span', {
    appearance: 'none',
    userSelect: 'none',
    position: 'relative',

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
   
    backgroundColor: '$accentSolid',
   
    boxShadow: '$small',

    variants: {
        size: {
            1: { size: 'calc(48px + $1)', padding: '$1' },
            2: { size: 'calc(64px + $1)', padding: '$1' },
            3: { size: 'calc(72px + $2)', padding: '$2' },
        },
        shape: {
            'round': { borderRadius: '9999px' },
            'square': { borderRadius: '$2' },
        }
    },
    defaultVariants: {
        size: '2',
        shape: 'round'
    }
})

export const StyledAvatarImage = styled('img', {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
    boxShadow: '$small'
})

export const StyledAvatarFallback = styled('span', {
    
    width: '100%',
    height: '100%',
   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'inherit',

    backgroundColor: '$accentBorder',
    color: '$black1',

    fontFamily: '$plexsans',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    willChange: 'background-color, color',
    transition: 'all 0.4s ease-in',
    boxShadow: '$small',

    '&:hover': {
        backgroundColor: '$accentFocusRing',
        color: '$black1'
    },

    variants: {
        size: {
            1: { fontSize: '$4', fontWeight: 300, letterSpacing: '0.05em', pl: '1px' },
            2: { fontSize: '$6', fontWeight: 500, letterSpacing: '0.1em', pl: '2px' },
            3: { fontSize: '$8', fontWeight: 700, letterSpacing: '0.15em', pl: '3px' }
        }
    },
    defaultVariants: {
        size: '2'
    }
})

export const StyledInnerStatusDot = styled('span', {
    position: 'inherit',
    alignSelf: 'center',
    zIndex: 'inherit',

    aspectRatio: '1/1',

    variants: {
        status: {
            'success': {
                bc: '$successSolid'
            },
            'danger': {
                bc: '$dangerSolid'
            },
            'warning': {
                bc: '$warningSolid'
            },
            'info': {
                bc: '$infoSolid'
            }
        },
        size: {
            1: { size: '1em' },
            2: { size: '2em' },
            3: { size: '3em' },
        },
        shape: {
            circle: {  borderRadius: '50%' },
            square: {  borderRadius: '$2' }
        }
    },
    defaultVariants: {
        status: 'success',
        size: '1', 
        shape: 'circle'
    }
})

export const StyledOuterStatusDot = styled('span', {
    position: 'absolute',
    zIndex: 999,
    bc: '$accentSolid',

    display: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',
    gap: 0, 

    variants: {
        size: {
            1: { padding: '1px', size: 'calc(1em + 1px)' },
            2: { padding: '2px', size: 'calc(2em + 2px)' },
            3: { padding: '3px', size: 'calc(3em + 3px)' }
        },
        margin: {
            true: {
                bottom: 'calc(7.5% + 1px)',
                right: 'calc(7.5% + 1px)'
            },
            false: {
                bottom: '1px',
                right: '1px'
            }
        },
        shape: {
            'circle': { borderRadius: '50%', aspectRatio: '1/1' },
            'square': { borderRadius: '$2', aspectRatio: '1/1' } 
,        }
    },
    defaultVariants: {
        size: '1',
        margin: true,
        shape: 'circle'
    }
})

type AvatarStatusDotProps = ComponentPropsWithoutRef<typeof StyledOuterStatusDot> & {
    status: VariantProps<typeof StyledInnerStatusDot>['status'];
}

export const StyledAvatarStatusDot = forwardRef<HTMLSpanElement, AvatarStatusDotProps>(({ 
    size, 
    margin, 
    shape, 
    status 
}, ref) => (
    <StyledOuterStatusDot size={size} shape={shape} margin={margin} ref={ref}>
        <StyledInnerStatusDot size={size} shape={shape} status={status} /> 
    </StyledOuterStatusDot>
))