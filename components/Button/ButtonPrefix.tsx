import { useRef } from 'react' 
import { useButton } from '@react-aria/button'
import { mergeProps } from '@react-aria/utils'

import { StyledPrefix } from './styles'
import { useButtonContext } from './utils'
import { ButtonPrefixProps } from './types'

const ButtonPrefix = ({ 
    children,
    elementType: Component = 'button', 
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
        <Component {...mergeProps(rest, buttonProps)} ref={prefixButtonRef}>
            <StyledPrefix 
                variant={variant} 
                radius={radius} 
                css={{ ...css }}
            >
                {prefix || children} 
            </StyledPrefix>
        </Component>
    )
}

ButtonPrefix.displayName = 'ButtonPrefix'
export default ButtonPrefix


