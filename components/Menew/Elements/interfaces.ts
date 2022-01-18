import { ReactElement, ReactNode } from 'react'
import { Alignment } from '@react-types/shared'
import { OverlayTriggerProps } from '@react-types/overlays'

type Direction = 'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'

export interface MenuTriggerProps extends OverlayTriggerProps {
    alignment?: Alignment;
    direction?: Direction;
    closeOnSelect?: boolean;
    shouldFlip?: boolean;  
    children: ReactElement[] | ReactNode | ReactElement | ReactNode[]; 
}



