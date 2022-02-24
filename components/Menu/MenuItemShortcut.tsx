import { forwardRef, ReactNode, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { styled, CSS } from 'stitches.config'

type MenuItemShortcutProps = {
    children: ReactNode;
    css?: CSS; 
    element?: ElementType<any>; 
}

const DEFAULT_TAG = 'kbd' 

type ShortcutElement = ElementRef<typeof DEFAULT_TAG>
type ShortcutProps = Omit<ComponentPropsWithoutRef<typeof DEFAULT_TAG>, keyof MenuItemShortcutProps> & MenuItemShortcutProps

export const MenuItemShortcut = forwardRef<ShortcutElement, ShortcutProps>(
    ({ children, element: Component = 'kbd', ...props }: MenuItemShortcutProps) => {

    return (
        <StyledShortcut as={Component} {...props}>
            {children} 
        </StyledShortcut>
    )
})

MenuItemShortcut.displayName = 'MenuItemShortcut'


const StyledShortcut = styled('kbd', {
    marginLeft: 'auto', 
    paddingLeft: 20
})