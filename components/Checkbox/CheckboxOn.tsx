import { forwardRef, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config' 

import { StyledOn } from './styles'
import { 
    ScopedProps, 
    CheckboxOnVariants 
} from './types'
import { DEFAULT_NAME } from './constants'
import { CheckedSquareIcon } from './Icons'
import { useCheckboxContext } from './CheckboxContext'

const DEFAULT_ON_TAG = 'span'
type OnElement = ElementRef<typeof DEFAULT_ON_TAG>
type OnProps = ComponentPropsWithoutRef<typeof DEFAULT_ON_TAG>

const CHECKBOX_ON_NAME = `${DEFAULT_NAME}On`  

interface CheckboxOnProps extends OnProps, CheckboxOnVariants {
    element?: ElementType;
    css?: CSS;
}

const CheckboxOn = forwardRef<OnElement, CheckboxOnProps>(({ 
    __scopeCheckbox, 
    children,
    element: Component = 'span',
    shape,
    size,
    css,
    ...props 
}: ScopedProps<CheckboxOnProps>, forwardedRef) => {
        
    const { isOn, isIndeterminate, ...rest } = useCheckboxContext(CHECKBOX_ON_NAME, __scopeCheckbox)

    return isOn && !isIndeterminate ? (
        <StyledOn 
            {...props} 
            as={Component} 
            shape={shape ? shape : !children ? 'none' : 'square'} 
            size={size} 
            ref={forwardedRef}
        >
            {children || <CheckedSquareIcon />}
        </StyledOn>  
    ) : (
        <> {null} </>
    )
})

CheckboxOn.displayName = CHECKBOX_ON_NAME
export default CheckboxOn