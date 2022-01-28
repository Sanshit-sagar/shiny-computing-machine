import { styled } from 'stitches.config'

export const StyledChip = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    cursor: 'default',
    
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: '$2',

    padding: '4px 8px',
    margin: 0,

    fontSize: '0.815rem',
    fontWeight: 700,
    fontFamily: '$jetbrains',
    lineHeight: 1.25,
    letterSpacing: '0.025rem',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    color: '$panelTextContrast',
    background: '$panelBase',
    border: '1px solid $panelBorder',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
    borderRadius: '4px',

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