import { CSS } from '../../stitches.config'
import { ReactNode, RefObject, ElementType } from 'react' 

type Placement = 'bottom'
| 'bottom left'
| 'bottom right'
| 'bottom start'
| 'bottom end'
| 'top'
| 'top left'
| 'top right'
| 'top start'
| 'top end'
| 'left'
| 'left top'
| 'left bottom'
| 'start'
| 'start top'
| 'start bottom'
| 'right'
| 'right top'
| 'right bottom'
| 'end'
| 'end top'
| 'end bottom'

export interface AriaPositionProps {
    targetRef: RefObject<HTMLElement>;
    overlayRef: RefObject<HTMLElement>;
    boundaryElement?: HTMLElement; // document.body 
    scrollRef?: RefObject<HTMLElement>; 
    shouldUpdatePosition?: boolean;
    onClose?: () => void;   // 
    placement?: Placement; // 'bottom'
    containerPadding?: number; // def = 12
    offset?: number; // 0
    crossOffset?: number; // 0
    shouldFlip?: boolean; // true
    isOpen?: boolean; 
}

export interface OverlayTriggerProps {
    elementType?: ElementType;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void; 
    children: ReactNode;
}


export interface PopoverProps {
    title?: string;
    children: ReactNode | string;
    isOpen: boolean;
    onClose: () => void;
    css?: CSS; 
}


export interface PopoverState {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void; 
}

export interface OverlayProps {
    children: ReactNode;
    css?: CSS; 
}