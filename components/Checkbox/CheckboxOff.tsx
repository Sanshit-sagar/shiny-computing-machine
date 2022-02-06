import { forwardRef, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config' 

import { SquareIcon } from './Icons'
import { StyledOff } from './styles'
import { ScopedProps, CheckboxOffVariants } from './types'
import { DEFAULT_NAME } from './constants'
import { useCheckboxContext } from './CheckboxContext'

const DEFAULT_OFF_TAG = 'span'
type OffElement = ElementRef<typeof DEFAULT_OFF_TAG>
type OffProps = ComponentPropsWithoutRef<typeof DEFAULT_OFF_TAG>

const CHECKBOX_OFF_NAME = `${DEFAULT_NAME}Off`  

interface CheckboxOffProps extends OffProps, CheckboxOffVariants {
    element?: ElementType;
    css?: CSS;
}

const CheckboxOff = forwardRef<OffElement, CheckboxOffProps>(({ 
    __scopeCheckbox, 
    children,
    element: Component = 'span',
    shape,
    size,
    css,
    ...props 
}: ScopedProps<CheckboxOffProps>, forwardedRef) => {
        
    const { isOff, isIndeterminate, ...rest } = useCheckboxContext(CHECKBOX_OFF_NAME, __scopeCheckbox)

    return isOff && !isIndeterminate ? (
        <StyledOff 
            as={Component}
            {...props}  
            shape={shape ? shape : !children ? 'none' : 'square'} 
            size={size} 
            ref={forwardedRef}
        >
            {!shape && !size && !children ? (
                <SquareIcon /> 
            ) : (
                children
            )}
        </StyledOff>  
    ) : (
        <> {null} </>
    )
})

CheckboxOff.displayName = CHECKBOX_OFF_NAME
export default CheckboxOff