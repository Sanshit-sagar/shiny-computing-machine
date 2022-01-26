import { styled, CSS } from 'stitches.config'

const sharedStyles: CSS = {
    appearance: 'none',

    d: 'inline-flex',
    fd: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$1',
    fw: 'nowrap',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    fontFamily: '$plexsans',
    fontVariant: 'tabular',
    lineHeight: '$1',

}

export const StyledFieldsetRoot = styled('fieldset', {
    width: 300,
    p: '$4',

    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: '$3',
    fw: 'nowrap',
    whiteSpace: 'nowrap',

    bc: '$accentBg',
    border: '1px solid $accentBorder',
    br: '$2'
})

export const StyledFieldsetIcon = styled('span', {
    display: 'inline-flex',
    p: 0,
    m: 0,
    color: '$accentText',
    border: 'none',
    outline: 'none'
})

export const StyledFieldsetLabel = styled('label', {
    ...sharedStyles,

    fontFamily: '$plexsans',
    fontSize: '$3',
    color: '$accentText',
    maxWidth: '50%'
})

export const StyledFieldsetDescription = styled('div', {
    ...sharedStyles,

    fontSize: '$2',
    textAlign: 'left',
    maxWidth: '80%',
    color: '$accentTextContrast',
    opacity: 0.6,

    '&:hover': {
        opacity: 0.8
    },
    '&:focus': {
        opacity: 1
    }
})

export const StyledFieldsetErrorMessage = styled('div', {
    ...sharedStyles,

    fontSize: '$2',
    textAlign: 'right',
    maxWidth: '80%',

    variants: {
        validationState: {
            invalid: {
                display: 'inline-flex',
                visibility: 'visible',
                color: '$dangerText'
            },
            none: {
                display: 'inline-flex',
                visibility: 'visible',
                color: '$accentText'
            },
            valid: {
                display: 'none', 
                visibility: 'hidden' 
            }
        }
    },
    defaultVariants: {
        validationState: 'invalid'
    }
})

export const StyledFieldsetSuccessMessage = styled('span', {
    ...sharedStyles,
    fontSize: '$2',
    textAlign: 'right',
    maxWidth: '80%',

    variants: {
        validationState: {
            valid: {
                display: 'inline-flex',
                visibility: 'visible',
                color: '$successText'
            },
            none: {
                display: 'inline-flex',
                visibility: 'visible',
                color: '$accentText'
            },
            invalid: {
                display: 'none', 
                visibility: 'hidden' 
            }
        }
    },
    defaultVariants: {
        validationState: 'none'
    }
})