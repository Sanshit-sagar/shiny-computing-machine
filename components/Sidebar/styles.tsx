import { styled } from 'stitches.config'

export const StyledSidebar = styled('div', {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    listStyle: 'none',
    listStyleType: 'none',
    scroll: 'smooth',

    m: '0.75%',
    p: '$1',
    outline: 'none',

    width: '325px',
    minWidth: '325px',
    height: '97.5%',

    d: 'flex',
    fd: 'column',
    jc: 'space-between',
    ai: 'stretch',
    gap: '$1',
    
    br: 0,
    btrr: '$2',
    bbrr: '$2',
    oy: 'scroll',
    ox: 'hidden',

    bc: '$accentBase',
    border: '1px solid transparent',
    borderRightColor: 'transparent',

    '&::-webkit-scrollbar': {
        width: '0.35em',
        bc: 'transparent',
        ml: '$1',
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
    mb: '$2'
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
    p: 0,

    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: 0,

    width: '100%',
    border: '1px solid transparent',
    outline: '0',
    br: '$2',
    textDecoration: 'none',

    bc: 'transparent',
    '&:hover': {
        bc: '$accentBgHover',
        '& a': {
            color: '$accentTextContrast'
        }
    },
    variants: {
        isSelected: {
            true: {
           
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
                borderLeft: '3px solid $infoSolid',
                bc: '$infoBase',
                '& a': {
                    color: '$infoText'
                },
                '&:hover': {
                    bc: '$infoBg',
                    '& a': {
                        color: '$infoTextContrast'
                    }
                }
            }
        },
    ],
    defaultVariants: {
        isSelected: false,
        isDisabled: false,
        isExpanded: false,
        level: '1'
    }
})

export const StyledSidebarAnchor = styled('a', {
    width: '100%',
    position: 'relative',

    d: 'inline-flex',
    fd: 'column',
    ai: 'flex-start',
    jc: 'flex-start',
    boxSizing: 'border-box',

    inlineSize: '100%',
    minBlockSize: '32px',

    p: '$1',
    br: '$2',

    fontFamily: '$jetbrains',
    fontSize: '$2',
    fontWeight: '$3',
    fontStyle: 'normal',
    textDecoration: 'none',
    color: '$accentText',

    wordBreak: 'break-word',
    hyphens: 'auto',
    cursor: 'pointer',

    transition: `
        background-color 0.4s ease-in-out,
        color 0.4s ease-in-out
    `
})

export const StyledHeader = styled('div', {
    pl: '$1',

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
    p: '$0',
    mt: '$3',
    textAlign: 'start',
    fontFamily: '$jetbrains',
    fontSize: '$2',
    fontWeight: '$3',
    fontStyle: 'normal',
    
    letterSpacing: '$2',
    lineHeight: '$1',
    textTransform: 'uppercase',
    color: '$accentTextContrast'
})


export const LeftSlot = styled('div', {
    height: 'fit-content',
    width: 'inherit',

    d: 'flex', 
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'center', 
    gap: '$1',

    p: '$1',
    m: 0,
})

export const StyledSectionItems = styled('div', {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    my: '$1',
})