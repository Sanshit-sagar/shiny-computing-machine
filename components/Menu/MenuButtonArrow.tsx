import { forwardRef, ReactElement, ReactNode, RefObject } from 'react'
import { CSS } from 'stitches.config'

import { ChevronDownIcon } from '@radix-ui/react-icons'

interface MenuButtonArrowProps<T> {
    css?: CSS;
    children?: ReactNode;
}

const AriaMenuButtonArrow = <T extends object>(props: MenuButtonArrowProps<T>, ref: RefObject<HTMLSpanElement>) => (
    <span aria-hidden="true" {...props}>
        <ChevronDownIcon /> 
    </span>
)

AriaMenuButtonArrow.displayName = 'MenuButtonArrow'
const _MenuButtonArrow = forwardRef(AriaMenuButtonArrow) as <T>(props: MenuButtonArrowProps<T> & { 
    ref?: RefObject<HTMLSpanElement>; 
}) => ReactElement

export { _MenuButtonArrow as MenuButtonArrow }