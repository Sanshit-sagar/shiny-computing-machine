import React, { useRef, useMemo, MutableRefObject } from 'react'
import { styled } from 'stitches.config'

import { NumberParser } from '@internationalized/number'
import { DatePickerBase, DateValue } from '@react-types/datepicker'

import { useLocale } from '@react-aria/i18n'
import { usePress } from '@react-aria/interactions'
import { useFocusManager } from '@react-aria/focus'
import { useDateSegment } from '@react-aria/datepicker'
import { DatePickerFieldState, DateSegment } from '@react-stately/datepicker'

import { PressEvent } from '@/interfaces/Interactions'

interface SegmentProps extends DatePickerBase<DateValue> {
    segment: DateSegment;
    state: DatePickerFieldState;
};

interface LiteralSegmentProps {
    segment: DateSegment; 
}

const StyledEditableSegment = styled('div', {
    bc: 'transparent',
    fontSize: '13px',
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    color: '$accentTextContrast',
    padding: '$2'
})

const StyledLiteralSegment = styled('span', {
    bc: '$accentBg',
    fontSize: '13px',
    fontVariant: 'tabular',
    color: '$accentTextContrast',
    verticalAlign: 'middle',
    margin: 0,
    padding: 0
})

export function DatePickerSegment({segment, state, ...rest }: SegmentProps) {
    switch (segment.type) {
        case 'literal': 
            return <LiteralSegment segment={segment} /> 
        default:  
            return <EditableSegment segment={segment} state={state} {...rest} />
    }
}


const LiteralSegment = ({ segment }: LiteralSegmentProps) => {
    const focusManager = useFocusManager();
    const { pressProps } = usePress({
        onPressStart: (event: PressEvent) => {
            if (event.pointerType === 'mouse') {
                const res = focusManager.focusNext({ 
                    from: event.target as HTMLElement 
                })
                if (!res) focusManager.focusPrevious({ 
                    from: event.target as HTMLElement 
                })
            }
        }
    })

    return (
        <StyledLiteralSegment 
            {...pressProps} 
            aria-hidden="true"  
            data-testid={segment.type === 'literal' ? undefined : segment.type}
        >
            {segment.text}
        </StyledLiteralSegment>
    );
}

const EditableSegment = ({ segment, state, ...otherProps }: SegmentProps) => {

    const ref = useRef<HTMLDivElement>()

    const { segmentProps } = useDateSegment(otherProps, segment, state, ref)
    const { locale } = useLocale()
    const parser = useMemo(() => new NumberParser(locale), [locale])
    const isNumeric = useMemo(() => parser.isValidPartialNumber(segment.text), [segment.text, parser])

    return (
        <StyledEditableSegment
            ref={ref}
            css={{
                minWidth: !isNumeric ? null : String(segment.maxValue).length + 'ch',
            }}
            data-testid={segment.type}
            {...segmentProps}
        >
            {segment.isPlaceholder ? '' : segment.text}
        </StyledEditableSegment>
    )
}
