import React, { ComponentProps } from 'react'
import { styled, VariantProps, CSS } from '../../stitches.config'
import { primaryVariant, outlinedVariant } from '@/components/Button/variants'

export const Controls = styled('div', {
    height: 'fit-content',
    width: '100%',

    d: 'inline-flex', 
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: 0,

    p: 0,
    m: '$2',

    border: 0,
    outline: 0
});

export const Title = styled('div', {
    display: 'flex',
    width: '100%',
    border: 'none',
});

export const CellWrapper = styled('td', {
    margin: 0,
    padding: 0,
    bc: 'transparent',
    border: 'none',
    outline: 'none'
});

const CalendarWrapper = styled('div', {
    height: '300px',
    d: 'flex', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch', 
    m: 0, 
    p: 0 ,
    br: '$3',
    p: '$2',
    m: 0,
    border: '1px solid $accentBorder',
    outline: 'none',

    variants: {
        theme: {
            primary: {
                ...primaryVariant,
                bc: '$accentBase',
                '&:hover': {
                    bc: '$accentBase'
                }
            },
            outlined: outlinedVariant,
        }
    },
    defaultVariants: {
        theme: 'primary'
    }
})

type CalendarChildProps =  { children: React.ReactNode; }
type CalendarCssProps = { css?: CSS; }
type CalendarOwnProps = ComponentProps<typeof CalendarWrapper>
type CalendarWrapperProps = CalendarOwnProps & CalendarChildProps & CalendarCssProps

const ForwardedCalendarWrapper = React.forwardRef<
    HTMLDivElement,
    CalendarContainerProps
>(({ children, ...otherProps }, forwardedRef) => (
    <CalendarWrapper ref={forwardedRef} {...otherProps}>
        {children}
    </CalendarWrapper>
));

export const CalendarContainer = (props) => {
    let { children, ref, ...rest } = props

    return (
        <CalendarWrapper forwardedRef={ref} {...rest}>
            {children}
        </CalendarWrapper>
    ); 
}

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

    color: '$light1',
    border: '1px solid transparent',

    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',

    variants: {
        isHovered: {
            true: {
                br: '50%',
                width: '36px',
                height: '36px',
                aspectRatio: '1',
                bc: '$light1',
                color: '$dark1',
                cursor: 'pointer'
            },
            false: null,
        },
        isFocused: {
            true: {
                bc: '$accentBgActive', 
                color: '$accentTextContrast',
                borderColor: '1px solid $accentFocusRing',
                cursor: 'grabbing'
            },
            false: null,
        },
        isPressed: {
            true: {
                bc: '$accentSolid', 
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
                visibility: 'hidden'
            } 
        },
        isToday: {
            true: {
                br: '50%',
                width: '36px',
                height: '36px',
                aspectRation: '1',
                border: '1px solid $accentTextContrast',
                color: '$accentTextContrast',
                bc: '$accentSolidActive'
            }
        },
        isSelected: {
            true: {
                bc: '$accentLine',
                color: '$accentTextContrast',
                border: '0',
            },
            false: null
        },
        isSelectionStart: {
            true: {
                bc: '$accentLine',
                color: '$accentTextContrast',
                border: '0',
                btlr: '$2',
                bblr: '$2',
                borderLeft: '4px solid $accentBorder',
            },
            false: null
        },
        isSelectionEnd: {
            true: {
                bc: '$accentLine',
                color: '$accentTextContrast',
                border: '0',
                btrr: '$2',
                bbrr: '$2',
                borderRight: '4px solid $accentBorder',
            },
            false: null
        },
        isRangeStart: {
            true: {
                color: '$disabledText',
                btlr: '$2',
                bblr: '$2',
            },
            false: null
        },
        isRangeEnd: {
            true: {
                color: '$disabledText',
                btrr: '$2',
                bbrr: '$2'
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
            true: { borderLeft: 'none' }
        },
        isLastDayOfWeek: {
            true: { borderRight: 'none' }
        }
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
            isHovered: true,
            isRangeStart: true,
            css: {

            }
        },
        {
            isSelected: true,
            isSelectionStart: false,
            isSelectionEnd: false,
            css: {
                br: 0
            }
        },
        {
            isHovered: true,
            isSelected: true,
            css: {
                br: '50%',
                width: '36px',
                height: '36px',
                aspectRation: '1',
                bc: '$light1'
            }
        },
        {
            isHovered: true,
            isSelectionStart: true,
            css: {
                width: '36px',
                height: '36px',
                aspectRation: '1',
                bc: '$light1'
            }
        }
    ],
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

