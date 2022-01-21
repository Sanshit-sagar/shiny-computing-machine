import { useRef } from 'react'

import { StyledBase } from './styles'
import { ButtonBaseProps } from './types'
import { useButtonContext } from './utils'

import { useButton } from '@react-aria/button'
import { mergeProps } from '@react-aria/utils'

const ButtonBase = ({ 
    children,
    elementType: Component = 'button',
    variant = "primary", 
    prefixed,
    suffixed, 
    isLoading = false,
    onPress = (_event) => {},
    css,
    ...rest
}: ButtonBaseProps) => {
    const { base } = useButtonContext()

    const baseButtonRef = useRef<HTMLButtonElement>()
    const { buttonProps } = useButton({ onPress }, baseButtonRef)

    return (
        <Component {...mergeProps(rest, buttonProps)} ref={baseButtonRef}>
            <StyledBase 
                prefixed={prefixed} 
                suffixed={suffixed} 
                onClick={onPress} 
                variant={variant} 
                css={{ 
                    ...css 
                }}
            >    
                {children} 
            </StyledBase>
        </Component>
    )
}

ButtonBase.displayName = 'ButtonBase'
export default ButtonBase