import React, { useRef, useMemo, MutableRefObject } from 'react';
import { styled } from 'stitches.config'

import { NumberParser } from '@internationalized/number'
import { DatePickerBase, DateValue } from '@react-types/datepicker';

import { useLocale } from '@react-aria/i18n'
import { usePress } from '@react-aria/interactions'
import { useFocusManager } from '@react-aria/focus'
import { useDateSegment } from '@react-aria/datepicker'
import { DatePickerFieldState, DateSegment } from '@react-stately/datepicker';

interface SegmentProps extends DatePickerBase<DateValue> {
    segment: DateSegment;
    state: DatePickerFieldState;
};

interface LiteralSegmentProps {
    segment: DateSegment; 
}

const StyledSegment = styled('div', {
    bc: '$accentBg',
    border: '1px solid $accentBg',
    fontSize: '13px',
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    p: '$1',
    m: 0,
    br: '$2',
    width: 'fit-content',
    height: 'fit-content',
    color: '$accentTextContrast'
})

export function DatePickerSegment({segment, state, ...otherProps}: SegmentProps) {
    return (segment.type === 'literal') 
        ? <LiteralSegment segment={segment} /> 
        : <EditableSegment segment={segment} state={state} {...otherProps} />;

}


const LiteralSegment = ({ segment }: LiteralSegmentProps) => {
    const focusManager = useFocusManager();
    const { pressProps } = usePress({
        onPressStart: (e) => {
            if (e.pointerType === 'mouse') {
                const res = focusManager.focusNext({ 
                    from: e.target as HTMLElement 
                })
                if (!res) focusManager.focusPrevious({ 
                    from: e.target as HTMLElement 
                })
            }
        }
    });

    return (
        <span 
            {...pressProps} 
            aria-hidden="true"  
            data-testid={segment.type === 'literal' ? undefined : segment.type}
        >
            {segment.text}
        </span>
    );
}

const EditableSegment = ({ segment, state,  ...otherProps}: SegmentProps) => {

    const ref: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>()

    const { segmentProps } = useDateSegment(otherProps, segment, state, ref)
    const { locale } = useLocale()
    const parser = useMemo(() => new NumberParser(locale), [locale]); 
    const isNumeric = useMemo(() => parser.isValidPartialNumber(segment.text), [segment.text, parser]);

    return (
        <StyledSegment
            {...segmentProps}
            ref={ref}
            data-testid={segment.type}
            css={{
                minWidth: !isNumeric ? null : String(segment.maxValue).length + 'ch',
            }}
        >
            {segment.isPlaceholder ? '' : segment.text}
        </StyledSegment>
    )
}
