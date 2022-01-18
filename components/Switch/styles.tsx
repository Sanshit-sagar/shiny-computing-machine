import { styled } from '../../stitches.config'

export const StyledSwitch = styled('input', {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    flexShrink: 0,
    fontFamily: '$hack',

    height: '24px',
    width: '44px',

    outline: 'none',
    display: 'inline-block',
    position: 'relative',
    margin: 0,
    cursor: 'pointer',

    br: '$1',
    border: '1px solid $accentBorder',
    bc: '$panelBase',
    transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',

    $$shadowPrimary: '$colors$accentBg',
    $$shadowDisabled: '$colors$disabledBg',
    
    '&::after': {
        content: '',
        display: 'block',
        position: 'absolute',
        left: '2px',
        top: '2px',
        br: '50%',
        width: '18px',
        height: '18px',
        bc: 'var(--ab, $accentSolid)',
        transition: 'transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s), box-shadow 0.3s, background 0.3s',
        transform: 'translateX(var(--x, 0))',
    },

    '&:checked': {
        bc: '$accentSolid', 
        borderColor: '$successBorder',
        color: 'red',
        opacity: 1,
        '--d-t-e': 'cubic-bezier(0.2, 0.85, 0.32, 1.2)',
        '--ab': '$accentSolid',
        '--x': '20px',

        '&::after': {
            bc: '$accentTextContrast'
        }
    },

    '&:disabled': {
        bc: '$disabledBg',
        color: '$disabledText',
        borderColor: '$disabledBorder',
        cursor: 'not-allowed',
        opacity: 0.65,
        
        '& + label': {
            cursor: 'not-allowed',
        },
        '&:not(:checked)': {
            '&::after': {
                bc: '$panelSolid',
                color: '$panelSolid',
                borderColor: '$panelSolid',
                cursor: 'not-allowed'
            }
        }
    },

    '&:hover': {
        '&:not(:disabled)': {
            '&:not(:checked)': {
                borderColor: '$accentBorder'
            },
            boxShadow: '0 2px 20px 3px $$shadowPrimary'
        },
        '&:disabled': {
            boxShadow: '0 2px 20px 3px $$shadowDisabled'
        }
    },

    '&:focus-visible': {
        borderColor: '$accentBorder',
        boxShadow: '0 2px 20px 3px $$shadowPrimary',
    },

    variants: {
        shape: {
            '0': {
                borderRadius: 0,
            },
            '1': {
                borderRadius: '$1',
            },
            '2': {
                borderRadius: '$2'
            },
            '3': {
                borderRadius: '$3'
            },
            '4': {
                borderRadius: '$4'
            },
            '5': {
                borderRadius: '$5'
            }
        }
    },
    defaultVariants: {
        shape: '5'
    }
})
