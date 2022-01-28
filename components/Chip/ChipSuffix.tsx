import { ChipSuffixProps } from './types'
import { useChipContext } from './utils'
import { StyledSuffix } from './styles'

const ChipSuffix = ({ 
    children, 
    element: Component = 'button', 
    onClick 
}: ChipSuffixProps) => {
    
    const { suffix } = useChipContext()

    return (
        <StyledSuffix as={Component} onClick={onClick}> 
            {children || suffix} 
        </StyledSuffix>
    )
}

ChipSuffix.displayName = 'ChipSuffix'
export default ChipSuffix