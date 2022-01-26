import { FormEventHandler, HTMLAttributes } from 'react' 

export interface FormProps {
    onInput?: FormEventHandler<HTMLInputElement>;
    onBeforeInput?: FormEventHandler<HTMLInputElement>;
}

export interface FormEvents extends FormProps {}

export interface FormResult {
    formProps: HTMLAttributes<HTMLElement>;
}