import { ReactNode } from 'react'
import { CSS } from 'stitches.config'
import { useOverlayContext } from './utils'
import { StyledOverlayDescription } from './styles'              


interface OverlayDescriptionProps {
    children: ReactNode;
    css?: CSS; 
}

const OverlayDescription = ({ children, css }: OverlayDescriptionProps) => {
    const { subtitle } = useOverlayContext() 

    return (
        <StyledOverlayDescription css={{ ...css }}> 
            {children || subtitle} 
        </StyledOverlayDescription> 
    )
}

OverlayDescription.displayName = 'OverlayDescription'
export default OverlayDescription