import { CSS } from 'stitches.config'

const vars: CSS = {
    '--tooltip-background': '$colors$tooltipBackground'
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
    borderBottomColor: 'var(--tooltip-background)'
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
        top: '100%',
        right: '50%',
        marginTop: '6px',
        marginRight: '16px'
    },
    '&::before': {
        ...bottomBeforeSharedStyles,
        left: '1%'
    }
}

const bottomRight_TooltipStyles: CSS = {
    '&::after': {
        top: '100%',
        left: '50%',
        right: 'auto',
        marginTop: '6px',
        marginLeft: '16px'
    },
    '&::before': {
        ...bottomBeforeSharedStyles,
        right: '1%'
    }
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
    borderTopColor: 'var(--tooltip-background)'
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
        ...topAfterSharedStyles,
        left: 'auto',
        right: '50%',
        marginRight: '16px'
    },
    '&::before': {
        ...topBeforeSharedStyles,
        left: '1%'
    }
}

const topRight_TooltipStyles: CSS = {
    '&::after': {
        ...topAfterSharedStyles,
        right: 'auto',
        left: '50%',
        marginLeft: '16px'
    },
    '&::before': {
        ...topBeforeSharedStyles,
       right: '1%'
    }
}

///////////////////////////////////////
///////////////////////////////////////

const left_tooltipStyles: CSS = {
    ...vars,
    '&::after': {
        right: '100%',
        bottom: '50%',
        marginRight: '6px',
        transform: 'translateY(50%)'
    },
    '&::before': {
        top: '50%',
        bottom: '50%',
        left: '-7px',
        marginTop: '-6px',
        borderLeftColor: 'var(--tooltip-background)'
    }
}

///////////////////////////////////////
///////////////////////////////////////

const right_tooltipStyles: CSS = {
    ...vars,
    '&::after': {
        bottom: '50%',
        left: '100%',
        marginLeft: '6px',
        transform: 'translateY(50%)'
    },
    '&::before': {
        top: '50%',
        right: '-7px',
        bottom: '50%',
        marginTop: '-6px',
        borderRightColor: 'var(--tooltip-background)'
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