import { styled } from 'stitches.config'

const DEFAULT_TAG = 'textarea'            

const StyledTextArea = styled(DEFAULT_TAG, {

    '--inset-shadow-color': '$colors$accentBg',

    appearance: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'none',
    overflowY: 'hidden',

    width: '100%',
    maxWidth: '325px',
    fontSize: '14px',
    fontFamily: '$flow',
    
    lineHeight: '20px',
    
    color: '$accentText',
    backgroundColor: '$colors$accentBase',

    border: 'none',
    borderRadius: '$3',
    padding: '$2 $3',
    margin: '0em',

    transition: 'box-shadow 300ms ease',

    boxShadow: `
        inset 0px 0px 0px 1px var(--border-color, var(--inset-shadow-color))
    `,
    '&:hover': {
        '--inset-shadow-color': '$colors$accentBgHover',
        '--border-color': '$colors$accentBorderHover'
    },
    '&:focus': {
        '--inset-shadow-color': '$colors$accentBgActive',
        '--border-color': '$colors$accentBorderActive'
    },

    '&::placeholder': {
        color: '$disabledBorder',
    },
    '&::selection': {
        color: '$accentBase',
        background: '$accentTextContrast'
    },
    
    variants: {
        isFocusVisible: {
            true: {
                outline: '2px solid dodgerblue',
                outlineOffset: '2px'
            }
        }
    },
    defaultVariants: {
        isFocusVisible: false
    }
})

export {
    StyledTextArea
}