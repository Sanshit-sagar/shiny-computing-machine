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

const StyledListItem = styled('li', {
     '--transparent': '$transparent',

    display: 'flex',
    px: 2,
    py: 6,
    fontSize: '$1',
    lineHeight: '20px',
    minHeight: 5,
    mx: 0,
    br: 0,

    transition: 'background 300ms linear',
    cursor: 'pointer',

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
        }
        variant: {
            'default': {
                bc: '$accentBg',
                color: '$accentText',
                '&:hover': {
                    bc: '$accentBgHover',
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
                bc: '$dangerBg',
                color: '$dangerText',
                '&:hover': {
                    bc: '$dangerBgHover',
                    color: '$dangerTextContrast'
                },
                '&:focus': {
                    bc: '$dangerBgActive',
                    color: '$dangerTextContrast',
                    outline: '2px solid dodgerblue',
                    outlineOffset: 2
                },
                '&:active': {
                    bc: '$dangerBgActive',
                    color: '$dangerTextContrast'
                }
            }
        }
    },
    defaultVariants: {
        inset: true,
        variant: 'default'
    }
})

const StyledHeader = styled(Box, {
    py: 6,
    px: 3,
    fontSize: 0,
    fontWeight: 'bold',
    color: '$accentText',

    variants: {
        variant: {
            'full': {
                px: 2
            },
            'filled': {
                mx: 0,
                mb: 2,
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: '1px solid $accentLine'
            },
            'default': null
        }
    },
    defaultVariants: {
        variant: 'default'
    }
})

const StyledGroup = styled('li', {
    listStyle: 'none',

    '&:not(:first-child)': {
        marginTop: 2
    }
})

const StyledListBox = styled('ul', {
    margin: '0em',
    padding: '0em',
    paddingInlineStart: 0,

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
    StyledGroup,
    StyledDivider,
    StyledDividerContainer
}

