import { ElementRef, ReactNode, RefObject, ComponentPropsWithRef } from 'react' 
import { VariantProps, CSS } from 'stitches.config' 

import { StyledOverlay } from './styles'
import { DEFAULT_TAG, widthMap, heightMap } from './constants'
import type { TouchOrMouseEvent } from './hooks/types'

type MergeProps<A,B = {}> = Omit<A, keyof B> & B 

type OverlayElement = ElementRef<typeof DEFAULT_TAG>

interface OverlayVariantProps {
    width: keyof typeof widthMap;
    height: keyof typeof heightMap; 
    maxHeight: keyof Omit<typeof heightMap, 'auto' | 'initial'>;
    visibility: 'visible' | 'hidden';
    anchorSide: VariantProps<typeof StyledOverlay>['anchorSide'];
}

type OverlaySettings = {
    ignoreClickRefs?: RefObject<HTMLElement>[];
    initialFocusRef?: RefObject<HTMLElement>;
    returnFocusRef?: RefObject<HTMLElement>;
    onEscape: (event: KeyboardEvent) => void;
    onClickOutside: (event: TouchOrMouseEvent) => void;
    preventFocusOnOpen?: boolean;
}

interface OverlayOwnProps {
    css?: CSS;
    children?: ReactNode; 
}

interface _OverlayProps extends OverlayOwnProps, OverlaySettings, OverlayVariantProps {
    portalContainerName?: string;
    'data-test-id': unknown;
    top?: number; 
    left?: number; 
    role?: AriaRole;
}

type OverlayProps = MergeProps<ComponentPropsWithRef<typeof DEFAULT_TAG>, _OverlayProps>


export type {
    OverlayProps,
    OverlayElement,
    OverlaySettings
}