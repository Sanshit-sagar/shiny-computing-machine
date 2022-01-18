import { useRef } from 'react'

import { StyledBase } from './styles'
import { ButtonBaseProps } from './types'
import { useButtonContext } from './utils'

import { useButton } from '@react-aria/button'
import { Spinner } from '@/components/Spinner'

const ButtonBase = ({ 
    children,
    variant = "primary", 
    prefixed,
    suffixed, 
    isLoading = false,
    onPress = (_event) => {},
    css
}: ButtonBaseProps) => {
    const { base } = useButtonContext()

    const baseButtonRef = useRef<HTMLButtonElement>()
    const { buttonProps } = useButton({ onPress }, baseButtonRef)

    return (
        <StyledBase 
            {...buttonProps}
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
    )
}

ButtonBase.displayName = 'ButtonBase'
export default ButtonBase