import { ReactNode } from 'react'

export type SizeType = 'sm' | 'md' | 'lg';

export type TagState = {
    isClickable: boolean;
    isDeletable: boolean;
    isEditable: boolean;
    isDisabled: boolean;
    isLoading: boolean; 
    size: SizeType;
    leftIcon?: ReactNode | null;
    rightIcon?: ReactNode | null;
    children: string; 
    handleDelete: () => void; 
};

export type TagStateKeyType = keyof TagState
export type TagStateValueType =  TagState[keyof TagState]

export interface ControllerProps {
    state: TagState; 
    update: (key: TagStateKeyType, value: TagStateValueType) => void;
};
