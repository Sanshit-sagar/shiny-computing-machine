import React, { ReactElement } from 'react'
import { ReactNode, Ref } from 'react' 
import { CSS } from 'stitches.config'

import {
    StyledTrack,
    StyledTrackContainer
} from './styles'
import { useSliderContext } from './utils'
import SliderThumb from './SliderThumb'
import { isElementOfType } from '@/interfaces/Guards'
import { adjustSlider } from './utils'

interface SliderTrackProps {
    children: ReactNode;
    css?: CSS;
}

const isSliderThumbElement = (child: ReactNode): child is ReactElement<{children: ReactNode}> => {
    return isElementOfType(child, SliderThumb)
} 

const SliderTrack = ({ children, css, ...rest }: SliderTrackProps) => {

    const { 
        state, 
        trackRef, 
        trackProps, 
        disabled,
        isFocused,
        isHovered
    } = useSliderContext()

    const filteredChildren = React.Children.toArray(children).filter((child) => (
        isSliderThumbElement(child)
    ))

    const fill = adjustSlider(
        state.getThumbPercent(0) * 100,
        state.getThumbMinValue(0), 
        state.getThumbMaxValue(0),
        disabled,
        isHovered, 
        isFocused
    )

    return (
        <StyledTrackContainer {...trackProps} ref={trackRef as Ref<HTMLDivElement>}>
            <StyledTrack 
                dragging={state.isThumbDragging(0)} 
                disabled={disabled} 
                css={{ ...css,  '$$trackBackground': `${fill}` }}
            />
            {filteredChildren.map((child, index) => (
                <SliderThumb key={index} index={index}>
                    {child.props?.children ?? null}
                </SliderThumb> 
            ))}
        </StyledTrackContainer>
    )
}

SliderTrack.displayName = 'SliderTrack'
export default SliderTrack