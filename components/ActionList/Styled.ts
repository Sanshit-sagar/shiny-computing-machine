import { styled, CSS } from 'stitches.config'
import { Box } from '@/components/Box' 

const StyledDividerContainer = styled('div', {
    position: 'relative',

    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        top: '-7px',
        border: '0 solid var(--divider-color, transparent)'
    }
})

const StyledDivider = styled(Box, {
    '--divider-height': '1px',

    height: 'var(--divider-height)',
    backgroundColor: '$accentLine',
    marginTop: 'calc(var(--divider-height) - 1px)',
    marginBottom: 'calc(2 * var(--divider-height))',
    listStyle: 'none'
})

const StyledContent = styled('span', {
    backgroundColor: '$transparent',

    fontSize: '12px',
    fontVariant: 'tabular',
    fontFamily: '$flow',
    fontVariantNumeric: 'tabular-nums',
    fontStyle: 'normal',
    fontWeight: 300,

    lineHeight: '16px', 
    letterSpacing: '-0.05em',
    wordSpacing: '-0.6ch',

    verticalAlign: 'middle',

    variants: {
        inline: {
            true: {
                flexGrow: 0
            },
            false: {
                flexGrow: 1
            }
        }
    },
    defaultVariants: {
        inline: false
    }
})

const StyledListItem = styled('li', {
     '--transparent': '$transparent',

    display: 'flex',
    p: '$2',
    minHeight: 5,
    m: '$1',
    br: '$1',

    transition: 'background 300ms linear',
    cursor: 'pointer',
    border: '1.25px solid transparent',
 
    variants: {
        inset: {
            true: {
                mx: 2,
                br: 6
            },
            false: null
        },
        disabled: {
            true: {
                cursor: 'not-allowed'
            },
            false: null
        },
        variant: {
            'default': {
                bc: '$accentBg',
                color: '$accentText',
                '&:hover': {
                    bc: '$accentLine',
                    color: '$accentTextContrast'
                },
                '&:focus': {
                    bc: '$accentBgActive',
                    color: '$accentTextContrast',
                    outline: '2px solid dodgerblue',
                    outlineOffset: 2
                },
                '&:active': {
                    bc: '$accentBgActive',
                    color: '$accentTextContrast'
                }
            },
            'danger': {
                bc: '$accentBg',
                color: '$dangerText',
                '&:hover': {
                    bc: '$dangerBgHover',
                    color: '$dangerText'
                },
                '&:focus': {
                    bc: '$dangerBgActive',
                    color: '$dangerText',
                    outline: '2px solid dodgerblue',
                    outlineOffset: 2
                },
                '&:active': {
                    bc: '$accentBgActive',
                    color: '$dangerTextContrast'
                }
            },
            'info': {
                bc: '$accentBg',
                color: '$infoText',
                '&:hover': {
                    bc: '$infoBgHover',
                    color: '$infoTextContrast'
                },
                '&:focus': {
                    bc: '$infoBgActive',
                    color: '$infoTextContrast',
                    outline: '2px solid dodgerblue',
                    outlineOffset: 2
                },
                '&:active': {
                    bc: '$infoSolid',
                    color: '$infoTextContrast'
                }
            },
            'success': {
                bc: '$accentBg',
                color: '$successText',
                '&:hover': {
                    bc: '$successBgHover',
                    color: '$successText'
                },
                '&:focus': {
                    bc: '$successBgActive',
                    color: '$successText',
                    outline: '2px solid dodgerblue',
                    outlineOffset: 2
                },
                '&:active': {
                    bc: '$successBgActive',
                    color: '$successTextContrast'
                }
            },
            'warning': {
                bc: '$accentBg',
                color: '$warningText',
                '&:hover': {
                    bc: '$warningBgHover',
                    color: '$warningText'
                },
                '&:focus': {
                    bc: '$warningBgActive',
                    color: '$warningTextContrast',
                    outline: '2px solid dodgerblue',
                    outlineOffset: 2
                },
                '&:active': {
                    bc: '$warningBgActive',
                    color: '$warningTextContrast'
                }
            }
        }
    },
    defaultVariants: {
        inset: false,
        disabled: false,
        variant: 'default'
    }
})

const StyledHeader = styled('div', {
    p: '$2',
    margin: '0em',

    variants: {
        full: {
            true: {
                px: '$2'
            },
            false: null
        },
        filled: {
            true: {
                mx: '$0',
                mb: '$2',
                border: '1px solid $accentLine'
            },
            false: null
        }
    },
    defaultVariants: {
        full: false,
        filled: false
    }
})

const StyledHeaderLabel = styled('span', {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: '$flow',
    fontVariant: 'tabular',
    textDecoration: 'none',
    textTransform: 'capitalize',
    letterSpacing: '0.05ch',
    verticalAlign: 'top',
    textAlign: 'start',
    color: '$accentTextContrast',
})


const StyledGroup = styled('li', {
    listStyle: 'none',

    '&:not(:first-child)': {
        marginTop: '$2'
    }
})

const StyledListBox = styled('ul', {
    width: '100%',
    margin: '0em',
    padding: '0em',
    paddingInlineStart: 0,

    bc: '$accentBg',
    border: '$accentLine',
    br: '$2',

    variants: {
        inset: {
            true: {
                py: 2
            },
            false: null
        }
    },
    defaultVariants: {
        inset: false
    }
})

const StyledLink = styled('a', {
    px: 2,
    py: 6,
    display: 'flex',
    flexGrow: 1,
    borderRadius: 2,
    color: 'inherit',

    '&:hover': {
        color: 'inherit',
        textDecoration: 'none'
    }
})

export {
    StyledLink,
    StyledListBox,
    StyledListItem,
    StyledHeader,
    StyledHeaderLabel,
    StyledContent,
    StyledGroup,
    StyledDivider,
    StyledDividerContainer
}

