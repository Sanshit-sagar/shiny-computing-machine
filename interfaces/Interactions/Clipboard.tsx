import { ClipboardEventHandler, HTMLAttributes } from 'react' 

export interface ClipboardEvents {
    onCopy?: ClipboardEventHandler<HTMLInputElement>;
    onCut?: ClipboardEventHandler<HTMLInputElement>;
    onPaste?: ClipboardEventHandler<HTMLInputElement>;
}

export interface ClipboardProps extends ClipboardEvents {}

export interface ClipboardResult {
    clipboardProps: HTMLAttributes<HTMLElement>;
}
