import { styled, CSS } from 'stitches.config'

const sharedStyles: CSS = {
    appearance: 'none',
    // userSelect: 'none',
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
    mb: '$6',
    p: '$1 $2',

    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: '$2',
    fw: 'nowrap',
    whiteSpace: 'nowrap',

    ox: 'hidden',
    oy: 'hidden'
})

export const StyledFieldsetLabel = styled('label', {
    ...sharedStyles,

    fontFamily: '$plexsans',
    fontSize: '$3',
    color: '$accentText',
    maxWidth: '50%',
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
    color: 'inherit',
    border: 'none',
    outline: 'none'
})