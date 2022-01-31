import { styled } from 'stitches.config'

export const StyledAvatarRoot = styled('span', {
    appearance: 'none',
    userSelect: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
   
    backgroundColor: '$accentSolid',
    overflow: 'hidden',
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
        shape: 'square'
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