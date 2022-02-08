import { ReactNode } from 'react'
import { CSS } from 'stitches.config'
import { useOverlayContext } from './utils'
import { StyledOverlayBody } from './styles'              


interface OverlayBodyProps {
    children: ReactNode;
    css?: CSS; 
}

const OverlayBody = ({ children, css }: OverlayBodyProps) => {
    const { subtitle } = useOverlayContext() 

    return (
        <StyledOverlayBody css={{ ...css }}> 
            {children || subtitle} 
        </StyledOverlayBody> 
    )
}

OverlayBody.displayName = 'OverlayBody'
export default OverlayBody