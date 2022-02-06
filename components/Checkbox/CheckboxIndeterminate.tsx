import { forwardRef, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config' 

import { 
    IndeterminateSquareIcon, 
    FilledIndeterminateSquareIcon
} from './Icons'

import { StyledIndeterminate } from './styles'
import { ScopedProps } from './types'
import { DEFAULT_NAME } from './constants'
import { useCheckboxContext } from './CheckboxContext'

const DEFAULT_INDETERMINATE_TAG = 'span'
type IndeterminateElement = ElementRef<typeof DEFAULT_INDETERMINATE_TAG>
type IndeterminateProps = ComponentPropsWithoutRef<typeof DEFAULT_INDETERMINATE_TAG>

const CHECKBOX_INDETERMINATE_NAME = `${DEFAULT_NAME}Indeterminate`  

interface CheckboxIndeterminateProps extends IndeterminateProps {
    element?: ElementType;
    css?: CSS;
}

const CheckboxIndeterminate = forwardRef<IndeterminateElement, CheckboxIndeterminateProps>(({ 
    __scopeCheckbox, 
    children,
    element: Component = 'span',
    css,
    ...props 
}: ScopedProps<CheckboxIndeterminateProps>, forwardedRef) => {
        
    const { isIndeterminate, isOn, isOff, ...rest } = useCheckboxContext(CHECKBOX_INDETERMINATE_NAME, __scopeCheckbox)

    return isIndeterminate ? (
        <StyledIndeterminate as={Component} {...props} ref={forwardedRef}>
            {isOn && (
                <IndeterminateSquareIcon /> 
            )}
            {isOff && (
                <FilledIndeterminateSquareIcon /> 
            )}
        </StyledIndeterminate>  
    ) : (
        <> {null} </>
    )
})

CheckboxIndeterminate.displayName = CHECKBOX_INDETERMINATE_NAME
export default CheckboxIndeterminate