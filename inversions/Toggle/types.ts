import React from 'react'
import { ControllableState } from '@/interfaces/Shared'

type ToggleableSubState = {
    onToggle: () => void; 
}
export type ComposableComponentProps = { 
    children: React.ReactNode; 
}

export type SelectableState = ControllableState<boolean, 'selected'>  
export type ToggleableState = SelectableState & ToggleableSubState
export type ToggleProps = ControllableState<boolean, 'selected'> & ComposableComponentProps

export interface IToggleContext extends SelectableState, ToggleableSubState {}