import React, { ComponentProps } from 'react'
import { styled, VariantProps, CSS } from '../../stitches.config'

export const Controls = styled('div', {
    height: 'fit-content',
    width: '100%',

    d: 'inline-flex', 
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: 0,

    p: 0,
    m: '$1',

    border: 0,
    outline: 0
});

export const Title = styled('div', {
    display: 'flex',
    width: '100%',
    border: 'none',
});

export const CellWrapper = styled('td', {
    m: 0,
    p: 0,
    bc: 'transparent',
    border: 'none',
    outline: 'none'
});

const CalendarWrapper = styled('div', {
    height: '325px',
    d: 'flex', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch', 
    p: 0,
    m: 0,
    mb: '$1',
    border: 'none',
    outline: 'none'
})

type CalendarChildProps =  { children: React.ReactNode; }
type CalendarCssProps = { css?: CSS; }
type CalendarOwnProps = ComponentProps<typeof CalendarWrapper>
type CalendarWrapperProps = CalendarOwnProps & CalendarChildProps & CalendarCssProps

const StyledContainer = React.forwardRef<HTMLDivElement, CalendarWrapperProps>(({ 
    children, 
    ...otherProps 
}, forwardedRef) => (
    <CalendarWrapper ref={forwardedRef} {...otherProps}>
        {children}
    </CalendarWrapper>
))

export const StyledCell = styled('span', {
    appearance: 'none',
    userSelect: 'none',

    d: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',
    m: '0em',

    width: '36px',
    height: '36px',
    aspectRatio: '1',
    my: '1px',

    color: '$accentText',
    border: '1px solid transparent',
    outline: 'none',

    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    variants: {
        isHovered: {
            true: {
                borderColor: '#2260ff',
                br: '$2',
                cursor: 'pointer'
            },
            false: null,
        },
        isFocused: {
            true: {
                borderColor: '#2260ff',
                br: '$2'
            },
            false: null,
        },
        isPressed: {
            true: {
                bc: '$infoSolid', 
                color: '$infoTextContrast',
                cursor: 'grabbing'
            },
            false: null
        },
        isVisible: {
            true: { 
                visibility: 'visible' 
            },
            false: { 
                visibility: 'hidden'
            } 
        },
        isRangeStart: {
            true: {

            },
            false: null
        },
        isRangeEnd: {
            true: {

            },
            false: null
        },
        isDisabled: {
            true: {
                bc: '$disabledBg', 
                color: '$disabledText',
                cursor: 'not-allowed',
            },
            false: null
        },
        isFirstDayOfWeek: {
            true: { 
                
            }
        },
        isLastDayOfWeek: {
            true: { 
                
            }
        },
        isToday: {
            true: {
                width: '36px',
                height: '36px',
                border: '1px solid $accentBorder',
                br: '$2',
                color: '$accentTextContrast'
            }
        },
        isSelected: {
            true: {
                bc: '$infoBgHover',
                color: '$accentTextContrast',
                borderColor: 'transparent',
                borderRadius: '0em'
            },
            false: null
        },
        isSelectionStart: {
            true: {
                borderRadius: '0em',
                bblr: '$2',
                btlr: '$2'
            },
            false: null
        },
        isSelectionEnd: {
            true: {
                borderRadius: '0em',
                bbrr: '$2',
                btrr: '$2'
            },
            false: null
        },
    },
    compoundVariants: [
        {
            isHovered: true,
            isToday: true,
            css: {
                color: '$accentSolid',
            }
        }, 
        {
            isSelected: true,
            isSelectionStart: false,
            isSelectionEnd: false,
            css: {
                br: 0
            }
        }
    ],
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isDisabled: false,
        isVisible: true,
        isSelected: false,
        isSelectionStart: false,
        isSelectionEnd: false,
        isRangeStart: false,
        isRangeEnd: false,
        isFirstDayOfWeek: false,
        isLastDayOfWeek: false
    }
}); 

type CSSProps = { css?: CSS }
export type CellStyleProps = VariantProps<typeof StyledCell>
export type CellOwnProps = ComponentProps<typeof StyledCell> & { children: React.ReactNode; }
export type StyledCellProps = CellOwnProps & CellStyleProps & CSSProps

const ForwardedCell = React.forwardRef<HTMLSpanElement, StyledCellProps>(
({  
    children, 
    isHovered, 
    isFocused, 
    isPressed, 
    isDisabled,
    isSelected,
    isSelectionStart,
    isSelectionEnd,
    isRangeStart,
    isRangeEnd,
    isVisible,
    ...props 
}, forwardedRef) => {

    return (
        <StyledCell 
            {...props} 
            isHovered={isHovered}
            isFocused={isFocused}
            isPressed={isPressed}
            isSelected={isSelected}
            isDisabled={isDisabled}
            isVisible={isVisible}
            isSelectionStart={isSelectionStart}
            isSelectionEnd={isSelectionEnd}
            isRangeStart={isRangeStart}
            isRangeEnd={isRangeEnd}
            ref={forwardedRef} 
        >
            {children}
        </StyledCell>
    );
});

export const HeaderText = styled('span', {
    fontSize: '$1',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    color: 'inherit',
    bc: 'transparent',
});

export const StyledHeader = styled('th', {
    textAlign: 'center',
    m: 0,
    p: '$1',

    border: 'none',
    color: '$accentText',

    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    fontSize: '$1',

    variants: {
        size: {
            1: { fontSize: '$1' },
            2: { fontSize: '$2' },
            3: { fontSize: '$3' },
            4: { fontSize: '$4' },
            5: { fontSize: '$5' },
            6: { fontSize: '$6' },
            7: { fontSize: '$7' }
        },
        isHovered: {
            true: {
                color: '$accentText'
            },
            false: {
                color: '$accentText'
            }
        },
        isFocused: {
            true: {
                color: '$accentText'
            }
        },
        isPressed: {
            true: {
                color: '$accentTextContrast'
            }
        },
        isDisabled: {
            true: {
                color: '$disabledText'
            }
        },
        isVisible: {
            true: { 
                visibility: 'visible' 
            },
            false: { 
                visibility: 'hidden' 
            } 
        }
    },
    defaultVariants: {
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isDisabled: false,
        isVisible: true
    }
})

export const Cell = ForwardedCell
export const HeaderCell = StyledHeader
export const Container = StyledContainer

