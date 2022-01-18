import React, { useRef, RefObject } from 'react'

import { useSlider } from '@react-aria/slider'
import { useSliderState } from '@react-stately/slider'
import { useNumberFormatter } from '@react-aria/i18n'

import { useInteractions } from '@/hooks/useInteractions'

import { 
    StyledGroup, 
    StyledInfoContainer, 
    StyledLabel,
    StyledOutput
} from './styles'

import { SliderProps, SliderState, ISliderContext } from './interfaces'
import SliderContext from './SliderContext'


const SliderRoot = ({ children, disabled, ...props }: SliderProps) => {
    const trackRef: RefObject<HTMLElement> = useRef<HTMLElement>(null)
    const numberFormatter = useNumberFormatter(props.formatOptions)
    const state: SliderState = useSliderState({ ...props, numberFormatter })

    const { groupProps, trackProps, labelProps, outputProps } = useSlider(props, state, trackRef)
    const { interactionProps, isHovered, isFocused, ...otherStates } = useInteractions({ isDisabled: disabled })

    const sliderContextValue: ISliderContext = {
        disabled,
        state,
        trackRef,
        trackProps,
        isHovered,
        isFocused
    }

    return (
        <SliderContext.Provider value={sliderContextValue}>
            <StyledGroup {...groupProps}>
                <StyledInfoContainer>
                    {props.label && (
                        <StyledLabel {...labelProps}> {props.label} </StyledLabel>
                    )}
                    <StyledOutput {...outputProps}>
                        {state.getThumbValueLabel(0)}%
                    </StyledOutput>
                </StyledInfoContainer>
                    
                {children}
            </StyledGroup>
        </SliderContext.Provider>
    )
}


SliderRoot.displayName = 'SliderRoot'
export default SliderRoot