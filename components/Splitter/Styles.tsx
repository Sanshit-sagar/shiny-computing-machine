import { styled } from '../../stitches.config'

export const StyledDragger = styled('div', {
    br: '$2',
    bc: '$accentTextContrast',
    
    variants: {
        direction: {
            'VERTICAL': {
                height: '$1',
                width: '$6'
            },
            'HORIZONTAL': {
                height: '$6',
                width: '$1'
            }
        }
    },
    defaultVariants: {
        direction: 'HORIZONTAL'
    }
})

export const StyledGutter = styled('div', {
    d: 'flex',
    jc: 'center',
    ai: 'center',
    bc: '$panelBase',

    variants: {
        direction: {
            'HORIZONTAL': {
                height: '100%',
                p: '0 $1',
                fd: 'column',
                '&:hover': {
                    cursor: 'col-resize'
                }
            },
            'VERTICAL': {
                width: '100%',
                p: '$1 0',
                fd: 'row',
                '&:hover': {
                    cursor: 'row-resize'
                }
            }
        }
    },
    defaultVariants: {
        direction: 'HORIZONTAL'
    }
})

export const StyledSplitter = styled('div', {
    height: '100%',
    width: '100%',
    display: 'flex',
    overflow: 'hidden',

    variants: {
        direction: {
            'HORIZONTAL': {
                flexDirection: 'row'
            },
            'VERTICAL': {
                flexDirection: 'column'
            }
        }
    },
    defaultVariants: {
        direction: 'VERTICAL'
    }
})

export const StyledChildWrapper = styled('div', {
    height: '100%',
    width: '100%'
})

export const StyledTile = styled('div', {
    height: '99%', 
    width: '99%',

    minWidth: '200px',
    minHeight: '200px',
    maxWidth: '700px',
    maxHeight: '700px',

    m: '1px',
    p: 0,

    backgroundColor: '$accentBg',
    // border: '1px solid $accentBorder',
    borderRadius: '$2',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$1'
})

export const StyledContainer = styled('div', {
    height: 'fit-content',
    width: 'fit-content',

    padding: '$2',
    bc: 'gray',
    border: '1px solid silver'
})