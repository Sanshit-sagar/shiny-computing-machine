import { ReactEventHandler } from 'react'

export interface SelectEvents {
    onSelect?: ReactEventHandler<HTMLInputElement>;
}