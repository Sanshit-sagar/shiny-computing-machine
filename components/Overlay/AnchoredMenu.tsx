import React, { createRef, createContext, useContext, useCallback, cloneElement, forwardRef, ReactElement } from 'react' 
import { CSS, VariantProps } from 'stitches.config'

import { useSSRSafeId } from '@react-aria/ssr'
import { AnchoredOverlay } from './AnchoredOverlay'
import { useTypeaheadFocus, useMenuInitialFocus } from './hooks/index'

import { useProvidedRefOrCreate } from '@/hooks/useRef'
import { useProvidedStateOrCreate } from '@/hooks/useState'

import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'

import { Separator } from '@/components/Separator'
import { ActionListContainerContext } from '@/components/ActionList/ActionListContext'

import type { OverlayProps } from './Overlay'
import type { AnchoredOverlayProps } from './AnchoredOverlay'

import { TriangleDownIcon } from '@radix-ui/react-icons' 


type MenuContextProps = Pick<
    AnchoredOverlayProps,
    'anchorRef' | 'renderAnchor' | 'open' | 'onOpen' | 'onClose' | 'anchorId'
>

export type ActionMenuProps = {
    children: ReactElement[] | ReactElement;
    open?: boolean; 
    onOpenChange?: (s: boolean) => void;
} & Pick<AnchoredOverlayProps, 'anchorRef'>


const MenuContext = createContext<MenuContextProps>({
    renderAnchor: null, 
    open: false
})

const Menu = ({ 
    anchorRef: externalAnchorRef,  
    open,
    onOpenChange,
    children
}: ActionMenuProps) => {

    const [combinedOpenState, setCombinedOpenState] = useProvidedStateOrCreate(open, onOpenChange, false)
    const onOpen = useCallback(() => setCombinedOpenState(true), [setCombinedOpenState])
    const onClose = useCallback(() => setCombinedOpenState(false), [setCombinedOpenState])

    const anchorId = useSSRSafeId()
    const anchorRef = useProvidedRefOrCreate(externalAnchorRef)

    let renderAnchor: AnchoredOverlayProps['renderAnchor'] = null

    const contents = React.Children.map(children, child => {
        if (child.type === MenuButton || child.type === Anchor) {
          renderAnchor = anchorProps => React.cloneElement(child, anchorProps)
          return null
        }
        return child
    })

    const contextValue = {
        anchorRef, 
        renderAnchor, 
        anchorId, 
        open: combinedOpenState, 
        onOpen, 
        onClose
    }

    return (
        <MenuContext.Provider value={contextValue}>
            {contents}
        </MenuContext.Provider>
    )
}

type ActionMenuAnchorProps = { children: ReactElement; }
const Anchor = forwardRef<
    AnchoredOverlayProps['anchorRef'], 
    ActionMenuAnchorProps
>(({ children, ...anchorProps }, anchorRef) => {
    return cloneElement(children, { 
        ...anchorProps, 
        ref: anchorRef 
    })
})
 
const MenuButton = forwardRef<AnchoredOverlayProps['anchorRef'], ButtonProps<'button'>>(
    ({ sx: sxProp = {}, ...props }, anchorRef) => {
    
        return (
            <Anchor ref={anchorRef}>
                <Button
                    type="button"
                    trailingIcon={TriangleDownIcon}
                    {...props}
                    css={{ `&[data-component=trailingIcon]`: -1 }}
                >

                </Button>
            </Anchor>
        )
    }
)

type MenuOverlayProps = Partial<OverlayProps> & Pick<AnchoredOverlayProps, 'align'> & {
    children: ReactElement[] | ReactElement;
}
type AnchoredMenuCtxProps = Omit<MenuContextProps, 'anchorRef'> & Required<Pick<MenuContextProps, 'anchorRef'>>

const Overlay = ({ children, align = 'start', ...overlayProps }: MenuOverlayProps) => {

    const { 
        anchorRef, 
        renderAnchor, 
        anchorId, 
        open, 
        onOpen, 
        onClose 
    } = useContext(MenuContext) as AnchoredMenuCtxProps

    const containerRef = createRef<HTMLDivElement>()
    const { openWithFocus } = useMenuInitialFocus(open, onOpen, containerRef)
    useTypeaheadFocus(open, containerRef)

    return (
        <AnchoredOverlay
            anchorRef={anchorRef}
            renderAnchor={renderAnchor}
            anchorId={anchorId}
            open={open}
            onOpen={openWithFocus}
            onClose={onClose}
            align={align}
            overlayProps={overlayProps}
            focusZoneSettings={{ focusOutBehavior: 'wrap' }}
        >
             <div ref={containerRef}>
                <ActionListContainerContext.Provider
                    value={{
                        container: 'ActionMenu',
                        listRole: 'menu',
                        listLabelledBy: anchorId,
                        selectionAttribute: 'aria-checked', // Should this be here?
                        afterSelect: onClose
                    }}
                >
                    {children}
                </ActionListContainerContext.Provider>
             </div>
        </AnchoredOverlay>
    )
}

Menu.displayName = 'ActionMenu'

export const ActionMenu =  Object.assign(Menu, {
    Button: MenuButton, 
    Anchor, 
    Overlay, 
    Separator
})