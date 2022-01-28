import { ReactNode } from 'react' 
import { StyledChip } from './styles'

type ChipProps = {
    children: ReactNode; 
}

const ChipRoot = ({ children, ...rest }: ChipProps) => {

    return (
        <StyledChip>
            {children}
        </StyledChip>
    )
}

ChipRoot.displayName = 'ChipRoot'
export default ChipRoot