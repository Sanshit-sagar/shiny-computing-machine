import { ReactNode, RefObject } from 'react'

import { ControllableState } from '@/interfaces/Shared' 
import type { Placement } from './Placements'


export interface OverlayProps {
    title?: string; 
    subtitle?: string; 
    offset?: number;
    crossOffset?: number; 
    placement?: Placement; 
    isDismissable?: boolean; 
    isKeyboardDismissDisabled?: boolean;
    shouldFlip?: boolean;
    shouldCloseOnBlur?: boolean;
    shouldUpdatePosition?: boolean;
    shouldCloseOnInteractOutside?: (element: HTMLElement) => boolean;
    children: ReactNode;  
}

export interface OverlayState {
    isOpen: boolean;
    open: () => void; 
    close: () => void;
    toggle: () => void;  
}

export type ControllableOverlayState = ControllableState<boolean, 'open'>

export type IOverlayContext = Omit<OverlayProps, 'children'> & {
    state: OverlayState; 
    mergedOverlayProps?: any;
    overlayRef?: RefObject<HTMLElement>; 
    mergedTriggerProps?: any;
    triggerRef?: RefObject<HTMLElement>;
}



// 
// interface OverlayProps {
    // isOpen: boolean;
    // onClose: () => void;
    // isDismissable: boolean;
    // shouldCloseOnBlur: boolean;
    // isKeyboardDismissDisabled: boolean;
    // shouldCloseOnInteractOutside: (element: Element) => boolean;
// }
// 
// interface AriaPositionProps {
    // targetRef: RefObject<HTMLElement>;
    // overlayRef: RefObject<HTMLElement>;     
    // boundaryElement: HTMLElement;           // document.body 
    // scrollRef: RefObject<HTMLElement>;      // overlayRef
    // shouldUpdatePosition: boolean;          // true 
    // onClose?: () => void;
    // placement: Placement;                   // bottom 
    // containerPadding: number;               // 12
    // offset: number;                         // 0
    // crossOffset: number;                    // 0
    // shouldFlip: boolean;                    // true
    // isOpen: boolean; 
// }

// interface PositionAria {
    // overlayProps: HTMLAttributes<Element>;
    // arrowProps: HTMLAttributes<Element>;
    // placement: PlacementAxis;
    // updatePosition: () => void;
// }