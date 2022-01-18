import { useRef } from 'react'

import { StyledSuffix } from './styles'
import { useButtonContext } from './utils'
import { ButtonSuffixProps } from './types'

import { useButton } from '@react-aria/button'

const ButtonSuffix = ({ 
    children,
    radius = 'y=x-n', 
    variant = "secondary", 
    onPress = (_event) => {},
    css,
    ...rest 
}: ButtonSuffixProps) => {
    const { suffix } = useButtonContext()

    const suffixButtonRef = useRef<HTMLButtonElement>()
    const { buttonProps } = useButton({ onPress }, suffixButtonRef)

    return (
        <StyledSuffix {...buttonProps} radius={radius} variant={variant} ref={suffixButtonRef} css={{ ...css }}>
            {children}
        </StyledSuffix>
    )
}

ButtonSuffix.displayName = 'ButtonSuffix'
export default ButtonSuffix