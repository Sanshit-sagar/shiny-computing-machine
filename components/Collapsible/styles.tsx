import { styled } from 'stitches.config' 

const sharedStyles = {
    bc: '$accentBase',
    color: '$accentText',
    border: '1px solid $accentBorder',
    br: '$2',
    m: 0,
    p: 0,
    height: 'fit-content',
    width: '100%',
    display: 'flex',
}

export const StyledCollapsibleItem = styled('div', {
    ...sharedStyles,
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: 0,

    variants: {
        isExpanded: {
            true: { display: 'block' },
            false: { display: 'none' }
        },
        isDisabled: {
            true: { 
                bc: '$disabledBg', 
                color: '$disabledText', 
                borderColor: '$disabledBorder' 
            }
        }
    },
    defaultVariants: {
        isExpanded: false,
        isDisabled: false
    }
})

export const StyleCollapsibleItemTitle = styled('h3', {
    ...sharedStyles,

    fontSize: '$3',
    fontVariant: 'tabular',
    fontFamily: '$jetbrains',
    fontStyle: 'normal',
    fontWeight: 300
})

export const StyledCollapsibleItemButton = styled('button', {
    ...sharedStyles,    

    variants: {
        isHovered: {
            true: {
                bc: '$accentBgHover',
                color: '$accentTextContrast',
                border: '$accentBorderHover'
            }
        },
        isExpanded: {
            true: {

            },
            false: {

            }
        },
        isDisabled: {
            true: {

            },
        },
    },
    defaultVariants: {
        isHovered: false,
        isExpanded: false,
        isDisabled: false
    }
})

export const StyledCollapsibleItemContent = styled('div', {
    ...sharedStyles,
    flexDirection: 'column',
    jc: 'flex-start',
    ai: 'flex-start',
    gap: '$1'
})


export const StyledCollapsibleRoot = styled('div', {
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: 0
})