import { ReactNode } from 'react'

// import { SwitchProps } from '@/components/Switch/interfaces'
// import { SliderProps } from '@/components/Slider/interfaces'
// import { ButtonProps } from '@/components/Button/interfaces'
// import type { TextFieldProps } from '@/components/Input/interfaces'
// import type { NumberFieldProps } from '@/components/NumberField/interfaces'
// import { SelectState, SelectableSection } from '@/components/Select/interfaces'

export enum ControlInputEnum {
    MENU = 'menu',
    INPUT = 'input',
    BUTTON = 'button',
    SWITCH = 'switch',
    SELECT = 'select',
    SLIDER = 'slider',
    TOGGLES = 'toggles'
 };

// export type SliderControlProps      =   Partial<SliderProps> & { type: ControlInputEnum.SLIDER };
// export type SwitchControlProps      =   Partial<SwitchProps> & { type: ControlInputEnum.SWITCH };
// export type ButtonControlProps      =   Partial<ButtonProps> & { type: ControlInputEnum.BUTTON };
// export type TextInputControlProps   =   Partial<TextFieldProps> & { type: ControlInputEnum.INPUT };
// export type NumberInputControlProps =   Partial<NumberFieldProps> & { type: ControlInputEnum.INPUT };
// export type SelectControlProps      =   Partial<SelectState<SelectableSection>> & { type: ControlInputEnum.SELECT };
// export type InputTypeControlProps   =   TextInputControlProps | NumberInputControlProps

// export type ControlType = SliderControlProps 
//                     |   SwitchControlProps 
//                     |   SelectControlProps
//                     |   ButtonControlProps  
//                     |   TextInputControlProps 
//                     |   NumberInputControlProps;

 
// export interface ControllerProps {
//      controls: ControlType[]; 
// };

// export type ControlPanelProps = (
//     | SliderControlProps 
//     | SwitchControlProps 
//     | SelectControlProps 
//     | TextInputControlProps 
//     | NumberInputControlProps
// )[];


export interface ExampleContainerProps {
    icon: ReactNode;
    heading: string;
    description: string;
    component: ReactNode;
    controls: any;
    state?: any;
};
