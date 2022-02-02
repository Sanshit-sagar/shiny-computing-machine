import { useProgressBar } from 'react-aria'

import { StyledSpinner, StyledRipple } from './styles'
import { SpinnerProps } from './types'

export const Spinner = ({ 
    size = '2', 
    speed = '4', 
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


