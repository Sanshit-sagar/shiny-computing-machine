import { ReactNode } from 'react'
import { PressEvent } from '@/interfaces/Event'
import { PressEvents } from '@/interfaces/Events'
import { AriaLabelingProps } from '@/interfaces/Aria'

export type ReferrerPolicyType = 'no-referrer' 
    | 'no-referrer-when-downgrade' 
    | 'origin' 
    | 'origin-when-cross-origin' 
    | 'same-origin' 
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'

export interface AriaLinkOptions extends AriaLabelingProps {
    isDisabled?: boolean;
    elementType?: string;  // default = 'a'
    href?: string;
    target?: string;
    children?: string | React.ReactNode;
}

export interface LinkState {
    id: string; 
    href: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    referrerPolicy?: ReferrerPolicyType;
    elementType?: 'a' | 'span';
    disabled?: boolean;
    children: ReactNode; 
}

export type LinkInstanceProps = {
    state: LinkState;
    update: (key: keyof LinkState, value: LinkState[keyof LinkState]) => void; 
}; 