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
    '--out-speed': '100ms',

    touchAction: 'manipulation',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent'
}

export const GuiMainButton = styled('button', {
    ...cssVariables, 

    cursor: 'pointer',
    appearance: 'none',
    background: 'none',
    overflow: 'hidden',
    border: 'none',
    borderRadius: '6px 0px 0px 6px',

    display: 'inline-flex',
    alignItems: 'center',
    gap: '1ch',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',

    fontSize: '13px',
    fontFamily: '$jetbrains',
    fontStyle: 'normal',
    fontWeight: 300,

    textAlign: 'center',
    textShadow: 'hsl(220 75% 40%)',
    padding: '6px 12px',

    color: 'var(--ontheme)',
    outlineColor: 'var(--theme)',
    outlineOffset: '-5px',

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
    }
})


export const GuiPopupButton = styled('span', {
    ...cssVariables,

    inlineSize: '4ch',
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderInlineStart: 'var(--border)',
    borderRadius: '0 var(--radius) var(--radius) 0',

    '@supports (border-start-start-radius: 1px)': {
        borderInlineStart : 'var(--border)',
        borderStartEndRadius: 'var(--radius)',
        borderEndEndRadius: 'var(--radius)'
    },
    '&:is(:hover,:focus-visible)': {
        background: 'var(--theme-hover)'
    },
    '&:focus': {
        outline: 'none'
    },
    '&:active': {
        background: 'var(--theme-active)'
    },
    '&:focus-within': {
        '& > svg': {
            transitionDuration: 'var(--in-speed)',
            transform: 'rotateZ(.5turn)'
        },
        '& > .gui-popup': {
            transitionDuration: 'var(--in-speed)',
            opacity: 1,
            transform: 'translateY(0)',
            pointerEvents: 'auto'
        }
    },
    '@media(prefers-reduced-motion: no-preference)': {
        '& > svg': {
            transition: 'transform var(--out-speed) ease'
        },
        '& > .gui-popup': {
            transform: 'translateY(5px)',
            transition: 'all var(--out-speed) ease'
        }
    }
})

export const GuiPopup = styled('ul', {
    ...cssVariables,

    '--shadow': '220 70% 15%',
    '--shadow-strength': '1%',

    pointerEvents: 'none',

    position: 'absolute',
    insetBlockEnd: '80%',
    insetInlineStart: '-1.5ch',

    listStyleType: 'none',
    background: 'var(--popupbg)',
    color: 'var(--theme-text)',

    padding: '4.53516px 0px',

    borderRadius: 'var(--radius)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',

    transition: 'opacity var(--out-speed) ease',

    boxShadow: `
        0 -2px 5px 0 hsl(220 70% 15% / 6%),
        0 1px 1px -2px hsl(220 70% 15% / 11%),
        0 2px 2px -2px hsl(220 70% 15% / 13%),
        0 5px 5px -2px hsl(220 70% 15% / 14%),
        0 9px 9px -2px hsl(220 70% 15% / calc(var(--shadow-strength) + 14%)),
        0 16px 16px -2px hsl(220 70% 15% / calc(var(--shadow-strength) + 20%))
    `,

    '&:focus': {
        outline: 'none'
    },

    '@media (prefers-color-scheme: dark)': {
        '--shadowStrength': '5%',
        '--shadow': '220 3% 2%',

        '& button:not(:focus-visible, :hover)': {
            textShadow: '0 1px 0 var(--ontheme)'
        },
        '& button:not(:focus-visible, :hover) > svg': {
            filter: 'drop-shadow(0 1px 0 var(--ontheme))'
        }
    },

    '@media (width <= 400px)': {
        insetInlineStart: '-200%'
    },

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

type PopupElement = ElementRef<typeof HTMLUListElement>
type PopupProps = ComponentPropsWithoutRef<typeof GuiPopup> & VariantProps<typeof GuiPopup> & {
    css?: CSS; 
}

const ForwardedGuiPopup = forwardRef<PopupElement, PopupProps>(({
    isVisible,
    ...props
}, forwardedRef) => (
    <GuiPopup 
        aria-hidden={isVisible.toString()} 
        isVisible={isVisible}
        {...props}
        ref={forwardedRef} 
    />  
))
export const GuiPopupList = ForwardedGuiPopup

const StyledListItemButton = styled('button', {
    ...cssVariables,

    display: 'inline-flex',
    alignItems: 'center',

    color: 'var(--theme-text)',
    background: 'var(--ontheme)',
    
    fontSize: '14.4px',
    fontWeight: 500,
    fontFamily: '$plexsans',

    gap: '9.35px',
    padding: '11.69px 23.39px',
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

export const GuiPopupItem = ({ children, id, handleClick, isSelected }: PopupListItemProps) => (
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



export const GuiSplitButton = styled('div', {
    ...cssVariables,

    display: 'inline-flex',
    borderRadius: 'var(--radius)',
    background: 'var(--theme)',
    color: 'var(--ontheme)',
    fill: 'var(--ontheme)',

    userSelect: 'none',
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'transparent',

    '&:focus': {
        outline: '2px solid dodgerblue',
        outlineOffset: '2px',
    },

    '& > button': {
        borderEndStartRadius: 'var(--radius)',
        borderStartStartRadius: 'var(--radius)',
        '& svg': {
            fill: 'none',
            stroke: 'var(--ontheme)'
        },
        '@supports (border-start-start-radius: 1px)': {
            borderEndStartRadius: 'var(--radius)',
            borderStartStartRadius: 'var(--radius)'
        }
    },

    '@media (prefers-color-scheme: light)': {
        '& > button': {
            textShadow: '0 1px 0 var(--theme-active)' 
        }, 
        '& button:is(:focus-visible, :hover)': {
            textShadow: '0 1px 0 var(--theme-active)',
            '& svg': {
                filter: 'dropShadow(0 1px 0 var(--theme-active))'
            }
        }, 
        [`& > ${GuiPopupButton}`]: {
            '& > svg': {
                filter: 'dropShadow(0 1px 0 var(--theme-active))'
            }
        }
    },

    '& svg': {
        inlineSize: '2ch',
        boxSizing: 'content-box',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '2px'
    }
})