import { Separator } from '@/components/Separator'
import { styled, CSS, VariantProps } from '../../stitches.config'

import { useSplitPaneContext } from './utils'


type CSSProps = { css?: CSS }
type DividerVariants = VariantProps<typeof StyledSeparator>
type DividerOwnProps = { }

export type DividerProps = DividerOwnProps & DividerVariants & CSSProps

const StyledSeparator = styled('div', {
    border: '0.5px solid',
    borderColor: '$accentBorder',

    variants: {
        orientation: {
            'horizontal': {
                cursor: 'row-resize'
            },
            'vertical': {
                cursor: 'col-resize'
            }
        }
    },
    defaultVariants: {
        orientation: 'horizontal'
    }
})

const Divider = ({ orientation, css, ...props }: DividerProps) => {
    const { onMouseHoldDown } = useSplitPaneContext()
    

    return (
        <StyledSeparator orientation={orientation} onMouseDown={onMouseHoldDown} />
    );
}

export default Divider