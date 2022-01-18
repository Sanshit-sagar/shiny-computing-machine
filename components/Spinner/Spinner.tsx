import { useProgressBar } from 'react-aria'

import { StyledSpinner, StyledRipple } from './styles'
import { SpinnerProps } from './types'

export const Spinner = ({ 
    size = '2', 
    speed = '3', 
    radius = '5', 
    label = 'Loading...',
    isIndeterminate = true
}: SpinnerProps) => {

    const { progressBarProps } = useProgressBar({ 
        isIndeterminate, 
        'aria-label': label 
    })

    return (
        <StyledSpinner 
            size={size} 
            speed={speed} 
            radius={radius} 
            {...progressBarProps} 
        /> 
    )
}

Spinner.displayName = 'Spinner'
export default Spinner 

