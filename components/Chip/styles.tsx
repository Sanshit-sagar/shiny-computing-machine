import { styled } from 'stitches.config'

export const StyledChip = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    cursor: 'default',
    
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$2',

    padding: '4px 8px',
    margin: 0,

    fontSize: '0.815rem',
    fontWeight: 300,
    fontFamily: 'inherit',
    lineHeight: 1.25,
    letterSpacing: '0.025rem',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    color: '$accentText',
    background: '$accentBg',
    border: '1px solid $accentBorder',
    borderRadius: '$3',

    variants: {
        raised: {
            true: {
                zIndex: '1000',
            }
        }
    },
    defaultVariants: {
        raised: true
    }
})

export const StyledPrefix = styled('span', {
    mr: '$1',

    '& svg': {
        fill: '$accentText'
    }
})

export const StyledSuffix = styled('span', {

})