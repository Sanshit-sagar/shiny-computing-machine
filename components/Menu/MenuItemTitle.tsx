import { forwardRef, ReactNode, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { styled, CSS } from 'stitches.config'

type MenuItemTitleProps = {
    children: ReactNode;
    css?: CSS; 
    element?: ElementType<any>; 
}

const DEFAULT_TAG = 'div' 

type TitleElement = ElementRef<typeof DEFAULT_TAG>
type TitleProps = Omit<ComponentPropsWithoutRef<typeof DEFAULT_TAG>, keyof MenuItemTitleProps> & MenuItemTitleProps

export const MenuItemTitle = forwardRef<TitleElement, TitleProps>(
    ({ children, element: Component = 'div', ...props }: MenuItemTitleProps) => {

    return (
        <StyledTitle as={Component} {...props}>
            {children} 
        </StyledTitle>
    )
})

MenuItemTitle.displayName = 'MenuItemTitle'


const StyledTitle = styled('div', {


})