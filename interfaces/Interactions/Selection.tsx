import { ReactEventHandler } from 'react'

export interface SelectionEvents {
    onSelect?: ReactEventHandler<HTMLInputElement>;
}