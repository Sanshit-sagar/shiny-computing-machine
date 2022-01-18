import React, { forwardRef } from 'react' 
import { 
    GutterProps, 
    SplitDirection, 
    SplitDirections 
} from './interfaces'
import {
    StyledGutter,
    StyledDragger
} from './Styles'

const getDirection = (direction: SplitDirection) => {
    return direction === SplitDirections.VERTICAL ? 'VERTICAL' : 'HORIZONTAL'
}

export const Gutter = forwardRef<HTMLDivElement, GutterProps>((
    { className,draggerClassName, direction = SplitDirections.VERTICAL, onMouseDown, ...props}, ref) => {

    return (
        <StyledGutter 
            className={className}
            direction={getDirection(direction)} 
            onMouseDown={onMouseDown} 
            ref={ref}
        >
            <StyledDragger 
                className={draggerClassName} 
                direction={getDirection(direction)} 
            />
        </StyledGutter>
    )
});