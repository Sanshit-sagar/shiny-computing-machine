import React from 'react' 
import * as Radix from '@radix-ui/react-primitive'
import { styled } from '../../../stitches.config'
import { TriangleUpIcon, TriangleDownIcon } from '@radix-ui/react-icons'

const StyledIcon = styled('span', {
    color: '$accentTextContrast',
    variants: {
        visibility: {
            'hidden': {
                visibility: 'hidden',
            },
            'visible': {
                visibility: 'visible',
            }
        }
    },
    defaultVariants: {
        visibility: 'visible'
    }
});


type ExtendedIconProps = Radix.ComponentPropsWithoutRef<typeof StyledIcon> & {
    direction: 'ascending' | 'descending' | 'N/A';
    visible: boolean; 
    allowsSorting: boolean; 
    key: string;
};

const ExtendedIcon = React.forwardRef<
    React.ElementRef<typeof StyledIcon>,
    ExtendedIconProps
>(({ direction, visible, allowsSorting, key, ...otherProps }, forwardedRef) => {

    if(!allowsSorting) return null;

    return (
        <span aria-hidden="true">
            <StyledIcon 
                aria-hidden="true"     
                {...otherProps}
                visibility={visible ? 'visible' : 'hidden'}
                ref={forwardedRef}
            >
                {direction ==='ascending' ? (
                    <TriangleUpIcon /> 
                ) : (
                    <TriangleDownIcon /> 
                )}
            </StyledIcon>
        </span>
    )
})

ExtendedIcon.displayName = 'SortIndicator'
const SortIndicator = ExtendedIcon
export default SortIndicator