
import { ReactNode, RefObject } from 'react';
import { AriaLabelingProps } from '@/interfaces/Aria';
import { Orientation } from '@/interfaces/Shared';

export type ColorChannel =  'hue' | 'saturation' | 'brightness' | 'lightness' | 'red' | 'blue' | 'green' |  'alpha'; 
export type ColorFormat = 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsb' | 'hsba';

export type ColorChannelRange = {
    minValue: number;
    maxValue: number;
    step: number;
};

export type Color = {
    toFormat: (format: ColorFormat) => Color;
    toHexInt: () => number;
    getChannelValue: (channel: ColorChannel) => number;
    withChannelValue: (channel: ColorChannel, value: number) => Color;
    getChannelRange: (channel: ColorChannel) => ColorChannelRange; 
    getChannelName: (channel: ColorChannel, locale: string) => string;
    formatChannelValue: (channel: ColorChannel, locale: string) => string; 
}

export interface ColorSliderStateOptions extends AriaLabelingProps {
    locale: ''
    channel: ColorChannel;
    onChange: (value: Color) => void;
    onChangeEnd: (value: Color) => void;
    orientation: Orientation;               // def = 'horizontal
    isDisabled: boolean;
    step: number;                           // def = 1
    value: string | Color;
    defaultValue: string | Color;
    label: ReactNode;
    id: string; 
 }

 export interface ColorSliderAriaOptions extends Exclude<ColorSliderStateOptions, 'locale'> {
     trackRef: RefObject<HTMLElement>;
     inputRef: RefObject<HTMLInputElement>;
 }
 
 export interface ColorSliderState {
     value: Color;
     values: number[];
     focusedThumb: number | undefined;
     step: number;
     setValue: (value: string | Color) => void;
     getDisplayColor: () => Color;
     getThumbValue: (index: number) => number;
     setThumbValue:  (index: number, value: number) => void;
     setThumbPercent: (index: number, percent: number) => void;
     isThumbDragging: (index: number) => boolean;
     setThumbDragging:  (index: number, dragging: boolean) => void;
     setFocusedThumb: (index: number | undefined) => void;
     getThumbPercent: (index: number) => number;
     getValuePercent: (index: number) => number;
     getThumbValueLabel: (index: number) => string;
     getFormattedValue: (index: number) => string;
     getThumbMinValue:  (index: number) => number;
     getThumbMaxValue: (index: number) => number;
     getPercentValue: (index: number) => number;
     isThumbEditable: (index: number) => boolean;
     setThumbEditable: (index: number, editable: boolean) => void; 
 }