import { styled } from '../../stitches.config'

export const StyledRadio = styled('input', {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    flexShrink: 0,
    fontFamily: '$hack',

    height: '24px',
    width: '24px',

    outline: 'none',
    display: 'inline-block',
    position: 'relative',
    margin: 0,
    cursor: 'pointer',

    borderRadius: '50%',
    border: '1px solid $accentBorder',
    background: '$accentBase',
    transition: 'background 0.3s, border-color 0.3s, box-shadow 0.2s',

    $$shadowPrimary: '$colors$accentFocusRing',
    
    '&::after': {
        content: '',
        display: 'block',
        position: 'absolute',
        transition: 'transform 0.3s ease-in-out, opacity 0.2s',
        width: '22px',
        height: '22px',
        border: '1px solid $accentBg',
        borderRadius: '50%',
        bc: '$accentBase',
        opacity: 0.5,
        transform: 'scale(0.7)',
    },

    '&:checked': {
        bc: '$accentSolid',
        color: 'red',
        opacity: 1,
        transition: 'background 0.3s, border-color 0.3s, transform 0.4s cubic-bezier(0.2, 0.85, 0.32, 1.2), scale 0.5, opacity 1',
        transform: 'rotate(43deg)'
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
    },

    '&:hover': {
        '&:not(:disabled)': {
            '&:not(:checked)': {
                borderColor: '$accentBorder'
            },
        },
        boxShadow: '0 2px 20px 3px $$shadowColor'
    },

    '&:focus-visible': {
        borderColor: '$accentBorder',
        boxShadow: '0 2px 20px 3px $$shadowColor',
    }
})
StyledRadio.displayName = 'RadioItem'


const DEFAULT_TAG = 'div'
export const StyledRadioGroup = styled(DEFAULT_TAG, {
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',

    m: 0,
    p: 0,

    variants: {
        orientation: {
            'vertical': {
                fd: 'column',
                ai: 'flex-start',
                jc: 'center'
            },
            'horizontal': {
                fd: 'row',
                ai: 'center',
                jc: 'center'
            }
        },
        gap: {
            0: { gap: 0 },
            '1': { gap: '$2' },
            '2': { gap: '$4' },
            '3': { gap: '$6' },
            '4': { gap: '$8' },
            '5': { gap: '$9' }
        }
    },
    defaultVariants: {
        orientation: 'vertical',
        gap: 0
    }
})


export const StyledLabel = styled('label', {
    height: 'fit-content',
    width: '100%',
    minWidth: 250,
    p: '$5',
    m: 0,
    

    d: 'flex', 
    ai: 'center', 
    gap: '$2',
    border: '1px solid $accentBorder',
    borderBottom: 'none',
    br: 0,

    '&:first-child': {
        btlr: '$2',
        btrr: '$2'
    },
    '&:last-child': {
        bblr: '$2',
        bbrr: '$2',
        borderBottom: '1px solid $accentBorder'
    },
    '&:hover': {
        bc: '$accentBgHover',
        borderColor: '$accentBorderHover'
    },
    '&:active': {
        bc: '$accentBgActive',
        borderColor: '$accentFocusRing'
    },

    variants: {
        selected: {
            true: {
                bc: '$accentBgActive'
            },
            false: {
                bc: '$accentBg'
            }
        }
    },
    defaultVariants: {
        selected: false 
    }
})
