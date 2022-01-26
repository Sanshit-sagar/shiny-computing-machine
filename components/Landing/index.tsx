import { cloneElement } from 'react' 

import { useIsSSR } from '@react-aria/ssr'

import { showcases } from './data'
import { IShowcase } from './types'
import {
    StyledName,
    StyledHeader,
    StyledSettings,
    StyledWrapper,
    StyledGallery,
    StyledDisplay
} from './styles'

import { DualToggle } from '@/components/MultiToggle/examples'

const ComponentGallery = () => {
    const isSSR = useIsSSR()

    if(isSSR) return null

    return (
        <StyledGallery>
            {showcases.map(({ name, icon, element, align = 'center' }: IShowcase) => (
                <StyledWrapper>
                    
                    <StyledHeader>
                        <StyledName> {icon} {name} </StyledName> 
                        <StyledSettings> 
                            <DualToggle />
                        </StyledSettings> 
                    </StyledHeader>

                    <StyledDisplay align={align}>
                        {cloneElement(element)}
                    </StyledDisplay>
                </StyledWrapper>
            ))}
        </StyledGallery>
    )
}

export default ComponentGallery