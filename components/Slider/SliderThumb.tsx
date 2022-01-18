import { useRef } from 'react'

import { mergeProps } from '@react-aria/utils'
import { useFocusRing } from '@react-aria/focus'
import { useSliderThumb } from '@react-aria/slider'
import { VisuallyHidden } from '@react-aria/visually-hidden'

import { useSliderContext } from './utils'
import { SliderThumbProps } from './interfaces'
import { StyledThumb, StyledThumbContainer } from './styles'

const SliderThumb = ({ index = 0, children, ...rest }: SliderThumbProps) => {
   
    const { state, trackRef } = useSliderContext()

    const inputRef = useRef<HTMLInputElement | null>(null)
    const { thumbProps, inputProps } = useSliderThumb({ index, trackRef, inputRef }, state)
    const { focusProps, isFocusVisible } = useFocusRing()

    return (
        <StyledThumbContainer css={{ left: `${state.getThumbPercent(index) * 100}%` }}>
            <StyledThumb 
                {...thumbProps} 
                dragging={state.isThumbDragging(index)} 
                focusVisible={isFocusVisible}
                hidden={!children ? false : true}
            >
                <VisuallyHidden>
                    <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
                </VisuallyHidden>

                {children}
            </StyledThumb>
        </StyledThumbContainer>
    )
}

SliderThumb.displayName = 'SliderThumb'
export default SliderThumb