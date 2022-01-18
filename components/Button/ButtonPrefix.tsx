import { useRef } from 'react' 
import { useButton } from '@react-aria/button'

import { StyledPrefix } from './styles'
import { useButtonContext } from './utils'
import { ButtonPrefixProps } from './types'

const ButtonPrefix = ({ 
    children, 
    variant,
    radius = '1', 
    onPress = (_event) => {}, 
    isLoading = false, 
    css, 
    ...rest 
}: ButtonPrefixProps) => {

    const { prefix } = useButtonContext()

    const prefixButtonRef = useRef<HTMLButtonElement>()
    const { buttonProps } = useButton({ onPress }, prefixButtonRef)

    return (
        <StyledPrefix {...buttonProps} variant={variant} radius={radius} ref={prefixButtonRef}>
            {prefix || children} 
        </StyledPrefix>
    )
}

ButtonPrefix.displayName = 'ButtonPrefix'
export default ButtonPrefix


