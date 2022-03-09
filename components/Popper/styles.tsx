import { styled, CSS } from 'stitches.config'
import {
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
} from './variants'

const StyledPopover = styled('div', {
    position: 'relative',
    zIndex: 100,

    '@media (max-width: 768px)': {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0   
    }
})

const StyledPopoverMessage = styled('div', {
    border: '1px solid $tooltipBackground',
    borderRadius: '$2',

    position: 'relative',
    width: 'fit-content',
    marginRight: 'auto',
    marginLeft: 'auto',
    
    padding: 0,
    backgroundColor: '$tooltipForeground',
    color: '$tooltipForeground',

    '&::before': {
        position: 'absolute',
        left: '50%',
        display: 'inline-block',
        content: '',
        top: '-16px',
        marginLeft: '-9px',
        border: '8px solid transparent',
        borderBottomColor: '$accentTextContrast'
    },
    '&::after': {
        position: 'absolute',
        left: '50%',
        display: 'inline-block',
        content: '',
        top: '-14px',
        marginLeft: '-8px',
        border: '7px solid transparent',
        borderBottomColor: '$accentTextContrast'
    },

    '@media (max-width: 768px)': {
        top: 'auto',
        right: 'auto',
        left: 'auto',
        bottom: 'auto',
        width: 'auto !important',
        margin: '$2',

        '&::before': { display: 'none' },
        '&::after': { display: 'none' }
    },

    variants: {
        placement: {
            'bottom': topStyles,
            'bottom-right': topLeftStyles,
            'bottom-left': topRightStyles,
            'top': bottomStyles,
            'top-right': bottomLeftStyles,
            'top-left': bottomRightStyles,
            'right': leftStyles,
            'right-bottom': leftTopStyles,
            'right-top': leftBottomStyles,
            'left': rightStyles,
            'left-bottom': rightTopStyles,
            'left-top': rightBottomStyles
        },
        noArrow: {
            true: null,
            false: noArrowStyles
        }
    },
    defaultVariants: {
        placement: 'bottom'
    }
})

export {
    StyledPopover,
    StyledPopoverMessage
}