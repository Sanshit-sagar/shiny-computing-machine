import { Key } from 'react'
import { styled } from 'stitches.config'

import { Rect } from '@react-stately/virtualizer'

export const StyledSidebar = styled('div', {
    listStyleType: 'none',
    m: 0,
    py: 0,
    px: '$2',
    outline: 'none',
  
    br: '$2',
    bc: '$accentBase',

    height: '600px',
    width: '250px',
})

export const StyledSidebarExtendableContainer = styled('div', {
    display: 'flex', 
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: 0, 
    m: 0,
    p: 0
})

export const StyledSidebarItem = styled('div', {
    listStyleType: 'none',
    margin: 0,

    width: '100%',
    color: '$accentText',
    border: 'none',
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
            },
        },
        isExpanded: {
            true: {

            }
        }
    },
    defaultVariants: {
        isSelected: false,
        isDisabled: false
    }
})

export const StyledSidebarAnchor = styled('a', {
    // bc: '$accentBg',
    color: '$accentText',

    width: '100%',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',

    inlineSize: '100%',
    minBlockSize: '32px',
    padding: '$2',

    borderRadius: '$2',

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
        color: '$accentText'
    },
    '&:active': {
        color: '$accentTextContrast',
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
    },
    variants: {
        level: {
            0: { pl: '$1' },
            1: { pl: '$3' },
            2: { pl: '$5' },
            3: { pl: '$7' },
            4: { pl: '$9' },
            5: { pl: '$12' }
        }
    },
    defaultVariants: {
        level: '1'
    }
})

type LayoutInfo = {
    type: string;
    key: Key;
    parentKey: Key | null;
    rect: Rect;
    estimatedSize: boolean;
    isSticky: boolean;
    opacity: number;
    transform: string | null;
    zIndex: number;
    allowOverflow: boolean;
}

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
        isSticky: false,
        allowOverflow: true
    }
})

export const SectionHeading = styled('span', {
    color: '$accentTextContrast',
    blockSize: '100px',
    lineHeight: '$2',
    margin: '$2 0 $4 0',
    padding: '$1',
    borderRadius: '$5',
    textAlign: 'start',
    fontFamily: '$plexsans',
    fontSize: '$2',
    fontWeight: 200,
    fontStyle: 'light',
    letterSpacing: '',
    textTransform: 'uppercase'
})


export const LeftSlot = styled('div', {
    // bc: 'purple',
    height: 'fit-content',
    width: 'inherit',
    display: 'flex', 
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'center', 
    gap: '$1',
})

export const SectionItems = styled('div', {
    transition: 'all',
    WebkitTransition: 'all',
    WebkitTransitionDuration: 'inherit',
    transitionDuration: 'inherit',
    height: '600px'
})