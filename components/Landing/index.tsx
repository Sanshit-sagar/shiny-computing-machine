import { cloneElement } from 'react' 

import showcases from './data'
import { IShowcase } from './types'
import { useIsSSR } from '@react-aria/ssr'

import {
    StyledComponentWrapper,
    StyledGalleryContainer,
    StyledComponentDisplay
} from './styles'

const ComponentGallery = () => {
    const isSSR = useIsSSR()

    if(isSSR) return null

    return (
        <StyledGalleryContainer>
            {showcases.map(({ name, element, align = 'center' }: IShowcase) => (
                <StyledComponentWrapper>
                    <StyledComponentDisplay align={align}>
                        {   name === 'Dialog' 
                        ?   cloneElement(element, { defaultOpen: false })
                        :   element}
                    </StyledComponentDisplay>
                </StyledComponentWrapper>
            ))}
        </StyledGalleryContainer>
    )
}

export default ComponentGallery