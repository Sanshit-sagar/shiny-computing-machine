import { StyledRipple, StyledWave } from './styles'
import { RippleProps } from './types'


export const Ripple = ({ speed = '4', size = '1', css }: RippleProps) => (
    <StyledRipple speed={speed} size={size} css={{ ...css }}>
        {[...Array(2)].map((_, index: number) => (
            <StyledWave key={index} size={size} />
        ))}
    </StyledRipple>
)

Ripple.displayName = 'Ripple'
