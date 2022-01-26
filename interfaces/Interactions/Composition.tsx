import { CompositionEventHandler, HTMLAttributes } from 'react'

export interface CompositionEvents {
    onCompositionStart?: CompositionEventHandler<HTMLInputElement>;
    onCompositionEnd?: CompositionEventHandler<HTMLInputElement>;
    onCompositionUpdate?: CompositionEventHandler<HTMLInputElement>;
}

export interface CompositionProps extends CompositionEvents {}

export interface CompositionResult {
    compositionProps: HTMLAttributes<HTMLElement>;
}
