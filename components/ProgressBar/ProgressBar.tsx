import { IProgressBarContext, ProgressBarProps } from "./types"
import ProgressBarContext from './ProgressBarContext'

import { useProgressBar } from '@react-aria/progress'

import {
    StyledLabel,
    StyledValue,
    StyledInfoContainer,
    StyledProgressBarContainer,
    StyledProgressBar,
    StyledContainer
} from './styles'

const ProgressBar = (props: ProgressBarProps) => {
    const {
        value, 
        minValue = 0,
        maxValue = 100,
        label = '', 
        showValueLabel = !!label,
        ...rest
    } = props 

    const { progressBarProps, labelProps } = useProgressBar(props) 

    const percentage: number = (value - minValue) / (maxValue - minValue)
    const roundedProgress = Math.round(percentage * 10) * 10
    const barWidth: `${number}%` = `${Math.round(percentage * 100)}%` 

    const contextValue: IProgressBarContext = {
        value, 
        minValue,
        maxValue, 
        label, 
        showValueLabel,
        percentage, 
        barWidth, 
        roundedProgress
    }

    return (
        <ProgressBarContext.Provider value={contextValue}>
            <StyledContainer {...progressBarProps}>

                <StyledInfoContainer>
                    <StyledLabel hidden={!label} {...labelProps}> 
                        {label} 
                    </StyledLabel>
                    <StyledValue hidden={!showValueLabel} progress={roundedProgress}> 
                        {progressBarProps['aria-valuetext']} 
                    </StyledValue>
                </StyledInfoContainer>

                <StyledProgressBarContainer>
                    <StyledProgressBar progress={roundedProgress} css={{ width: barWidth }} /> 
                </StyledProgressBarContainer>
            </StyledContainer>
            
        </ProgressBarContext.Provider>
    )
}

ProgressBar.displayName = 'ProgressBar'
export default ProgressBar