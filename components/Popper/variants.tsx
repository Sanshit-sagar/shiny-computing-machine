import { CSS } from 'stitches.config'

const bottom_Before_Styles: CSS = {
    top: 'auto',
    borderBottomColor: 'transparent',
    bottom: '16px',
    borderTopColor: 'transparent'
}

const bottom_After_Styles: CSS = {
    top: 'auto',
    borderBottomColor: 'transparent',
    bottom: '-14px',
    borderTopColor: '$accentTextContrast'
}

const topAndBottom_Right_Styles: CSS = {
    right: '-9px',
    marginRight: 0
}

const topAndBottom_Right_Before_Styles: CSS = {
    left: 'auto',
    marginLeft: 0,
    right: '20px'
}
const topAndBottom_Right_After_Styles: CSS = {
    left: 'auto',
    marginLeft: 0,
    right: '21px'
}
const topAndBottom_Left_Styles: CSS = {
    left: '9px',
    marginLeft: 0
}

const topAndBottom_Left_Before_Styles: CSS = {
    left: '$4',
    marginLeft: 0,
    // right: auto ??
}
const topAndBottom_Left_After_Styles: CSS = {
    left: 'calc($4 + 1px)',
    marginLeft: 0,
    // right: auto ??
}

const leftAndRight_topAndBottom_Before_Styles: CSS = {
    top: '50%',
    left: 'auto',
    marginLeft: '0em',
    borderBottomColor: 'transparent',
    marginTop: '-9px'
}

const leftAndRight_topAndBottom_After_Styles: CSS = {
    top: '50%',
    left: 'auto',
    marginLeft: '0em',
    borderBottomColor: 'transparent',
    marginTop: '-8px'
}

const left_TopAndBottom_Before_Styles: CSS = {
    left: '-12px',
    borderRightColor: 'transparent'
}

const left_TopAndBottom_After_Styles: CSS = {
    left: '-14px',
    borderRightColor: '$accentTextContrast'
}

const right_TopAndBottom_Before_Styles: CSS = {
    right: '-12px',
    borderLeftColor: 'transparent'
}

const right_TopAndBottom_After_Styles: CSS = {
    right: '-14px',
    borderLeftColor: '$accentTextContrast'
}

const rightAndLeft_Top_Before_Styles: CSS = {
    top: '$4'
}

const rightAndLeft_Top_After_Styles: CSS = {
    top: '$4'
}

const rightAndLeft_Bottom_Before_Styles: CSS = {
    top: 'auto',
    bottom: '$4'
}

const rightAndLeft_Bottom_After_Styles: CSS = {
    top: 'auto',
    bottom: '$4'
}

///////////// BOTTOM ///////////

const bottomStyles: CSS = {
    '&::before': { ...bottom_Before_Styles },
    '&::after': { ...bottom_After_Styles }
}

const bottomLeftStyles: CSS = {
    ...topAndBottom_Left_Styles,
    '&::before': { 
        ...bottom_Before_Styles,
        ...topAndBottom_Left_Before_Styles
    },
    '&::after': { 
        ...bottom_After_Styles, 
        ...topAndBottom_Left_After_Styles
    }
}

const bottomRightStyles: CSS = {
    ...topAndBottom_Right_Styles,
    '&::before': { 
        ...bottom_Before_Styles,
        ...topAndBottom_Right_Before_Styles
    },
    '&::after': { 
        ...bottom_After_Styles,
        ...topAndBottom_Right_After_Styles
    }
}

///////////// TOP ///////////

const topStyles: CSS = {
    '&::before': {

    },
    '&::after': {
        
    }
}

const topLeftStyles: CSS = {
    left: '9px',
    marginLeft: 0,

    '&::before': {
        left: '16px',
        marginLeft: 0
    },
    '&::after': {

        left: '17px',
        marginLeft: 0
    }
}

const topRightStyles: CSS = {
    right: '-9px',
    marginRight: 0,

    '&::before': {
        left: 'auto',
        marginLeft: 0,
        right: '20px'
    },
    '&::after': {
        left: 'auto',
        marginLeft: 0,
        right: '21px'
    }
}

///////////// LEFT ///////////

const leftStyles: CSS = {

    '&::before': {
        ...leftAndRight_topAndBottom_Before_Styles,
        ...left_TopAndBottom_Before_Styles
    },
    '&::after': {
        ...leftAndRight_topAndBottom_After_Styles,
        ...left_TopAndBottom_After_Styles
    }
}

const leftBottomStyles: CSS = {

    '&::before': {
        ...leftAndRight_topAndBottom_Before_Styles,
        ...left_TopAndBottom_Before_Styles,
        ...rightAndLeft_Bottom_Before_Styles
    },
    '&::after': {
        ...leftAndRight_topAndBottom_After_Styles,
        ...left_TopAndBottom_After_Styles,
        ...rightAndLeft_Bottom_After_Styles
    }
}

const leftTopStyles: CSS = {

    '&::before': {
        ...leftAndRight_topAndBottom_Before_Styles,
        ...left_TopAndBottom_Before_Styles,
        ...rightAndLeft_Top_Before_Styles
    },
    '&::after': {
        ...leftAndRight_topAndBottom_After_Styles,
        ...left_TopAndBottom_After_Styles,
        ...rightAndLeft_Top_After_Styles

    }
}

///////////// RIGHT ///////////

const rightStyles: CSS = {

    '&::before': {
        ...leftAndRight_topAndBottom_Before_Styles,
        ...right_TopAndBottom_Before_Styles,
    },
    '&::after': {
        ...leftAndRight_topAndBottom_After_Styles,
        ...right_TopAndBottom_After_Styles
    }
}

const rightBottomStyles: CSS = {

    '&::before': {
        ...leftAndRight_topAndBottom_Before_Styles,
        ...right_TopAndBottom_Before_Styles,
        ...rightAndLeft_Bottom_Before_Styles
    },
    '&::after': {
        ...leftAndRight_topAndBottom_After_Styles,
        ...right_TopAndBottom_After_Styles,
        ...rightAndLeft_Bottom_After_Styles
    }
}

const rightTopStyles: CSS = {

    '&::before': {
        ...leftAndRight_topAndBottom_Before_Styles,
        ...right_TopAndBottom_Before_Styles,
        ...rightAndLeft_Top_Before_Styles
    },
    '&::after': {
        ...leftAndRight_topAndBottom_After_Styles,
        ...right_TopAndBottom_After_Styles,
        ...rightAndLeft_Top_After_Styles
    }
}

///////////////////

const noArrowStyles: CSS = {
    '&::before': { display: 'none' },
    '&::after': { display: 'none' }
}
 
export {
    topStyles,
    topLeftStyles,
    topRightStyles,
    bottomStyles,
    bottomLeftStyles,
    bottomRightStyles,
    leftStyles,
    leftTopStyles,
    leftBottomStyles,
    rightStyles,
    rightTopStyles,
    rightBottomStyles,
    noArrowStyles
}