import { styled } from 'stitches.config'

export const StyledSidebar = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    listStyle: 'none',
    listStyleType: 'none',
    scroll: 'smooth',

    m: '$4',
    p: '$3',
    outline: 'none',

    width: '300px',
    minWidth: '300px',
    height: '800px',

    d: 'flex',
    fd: 'column',
    jc: 'space-between',
    ai: 'stretch',
    gap: '$2',
  
    
    br: '$4',
    oy: 'scroll',
    ox: 'hidden',

    bc: '$accentBg',
    border: '1px solid $accentBorder',

    '&::-webkit-scrollbar': {
        width: '0.15em',
        bc: 'transparent',
        ml: '$2',
    },
    '&::-webkit-scrollbar-thumb': {
        br: '999px',
        bc: '$accentSolid',

        '&:hover': {
            bc: '$accentSolidHover'
        },
        '&:active': {
            bc: '$accentSolidActive'
        },
        '&:focus': {
            bc: '$accentFocusRing'
        },
    },
    '&::-webkit-scrollbar-track': {
        bc: 'transparent',

        '&:hover': {
            bc: '$accentBgSubtle'
        },
        '&:active': {
            bc: '$accentBg'
        }
    }
})

export const StyledTopArea = styled('div', {
    width: '100%',
    d: 'flex', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch',
    mb: '$6'
})

export const StyledBottomArea = styled('div', {
    d: 'flex',
    fd: 'row',
    jc: 'center',
    ai: 'flex-end',
    gap: 0
})

export const StyledSidebarItem = styled('div', {
    listStyleType: 'none',
    m: 0,
    pr: '$1',

    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: 0,

    width: '95%',
    border: '1px solid transparent',
    outline: '0',
    br: '$2',

    '&:hover': {
        bc: '$accentBgHover',
        color: '$accentText',
    },
    '&:active': {
        bc: '$accentBgActive',
        color: '$accentTextContrast'
    },
    '&:focus': {
        outline: '1px solid $accentFocusRing'
    },

    color: '$accentTextContrast',

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
                // opacity: 1
            }
        },
        hasChildNodes: {
            true: {

            }
        },
        level: {
            1: { ml: '0px' },
            2: { ml: '10px', width: 'calc(95% - 10px)' },
            3: { ml: '20px', width: 'calc(95% - 20px)' },
            4: { ml: '30px', width: 'calc(95% - 30px)'},
            5: { ml: '40px', width: 'calc(95% - 40px)'}
        }
    },
    compoundVariants: [
        {
            isExpanded: true,
            hasChildNodes: true,
            css: {
                bc: '$accentBg',
                color: '$accentText',
                borderColor: '$accentBorder',
                '&:hover': {
                    bc: '$accentBgHover',
                    color: '$accentTextContrast',
                    borderColor: '$accentBorderHover'
                },
                '&:active': {
                    bc: '$accentBgActive',
                    color: '$accentTextContrast',
                    borderColor: '$accentFocusRing'
                }
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

    fontFamily: '$jetbrains',
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
    pl: '$2',

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
    },
    defaultVariants: {
        isSticky: true
    }
})

export const SectionHeading = styled('span', {
    color: '$accentTextContrast',
    lineHeight: '$1',
    p: 0,
   
    textAlign: 'start',
    fontFamily: '$jetbrains',
    fontSize: '$3',
    fontWeight: 300,
    fontStyle: 'normal',
    letterSpacing: '',
    textTransform: 'uppercase'
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

export const StyledSectionItems = styled('div', {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    my: '$6',
})