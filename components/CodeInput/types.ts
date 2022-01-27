import { ReactNode, ComponentPropsWithRef } from 'react' 

export type MutableSelectionState = [number, number]
export type SelectionState = Readonly<MutableSelectionState>

export interface ICodeInputContext {
    length: number;
    selection: SelectionState;
}

export type SegmentStateValue = 'cursor' | 'selected' | null
export type SegmentPositionValue = -1 | 0 | 1

export type SegmentProps = {
    index: number;
    state: SegmentStateValue;
    position: SegmentPositionValue;
    selection: SelectionState;
}

export type RenderSegmentFn = (segmentProps: SegmentProps) => ReactNode;



export type CodeInputFieldProps = Omit<ComponentPropsWithRef<'input'>, 'maxLength' | 'children' | 'style'> & {
    error?: boolean;
    success?: boolean;
}