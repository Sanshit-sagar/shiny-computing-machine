import { styled, CSS } from 'stitches.config'

const cssVariables: CSS = {
    '--color-bg-primary': '#d0d6df',
    '--color-bg-primary-offset': '#f1f3f7',
    '--color-bg-secondary': '#ffffff',
    '--color-text-primary': '#3a3c42',
    '--color-text-primary-offset': '#898c94',
    '--color-orange': '#dc9960',
    '--color-green': '#1eb8b1',
    '--color-purple': '#657cc4',
    '--color-red': '#d92027',
    '--color-black': 'var(--text-color-primary)',
    '--shadow-color': '$colors$accentLine'
}

const StyledContainer = styled('div', {
    ...cssVariables, 

    position: 'absolute',
    top: 0,
    left: 0, 
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const StyledMenu = styled('div', {
    ...cssVariables,

    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$accentBase',
    border: '1.25px solid $accentBorder',
    borderRadius: '$2',
    padding: '0em',
    boxShadow: '0 10px 20px var(--shadow-color)',

    '& ul': {
        '&:not(:first-child)': {
            borderTop: '1.25px solid $accentBorder'
        }
    }
})

const StyledMenuList = styled('ul', {
    ...cssVariables,

    margin: 0,
    display: 'block',
    width: '100%',
    padding: '8px'
})

const StyledMenuSubList = styled('ul', {
    ...cssVariables, 

    flexDirection: 'column',
    padding: 0,
    backgroundColor: '$accentBase',
    border: '1px solid $accentBorder',
    borderRadius: '$1',
    boxShadow: '0 10px 20px var(--shadow-color)',
    position: 'absolute',
    left: '100%',
    right: 0,
    top: 0,
    

    variants: {
        visible: {
            true: {
                visibility: 'visible',
                display: 'flex',
                opacity: 1,
                zIndex: 999,
                height: 'fit-content',
                width: '100%'
            },
            false: {
                visibility: 'hidden',
                display: 'none',
                opacity: 0,
                zIndex: 0
            }
        }
    },
    defaultVariants: {
        visible: false
    }
})

const StyledMenuItem = styled('li', {
    ...cssVariables, 

    position: 'relative'
})

const StyledMenuButton = styled('button', {
    ...cssVariables, 

    font: 'inherit',
    padding: '$1',
    paddingRight: '$2',
    border: 0,
    width: '100%',
    borderRadius: '$1',

    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    backgroundColor: '$accentBase',

    fontFamily: '$flow',
    fontSize: '$1',

    '&:hover': {
        backgroundColor: '$accentBgHover',

        '& + ul': {
            display: 'flex'
        },
        '& svg': {
            stroke: '$accentText'
        }
    },
    '& svg': {
        flexShrink: 0,
        marginRight: '10px',
        stroke: '$accentTextContrast',
        strokeWidth: '0.5px',

        '&:nth-of-type(2)': {
            marginRight: 0,
            position: 'absolute',
            right: '8px'
        }
    },

    variants: {
        style: {
            'delete': {
                '&:hover': {
                    color: 'var(--color-red)',
                    '& svg': {
                        '&:first-of-type': {
                            stroke: 'var(--color-red)'
                        }
                    }
                }
            },
            'orange': {
                '& svg': {
                    '&:first-of-type': {
                        stroke: 'var(--color-orange)'
                    }
                }
            },
            'green': {
                '& svg': {
                    '&:first-of-type': {
                        stroke: 'var(--color-green)'
                    }
                }
            },
            'purple': {
                '& svg': {
                    '&:first-of-type': {
                        stroke: 'var(--color-purple)'
                    }
                }
            },
            'black': {
                '& svg': {
                    '&:first-of-type': {
                        stroke: 'var(--color-black)'
                    }
                }
            },
            'checked': {
                '& svg': {
                    '&:nth-of-type(2)': {
                        stroke: 'var(--color-purple)'
                    }
                }
            }
        }
    },
    defaultVariants: {
        style: 'black'
    }
})

export {
    StyledContainer,
    StyledMenu,
    StyledMenuList,
    StyledMenuSubList,
    StyledMenuItem,
    StyledMenuButton
}