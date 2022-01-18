import React, { ReactNode, RefObject, HTMLAttributes } from 'react'

import { KeyboardEvents, FocusEvents } from '@/interfaces/Events'
import { IntlNumberFormatOptions } from '@/interfaces/IntlNumberFormat'
import { AriaLabelingProps, AriaValidationProps } from '@/interfaces/Aria'
import { 
    DOMProps,  
    Orientation, 
    ValidationState,
    ControllableState
} from '@/interfaces/Shared'

type SliderValue =  ControllableState<number[], 'value'>

export interface SliderProps extends DOMProps, AriaLabelingProps {
    label?: string; 
    step?: number; 
    value?: number[];
    defaultValue?: number[];
    minValue?: number;
    maxValue?: number;
    orientation?: Orientation;
    onChange?: (value: number[]) => void; 
    onChangeEnd?: (value: number[]) => void;
    validationState?: ValidationState;
    formatOptions?: Intl.NumberFormatOptions;
    disabled?: boolean; 
    children?: ReactNode; 
}

export interface SliderState {
    values: number[];
    focusedThumb: number | undefined;
    step: number;
    getThumbValue: (index: number) => number;
    setThumbValue: (index: number, value: number) => void;
    setThumbPercent: (index: number, percent: number) => void;
    isThumbDragging: (index: number) => boolean;
    setThumbDragging: (index: number, isDragging: boolean) => void;
    setFocusedThumb: (index: number | undefined) => void;
    getThumbPercent: (index: number) => number;
    getValuePercent: (index: number) => number;
    getThumbValueLabel: (index: number) => string;
    getFormattedValue: (index: number) => string;
    getThumbMinValue: (index: number) => number;
    getThumbMaxValue: (index: number) => number;
    getPercentValue: (percent: number) => number; 
    isThumbEditable: (index: number) => boolean;
    setThumbEditable: (index: number, editable: boolean) => void; 
}

export interface AriaSliderState extends SliderState {}


export interface SliderThumbProps {
    index?: number; 
    children?: ReactNode; 
}

export interface ISliderContext {
    state: SliderState;
    trackRef: RefObject<HTMLElement>;
    trackProps: HTMLAttributes<HTMLElement>; 
    disabled: boolean; 
    isHovered: boolean;
    isFocused: boolean;
}

export type ThumbValueMutatorType = (key: keyof SliderProps,  value: number[]) => void;
export type MutateStateFromMenuAtionProps<T> = {
    state: T; 
    update: ThumbValueMutatorType;
    value: Set<React.Key> | 'all' 
}
