import { ChipPrefixProps } from './types'
import { useChipContext } from './utils'
import { StyledPrefix } from './styles'

const ChipPrefix = ({ children }: ChipPrefixProps) => {
    const { prefix } = useChipContext()

    return (
        <StyledPrefix> 
            {children || prefix} 
        </StyledPrefix>
    )
}

ChipPrefix.displayName = 'ChipPrefix'
export default ChipPrefix