import { styled } from 'stitches.config'

export const StyledSidebar = styled('div', {
    listStyleType: 'none',
    m: 0,
    p: '$2',
    outline: 'none',
  
    br: '$2',
    width: '300px',
    height: '100%',
    bc: '$accentBg'
})

export const StyledItemContainer = styled('div', {
    d: 'flex', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch', 
    gap: 0
})

export const StyledSidebarItem = styled('div', {
    listStyleType: 'none',
    margin: 0,

    width: '100%',
    border: 'none',
    outline: '0',
    br: '$2',

    '&:hover': {
        bc: '$accentBgHover',
        color: '$accentText'
    },
    '&:active': {
        bc: '$accentBgActive',
        color: '$accentTextContrast'
    },
    '&:focus': {
        outline: '1px solid $accentFocusRing'
    },
    
    variants: {
        isSelected: {
            true: {
                bc: '$successBg',

                color: '$successText',
                '&:hover': {
                    bc: '$successBgHover',
                    color: '$successTextContrast',
                },
                '&:active': {
                    bc: '$successBgActive',
                    color: '$successTextContrast'
                },
                '&:focus': {
                    outline: '1px solid $infoFocusRing'
                }
            }
        },
        isDisabled: {
            true: { 
                bc: '$disabledBg',
                color: '$disabledText',
                boxShadow: 'none',
                cursor: 'not-allowed',

                '&:focus': {    
                    outline: '1px solid $disabledFocusRing'
                }
            }
        },
        isExpanded: {
            true: {
                
            }
        },
        hasChildNodes: {
            true: {

            }
        },
        level: {
            1: { pl: '0px', color: '$accentLine' },
            2: { pl: '10px', color: '$accentBorderHover' },
            3: { pl: '20px', color: '$accentSolid' },
            4: { pl: '30px', color: '$accentText' },
            5: { pl: '40px', color: '$accentTextContrast'}
        }
    },
    compoundVariants: [
        {
            isExpanded: true,
            hasChildNodes: true,
            css: {
                bc: '$accentLine',
            }
        }
    ],
    defaultVariants: {
        isSelected: false,
        isDisabled: false,
        isExpanded: false,
        level: '1'
    }
})

export const StyledSidebarAnchor = styled('a', {
    color: '$accentText',
    width: '100%',
    position: 'relative',

    d: 'inline-flex',
    fd: 'column',
    ai: 'flex-start',
    jc: 'flex-start',
    boxSizing: 'border-box',

    inlineSize: '100%',
    minBlockSize: '32px',

    p: '$2',
    br: '$2',

    fontFamily: '$plexsans',
    fontSize: '$2',
    fontWeight: 400,
    fontStyle: 'normal',
    textDecoration: 'none',

    wordBreak: 'break-word',
    hyphens: 'auto',
    cursor: 'pointer',

    transition: `
        background-color 0.4s ease-in-out,
        color 0.4s ease-in-out
    `,

    '&:hover': {
        // color: '$accentText'
    },
    '&:active': {
        // color: '$accentTextContrast',
    },
    '&:focus': {
        outline: 'none',
    },
    '&focus-ring': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: '1px solid transparent',
        '&::before': {
            borderColor: '$accentFocusRing'
        }
    }
})

export const StyledHeader = styled('div', {
    transition: 'all',
    WebkitTransition: 'all',
    WebkitTransitionDuration: 'inherit',
    transitionDuration: 'inherit',

    variants: {
        isSticky: {
            true: {
                position: 'sticky'
            },
            false: {
                position: 'absolute'
            }
        },
        allowOverflow: {
            true: {
                overflow: 'visibile',
                contain: 'size layout style'
            },
            false: {
                overflow: 'hidden',
                contain: 'size layout style paint'
            }
        }
    },
    defaultVariants: {
        isSticky: true,
        allowOverflow: true
    }
})

export const SectionHeading = styled('span', {
    color: '$accentTextContrast',
    lineHeight: '$1',
    mt: '$2',
    ml: '$2',
    mb: 0,
    p: 0,
   
    textAlign: 'start',
    fontFamily: '$plexsans',
    fontSize: '$3',
    fontWeight: 300,
    fontStyle: 'light',
    letterSpacing: '',
    textTransform: 'capitalize'
})


export const LeftSlot = styled('div', {
    height: 'fit-content',
    width: 'inherit',

    d: 'flex', 
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'center', 
    gap: '$3',

    px: '$1',
    py: '$2',
    m: 0,
})

export const SectionItems = styled('div', {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    overflow: 'hidden'
})