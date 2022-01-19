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
    width: 250,
    p: 0,

    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: '$3',
    fw: 'nowrap',
    whiteSpace: 'nowrap'
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
    color: '$accentTextContrast'
})

export const StyledFieldsetErrorMessage = styled('div', {
    ...sharedStyles,

    fontSize: '$2',
    textAlign: 'left',

    maxWidth: '80%',

    variants: {
        validationState: {
            valid: {
                color: '$successText'
            },
            invalid: {
                color: '$dangerText'
            }
        },
        display: {
            hidden: { 
                display: 'none', 
                visibility: 'hidden' 
            },
            visible: { 
                visibility: 'visible' 
            }
        }
    },
    defaultVariants: {
        validationState: 'invalid'
    }
})

export const StyledFieldsetIcon = styled('span', {
    display: 'inline-flex',
    p: 0,
    m: 0,
    color: '$accentText',
    border: 'none',
    outline: 'none'
})