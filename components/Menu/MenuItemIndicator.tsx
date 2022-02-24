import { forwardRef, ReactNode, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { styled, CSS } from 'stitches.config'

type MenuItemIndicatorProps = {
    children: ReactNode;
    css?: CSS; 
    element?: ElementType<any>; 
}

const DEFAULT_TAG = 'span' 

type IndicatorElement = ElementRef<typeof DEFAULT_TAG>
type IndicatorProps = Omit<ComponentPropsWithoutRef<typeof DEFAULT_TAG>, keyof MenuItemIndicatorProps> & MenuItemIndicatorProps

export const MenuItemIndicator = forwardRef<IndicatorElement, IndicatorProps>(
    ({ children, element: Component = DEFAULT_TAG, ...props }: MenuItemIndicatorProps) => {

    return (
        <StyledIndicator as={Component} {...props}>
            {children} 
        </StyledIndicator>
    )
})

MenuItemIndicator.displayName = 'MenuItemIndicator'


const StyledIndicator = styled(DEFAULT_TAG, {
    position: 'absolute',
    left: 0,
    width: 25,

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
})