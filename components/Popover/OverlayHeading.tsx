import { CSS } from 'stitches.config'
import { ReactNode, ElementType, HTMLAttributes } from 'react'

import { StyledOverlayHeading } from './styles'     
import { useOverlayContext } from './utils'

interface OverlayHeadingProps {
    children?: ReactNode;
    element?: ElementType;
    titleProps?: HTMLAttributes<HTMLElement>;
    css?: CSS; 
}      

const OverlayHeading = ({ children, element: Component = 'div', titleProps, css, ...props }: OverlayHeadingProps) => {
    const { title } = useOverlayContext()

    return (
        <Component {...props}>
            <StyledOverlayHeading {...titleProps} color="accent" css={{ ...css }}>
                {children || title} 
            </StyledOverlayHeading>
        </Component>
    )
}

OverlayHeading.displayName = 'OverlayHeading'
export default OverlayHeading