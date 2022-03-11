import { useEffect, useCallback, RefObject, HTMLAttributes, KeyboardEvent } from 'react'
import { useSSRSafeId } from '@react-aria/ssr'
import { PositionSettings } from '@primer/behaviors'
import type { AnchorSide, AnchorAlignment } from '@primer/behaviors'

import type { OverlayProps } from './types'
import type { FocusZoneHookSettings } from './hooks/useFocusZone'
import type { FocusTrapHookSettings } from './hooks/useFocusTrap'
import { useProvidedRefOrCreate, useRenderForcingRef } from '@/hooks/useRef'

import { useFocusZone } from './hooks/useFocusZone'
import { useFocusTrap } from './hooks/useFocusTrap'
import { useAnchoredPosition } from './hooks/useAnchoredPosition'
 
import { Overlay } from './Overlay' 

interface AnchoredOverlayPropsWithAnchor {
    renderAnchor: <T extends HTMLAttributes<HTMLElement>>(props: T) => JSX.Element;
    anchorRef?: RefObject<HTMLElement>;
    anchorId?: string;
}

interface AnchoredOverlayPropsWithoutAnchor {
    renderAnchor: null;
    anchorRef: RefObject<HTMLElement>;
    anchorId?: string;
} 

type AnchoredOverlayWrapperAnchorProps = Partial<AnchoredOverlayPropsWithAnchor> | AnchoredOverlayPropsWithoutAnchor

interface AnchoredOverlayBaseProps extends Pick<OverlayProps, 'height' | 'width'> {
    open: boolean;
    onOpen?: (gesture: 'anchor-click' | 'anchor-key-press', event?: KeyboardEvent<HTMLElement>) => unknown
    onClose?: (gesture: 'anchor-click' | 'click-outside' | 'escape') => unknown;
    overlayProps?: Partial<OverlayProps>;
    focusTrapSettings?: Partial<FocusTrapHookSettings>;
    focusZoneSettings?: Partial<FocusZoneHookSettings>;
}

export type AnchoredOverlayProps = AnchoredOverlayBaseProps & (
    AnchoredOverlayPropsWithAnchor | 
    AnchoredOverlayPropsWithoutAnchor
) & Partial<Pick<PositionSettings, 'align' | 'side'>>

const DEFAULT_SIDE: AnchorSide = 'outside-bottom' as unknown as AnchorSide
const DEFAULT_ALIGN: AnchorAlignment = 'start' as unknown as AnchorAlignment

const AnchoredOverlay = ({
    renderAnchor,
    anchorRef: externalAnchorRef,
    anchorId: externalAnchorId,
    open,
    onOpen,
    onClose,
    height,
    width,
    overlayProps,
    focusTrapSettings,
    focusZoneSettings,
    side = DEFAULT_SIDE,
    align = DEFAULT_ALIGN,
    children
}) => {

    const anchorRef = useProvidedRefOrCreate<HTMLElement>(externalAnchorRef)
    const [overlayRef, updateOverlayRef] = useRenderForcingRef<HTMLDivElement>()
    const anchorId = useSSRSafeId(externalAnchorId)

    const onClickOutside = useCallback(() => onClose?.('click-outside'), [onClose])
    const onEscape = useCallback(() => onClose?.('escape'), [onClose])

    const onAnchorKeyDown = useCallback((event: KeyboardEvent<HTMLElement>) => {
        if (!event.defaultPrevented) {
            if (!open && ['ArrowDown', 'ArrowUp', ' ', 'Enter'].includes(event.key)) {
                onOpen?.('anchor-key-press', event)
                event.preventDefault()
            }
        }
    }, [open, onOpen])

    const onAnchorClick = useCallback((event: KeyboardEvent<HTMLElement>) => {
        if (event.defaultPrevented || event?.button !== 0) return
        
        if (!open) { 
            onOpen?.('anchor-click') 
        } else { 
            onClose?.('anchor-click') 
        }
    }, [open, onOpen, onClose])

    const { position } = useAnchoredPosition({ 
        anchorElementRef: anchorRef,
        floatingElementRef: overlayRef, 
        side, 
        align 
    }, [overlayRef.current])

    useEffect(() => {
        if(!open && overlayRef.current) {
            updateOverlayRef(null)
        }
    }, [open, overlayRef, updateOverlayRef])

   
    useFocusZone({
        containerRef: overlayRef,
        disabled: !open || !position,
        ...focusZoneSettings
    })

    useFocusTrap({
        containerRef: overlayRef, 
        disabled: !open || !position, 
        ...focusTrapSettings
    })

    return (
        <>
            {renderAnchor && (
                renderAnchor({
                    ref: anchorRef,
                    id: anchorId,
                    'aria-haspopup': 'true',
                    'aria-expanded': open,
                    tabIndex: 0,
                    onClick: onAnchorClick,
                    onKeyDown: onAnchorKeyDown
                })
            )}
            {open && (
                <Overlay
                    returnFocusRef={anchorRef}
                    onClickOutside={onClickOutside}
                    ignoreClickRefs={[anchorRef]}
                    onEscape={onEscape}
                    ref={updateOverlayRef}
                    role="none"
                    visibility={position ? 'visible' : 'hidden'}
                    height={height}
                    width={width}
                    top={position?.top || 0}
                    left={position?.left || 0}
                    anchorSide={position?.anchorSide}
                    {...overlayProps}
                >
                    {children}
                </Overlay>
            )}
        </>
    )
}

AnchoredOverlay.displayName = 'AnchoredOverlay'

export { 
    AnchoredOverlay
}

export type {
    AnchoredOverlayPropsWithAnchor,
    AnchoredOverlayPropsWithoutAnchor,
    AnchoredOverlayWrapperAnchorProps,
    AnchoredOverlayBaseProps
}