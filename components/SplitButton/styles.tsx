import { ReactNode, forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { styled, CSS, VariantProps } from 'stitches.config'

const cssVariables: CSS = {
    '--theme':          'hsl(220 75% 50%)',
    '--theme-hover':    'hsl(220 75% 45%)',
    '--theme-active':   'hsl(220 75% 40%)',
    '--theme-text':     'hsl(220 75% 25%)',
    '--theme-border':   'hsl(220 50% 75%)',
    '--ontheme':        'hsl(220 90% 98%)',
    '--popupbg':        'hsl(220 0% 100%)',

    '--border': '1px solid var(--theme-border)',
    '--radius': '6px',
    '--in-speed': '500ms',
    '--out-speed': '100ms'
}

export const StyledSplitButton = styled('button', {
    ...cssVariables, 

    cursor: 'pointer',
    appearance: 'none',
    background: 'none',
    overflow: 'hidden',
    border: 'none',

    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '1ch',
    whiteSpace: 'nowrap',

    fontFamily: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 500,

    paddingBlock: '1ch',
    paddingInline: '1.75ch',

    color: 'var(--ontheme)',
    outlineColor: 'var(--theme)',
    outlineOffset: '-2px',

    '&:hover': {
        background: 'var(--theme-hover)',
        color: 'var(--ontheme)',

        '& svg': { 
            stroke: 'currentColor',
            fill: 'none'
        },
    },
    '&:focus-visible': {
        background: 'var(--theme-hover)',
        color: 'var(--ontheme)',

        '& svg': { 
            stroke: 'currentColor',
            fill: 'none'
        },
    },
    '&:active': {
        background: 'var(--theme-active)'
    },

    '& svg': {
        inlineSize: '2ch',
        boxSizing: 'content-box',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2px'
    }
})


export const StyledSplitButtonContainer = styled('div', {
    ...cssVariables,

    display: 'inline-flex',
    borderRadius: 'var(--radius)',
    background: 'var(--theme)',
    color: 'var(--ontheme)',
    fill: 'var(--ontheme)',

    touchAction: 'manipulation',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    '& > button': {
        borderEndStartRadius: 'var(--radius)',
        borderStartStartRadius: 'var(--radius)',

        '& svg': {
            fill: 'none',
            stroke: 'var(--ontheme)'
        }
    },

    '@media (prefers-color-scheme: light)': {
        '& > button': {
            textShadow: '0 1px 0 var(--theme-active)' 
        }, 
        '& button:is(:focus-visible)': {
            textShadow: '0 1px 0 var(--theme-active)'
        }, 
        '& button:is(:hover)': {
            textShadow: '0 1px 0 var(--theme-active)'
        },
        '& button:is(:focus-visible) > svg': {
            filter: 'dropShadow(0 1px 0 var(--theme-active))'
        },
        '& button:is(:hover) > svg': {
            filter: 'dropShadow(0 1px 0 var(--theme-active))'
        },
        [`& > ${StyledSplitButton}`]: {
            '& > svg': {
                filter: 'dropShadow(0 1px 0 var(--theme-active))'
            }
        }
    }
})

export const StyledPopupList = styled('ul', {
    ...cssVariables,

    '--shadow': '220 70% 15%',
    '--shadow-strength': '1%',

    pointerEvents: 'none',

    position: 'absolute',
    bottom: '80%',
    left: '-1.5ch',
    width: 'fit-content',

    listStyleType: 'none',
    background: 'var(--popupbg)',
    color: 'var(--theme-text)',
    paddingInline: 0,
    paddingBlock: '.5ch',

    borderRadius: 'var(--radius)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '.9em',
    transition: 'opacity var(--out-speed) ease',

    boxShadow: `
        0 -2px 5px 0 hsl(220 70% 15% / calc(6%)),
        0 1px 1px -2px hsl(220 70% 15% / calc(11%)),
        0 2px 2px -2px hsl(220 70% 15% / calc(13%)),
        0 5px 5px -2px hsl(220 70% 15% / calc(14%)),
        0 9px 9px -2px hsl(220 70% 15% / calc(var(--shadow-strength) + 14%)),
        0 16px 16px -2px hsl(220 70% 15% / calc(var(--shadow-strength) + 20%))
    `,

    '& svg': {
        fill: 'var(--popupbg)',
        stroke: 'var(--theme)',

        '@media(prefers-color-scheme: dark)': {
            stroke: 'var(--theme-border)'
        }
    },

    '& button': {
        color: 'var(--theme-text)',
        width: '100%',
    },

    '@media (prefers-color-scheme: dark)': {
        '--shadowStrength': '5%',
        '--shadow': '220 3% 2%',

        '&:not(:focus-visible, :hover)': {
            textShadow: '0 1px 0 var(--ontheme)'
        },
        '&:not(:focus-visible, :hover) > svg': {
            filter: 'drop-shadow(0 1px 0 var(--ontheme))'
        }
    },

    variants: {
        isVisible: {
            true: {
                display: 'flex',
                opacity: 1,
                visibility: 'visible'
            },
            false: {
                display: 'none',
                opacity: 0,
                visibility: 'hidden'
            }
        }
    },
    defaultVariants: {
        isVisible: false
    }
})

type PopupElement = ElementRef<HTMLUListElement>
type PopupProps = ComponentPropsWithoutRef<typeof StyledPopupList> & VariantProps<typeof StyledPopupList> & {
    css?: CSS; 
}

const ForwardedPopupList = forwardRef<PopupElement, PopupProps>(({
    isVisible,
    ...props
}, forwardedRef) => (
    <StyledPopupList 
        aria-hidden={isVisible.toString()} 
        isVisible={isVisible}
        {...props}
        ref={forwardedRef} 
    />  
))
export const PopupList = ForwardedPopupList

export const StyledPopupButton = styled('span', {
    ...cssVariables,

    inlineSize: '4ch',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderInlineStart: 'var(--border)',

    borderStartEndRadius: 'var(--radius)',
    borderEndEndRadius: 'var(--radius)',
    borderRadius: '0 var(--radius) var(--radius) 0',

    '@supports (border-start-start-radius: 1px)': {
        borderInlineStart : 'var(--border)',
        borderStartEndRadius: 'var(--radius)',
        borderEndEndRadius: 'var(--radius)'
    },

    '&:hover': {
        background: 'var(--theme-hover)'
    },
    '&:focus-within': {
        background: 'var(--theme-hover)',
        '& > svg': {
            transitionDuration: 'var(--in-speed)',
            transform: 'rotateZ(.5turn)'
        },
        [`& > ${StyledPopupList}`]: {
            transitionDuration: 'var(--in-speed)',
            opacity: 1,
            transform: 'translateY(0)',
            pointerEvents: 'auto'
        }
    },
    '&:focus': {
        outline: 'none'
    },
    '&:active': {
        background: 'var(--theme-active)'
    },
    '@media(prefers-reduced-motion: no-preference)': {
        '& > svg': {
            transition: 'transform var(--out-speed) ease'
        },
        '& > ul': {
            transform: 'translateY(5px)',
            transition: 'all var(--out-speed) ease'
        }
    }
})

const StyledListItemButton = styled('button', {
    ...cssVariables,

    display: 'inline-flex',
    alignItems: 'center',
    gap: '9.35px',

    color: 'var(--theme-text)',
    background: 'var(--ontheme)',

    fontFamily: 'inherit',
    fontSize: '$1',
    fontWeight: 500,
   
    padding: '$3 $6',
    textAlign: 'center',

    '&:hover': {
        background: 'var(--theme-hover)'
    },

    variants: {
        isSelected: {
            true: {
                background: 'var(--theme-active)',
            }
        }
    },
    defaultVariants: {
        isSelected: false
    }
})

type PopupListItemProps = { 
    children: ReactNode; 
    id: number;
    handleClick: (index: number) => void; 
    isSelected: boolean; 
}

export const StyledPopupListItem = ({ children, id, handleClick, isSelected }: PopupListItemProps) => (
    <li> 
        <StyledListItemButton 
            tabIndex={0} 
            isSelected={isSelected}
            onClick={(_event) => handleClick(id)}
        > 
            {children} 
        </StyledListItemButton> 
    </li>
)