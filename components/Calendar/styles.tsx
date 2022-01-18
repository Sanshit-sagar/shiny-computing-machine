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

    p: '$2',
    m: 0,

    border: 0,
    outline: 0
});

export const Title = styled('div', {
    display: 'flex',
    width: '100%',
    border: 'none',

    variants: {

    }
});

export const CellWrapper = styled('td', {
    margin: 0,
    padding: 0,
    bc: 'transparent',
    border: 'none',
    outline: 'none'
});

const StyledContainer = styled('div', {
    height: 400,
    d: 'flex', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch', 
    m: 0, 
    p: 0 
})

const CalendarWrapper = styled('div', {
    border: '0',
    outline: 'none',

    br: 0,
    btrr: '$5',
    p: 0,
    m: 0
}); 

const ForwardedCalendarWrapper = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof CalendarWrapper> & { children: React.ReactNode; }
>(({ children, ...otherProps }, forwardedRef) => (
    <CalendarWrapper ref={forwardedRef} {...otherProps}>
        {children}
    </CalendarWrapper>
));

export const CalendarContainer = (props) => {
    let { children, ref, ...otherProps } = props

    return (
        <StyledContainer>
            <CalendarWrapper forwardedRef={ref} {...otherProps}>
                {children}
            </CalendarWrapper>
        </StyledContainer>
    ); 
}

export const StyledCell = styled('span', {
    appearance: 'none',
    userSelect: 'none',

    d: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',
    mx: 0,
    my: '$1',
    p: '1px',

    color: '$light1',
    border: '1px solid transparent',

    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    variants: {
        padding: {
            '1': { p: '8px' },
            '2': { p: '10px' },
            '3': { p: '12px' },
            '4': { p: '16px' },
            '5': { p: '22px' },
            '6': { p: '28px' },
            '7': { p: '36px' },
            '8': { p: '40px' },
        },
        isHovered: {
            true: {
                borderColor: '$accentTextContrast',
                br: '$2',
                bc: '$accentLine',
                cursor: 'grabbing'
            },
            false: null,
        },
        isFocused: {
            true: {
                bc: '$accentSolidHover', 
                borderColor: 'none',
                color: '$accentTextContrast',
                cursor: 'grabbing'
            },
            false: null,
        },
        isPressed: {
            true: {
                bc: '$accentBgActive', 
                color: '$accentTextContrast',
                cursor: 'grabbing'
            },
            false: null
        },
        isVisible: {
            true: { 
                visibility: 'visible' 
            },
            false: { 
                visibility: 'hidden',
                bc: 'red'
            } 
        },
        isToday: {
            true: {
                border: '1px solid $turq',
                br: 0,
                btrr: '$3',
                bblr: '$2',
                color: '$accentText'
            }
        },
        isSelected: {
            true: {
                bc: '$accentLine',
                color: '$accentTextContrast',
            },
            false: null
        },
        isSelectionStart: {
            true: {
                bc: '$accentSolidActive',
                color: '$accentTextContrast',
                btlr: '$4',
                bblr: '$4'
            },
            false: null
        },
        isSelectionEnd: {
            true: {
                bc: '$accentSolidActive',
                color: '$accentTextContrast',
                btrr: '$4',
                bbrr: '$4'
            },
            false: null
        },
        isRangeStart: {
            true: {
                bc: '$accentBgActive',
                color: '$accentTextContrast',
                borderColor: '$accentBorder'
            },
            false: null
        },
        isRangeEnd: {
            true: {
                bc: '$accentBgActive',
                color: '$accentTextContrast',
                borderColor: '$accentBorder'
            },
            false: null
        },
        isDisabled: {
            true: {
                bc: '$disabledBg', 
                color: '$disabledText',
                cursor: 'not-allowed',
                br: '0',
                mx: '0',
                my: '0',
            },
            false: null
        },
        isFirstDayOfWeek: {
            true: { borderLeft: 'none' }
        },
        isLastDayOfWeek: {
            true: { borderRight: 'none' }
        }
    },
    defaultVariants: {
        padding: '8',
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
    p: 0,
    border: 'none',
   
    p: '$1 $2',
    color: '$accentText',

    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    fontSize: '$2',


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
export const Container = ForwardedCalendarWrapper

