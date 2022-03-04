import { CSS, styled } from 'stitches.config'


const vars: CSS = {
    '--color-neutral-emphasis-plus': ''
}

///////////////////////////////////////
///////////////////////////////////////

const bottomAfterSharedStyles: CSS = {
    ...vars,
    top: '100%',
    right: '50%',
    marginTop: '6px'
}

const bottomBeforeSharedStyles: CSS = {
    ...vars,
    top: 'auto',
    right: '50%',
    bottom: '-7px',
    marginRight: '-6px',
    borderBottomColor: 'var(--color-neutral-emphasis-plus)'
}

const bottom_TooltipStyles: CSS = {
    '&::after': {
        ...bottomAfterSharedStyles,
        transform: 'translateX(50%)'
    },
    '&::before': bottomBeforeSharedStyles
}

const bottomLeft_TooltipStyles: CSS = {
    '&::after': {
        ...bottomAfterSharedStyles,
        right: 'auto',
        left: '50%',
        marginLeft: '$3'
    },
    '&::before': bottomBeforeSharedStyles
}

const bottomRight_TooltipStyles: CSS = {
    '&::after': {
        ...bottomAfterSharedStyles,
        marginRight: '$3'
    },
    '&::before': bottomBeforeSharedStyles
}

///////////////////////////////////////
///////////////////////////////////////

const topAfterSharedStyles: CSS = {
    ...vars,
    right: '50%',
    bottom: '100%',
    marginBottom: '6px'
}
const topBeforeSharedStyles: CSS = {
    ...vars,
    top: '-7px',
    right: '50%',
    bottom: 'auto',
    marginRight: '-6px',
    borderTopColor: 'var(--color-neutral-emphasis-plus)'
}

const top_TooltipStyles: CSS = {
    '&::after': {
        ...topAfterSharedStyles,
        transform: 'translateX(50%)'
    },
    '&::before': topBeforeSharedStyles
}

const topLeft_TooltipStyles: CSS = {
    '&::after': {
        right: 'auto',
        left: '50%',
        marginLeft: '6px'
    },
    '&::before': topBeforeSharedStyles
}

const topRight_TooltipStyles: CSS = {
    '&::after': {
        marginRight: '6px'
    }
}

///////////////////////////////////////
///////////////////////////////////////

const left_tooltipStyles: CSS = {
    ...vars,
    '&::after': {

    },
    '&::before': {

    }
}

///////////////////////////////////////
///////////////////////////////////////

const right_tooltipStyles: CSS = {
    ...vars,
    '&::after': {

    },
    '&::before': {

    }
}

///////////////////////////////////////
///////////////////////////////////////

export {
    bottom_TooltipStyles,
    bottomLeft_TooltipStyles,
    bottomRight_TooltipStyles,
    top_TooltipStyles,
    topLeft_TooltipStyles,
    topRight_TooltipStyles,
    left_tooltipStyles,
    right_tooltipStyles
}