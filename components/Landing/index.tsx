import showcases from './data'
import { IShowcase } from './types'

import {
    StyledComponentWrapper,
    StyledGalleryContainer,
    StyledComponentDisplay
} from './styles'

const ComponentGallery = () => (
    <StyledGalleryContainer>
        {showcases.map(({ name, element, align = 'center' }: IShowcase) => (
            <StyledComponentWrapper>
                <StyledComponentDisplay align={align}> 
                    {element} 
                </StyledComponentDisplay>
            </StyledComponentWrapper>
        ))}
    </StyledGalleryContainer>
)

export default ComponentGallery

// StyledComponentDescription
// StyledInfoContainer,
// StyledComponentName,
{/* <StyledInfoContainer> */}
    {/* <StyledComponentName> {showcase.name}  </StyledComponentName> */}
    {/* <StyledComponentDescription> {showcase.description} </StyledComponentDescription>  */}
{/* </StyledInfoContainer> */}
