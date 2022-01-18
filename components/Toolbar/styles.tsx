import { blackA, mauve, violet } from '@radix-ui/colors'
import { styled } from '../../stitches.config'

export const StyledToolbar = styled('div', {
    height: 100,
    width: 500,
    position: 'relative',
    display: 'flex',
    padding: '$1',
    border: '1px solid $accentBorder',
    br: '$2',
    bc: '$accentBase'
});

export const itemStyles = {

    flex: '0 0 auto',
    color: '$accentText',
    height: 30,
    width: 30,
    padding: '$1',
    br: '$1',
    display: 'inline-flex',
    fontSize: '$2',
    lineHeight: 1,
    jc: 'center',
    ai: 'center'
}

export const StyledButton = styled('button', {
    ...itemStyles,
    width: 'fit-content',
    px: '$2',
    py: '2px',
    color: '$accentText',
    bc: '$accentBg',
    border: '1px solid $accentBorder',
    br: '$1',
    '&:hover': {
        bc: '$accentBgHover',
        color: '$accentTextContrast',
        borderColor: '$accentBorderHover',
    },
    '&:focus': {
        bc: '$accentBgActive',
        borderColor: '$accentFocusRing',
        color: '$accentTextContrast'
    }
});

export const StyledLink = styled('div', {
    ...itemStyles,
    bc: 'transparent',
    color: '$accentText',
    display: 'inline-flex',
    jc: 'center',
    ai: 'center',
    '&:hover': { 
        bc: 'transparent',
        cursor: 'pointer' 
    }
});

export const StyledToggleGroup = styled('div', {
    display: 'inline-flex',
    br: '$2',
    jc: 'flex-start',
    ai: 'center',
    gap: 0,
    mr: '$1',
    '&:last-child': {
        mr: 0
    }
});

export const StyledToggleItem = styled('button', {
    ...itemStyles,
    '&:first-child': { 
        borderLeft: '1px solid $accentBorder',
        borderRight: '0',
        btrr: '0', 
        bbrr: '0',
        bblr: '$1',
        btlr: '$1',
    },
    '&:last-child': { 
        borderRight: '1px solid $accentBorder',
        borderLeft: '0',
        btrr: '$1', 
        bbrr: '$1',
        bblr: '0',
        btlr: '0'
    },
    '&:hover': {
        bc: '$accentBgHover',
        borderColor: '$accentBorderHover',
        color: '$accentText'
    },
    '&:focus': {
        bc: '$accentBgActive',
        borderColor: '$accentFocusRing',
        color: '$accentTextContrast'
    },
    '& .active': { 
        bc: '$accentSolid', 
        color: '$accentTextContrast'
    },
});

export const StyledSlot = styled('div', {
    display: 'flex',
    width: 'inherit',

    variants: {
        o: {
            'vertical': { fd: 'column' },
            'horizontal': { fd: 'row' },
        },
        jc: {
            'flex-start': { jc: 'flex-start' },
            'center': { jc: 'center' },
            'flex-end': { jc: 'flex-end' },
            'space-evenly': { jc: 'space-evenly'},
            'space-around': { jc: 'space-around' },
            'space-between': { jc: 'space-between' },
        },
        ai: {
            'flex-start': { jc: 'flex-start' },
            'center': { jc: 'center' },
            'flex-end': { jc: 'flex-end' },
            'space-evenly': { jc: 'space-evenly'},
            'space-around': { jc: 'space-around' },
            'space-between': { jc: 'space-between' },
        },
        fw: {
            'wrap': { flexWrap: 'wrap' },
            'nowrap': { flexWrap: 'nowrap' }
        },
        ox: {
            'scroll': { overflowX: 'scroll' },
            'hidden': { overflowX: 'hidden' },
        },
        oy: {
            'scroll': { overflowY: 'scroll' },
            'hidden': { overflowY: 'hidden' }
        },
    },
    defaultVariants: {
        o: 'horizontal',
        jc: 'space-around',
        ai: 'center',
        fw: 'nowrap',
        ox: 'scroll',
        oy: 'scroll' 
    }
})

export const Toolbar = StyledToolbar
export const ToolbarToggleGroup = StyledToggleGroup
export const ToolbarToggleItem = StyledToggleItem
export const ToolbarLink = StyledLink
export const ToolbarButton = StyledButton 
export const ToolbarSlot = StyledSlot