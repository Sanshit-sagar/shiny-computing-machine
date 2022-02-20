import { forwardRef, ElementRef, ReactNode, ComponentPropsWithoutRef } from 'react' 
import { CSS } from 'stitches.config'

import { StyledMenuSeparator } from './styles'

const DEFAULT_TAG = 'div' 

type MenuSeparatorElement = ElementRef<typeof DEFAULT_TAG>
type MenuSeparatorProps = ComponentPropsWithoutRef<typeof DEFAULT_TAG> & { css?: CSS; children?: ReactNode; }

export const MenuSeparator = forwardRef<MenuSeparatorElement, MenuSeparatorProps>(
    (props, ref) => {

        return <StyledMenuSeparator {...props} ref={ref} />
    }
)

MenuSeparator.displayName = 'MenuSeparator'