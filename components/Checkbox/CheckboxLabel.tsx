import { forwardRef, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { CSS } from 'stitches.config' 

import { StyledLabel } from './styles'
import { ScopedProps } from './types'
import { DEFAULT_NAME } from './constants'
import { CheckedSquareIcon } from './Icons'
import { useCheckboxContext } from './CheckboxContext'

const DEFAULT_LABEL_TAG = 'span'
type LabelElement = ElementRef<typeof DEFAULT_LABEL_TAG>
type LabelProps = ComponentPropsWithoutRef<typeof DEFAULT_LABEL_TAG>

const CHECKBOX_LABEL_NAME = `${DEFAULT_NAME}Label`  

interface CheckboxLabelProps extends LabelProps {
    element?: ElementType;
    css?: CSS;
}

const CheckboxLabel = forwardRef<LabelElement, CheckboxLabelProps>(({ 
    __scopeCheckbox, 
    children,
    element: Component = 'span',
    css,
    ...props 
}: ScopedProps<CheckboxLabelProps>, forwardedRef) => {
        
    const { isLabelled, ...rest } = useCheckboxContext(CHECKBOX_LABEL_NAME, __scopeCheckbox)

    return isLabelled ? (
        <StyledLabel as={Component} {...props} ref={forwardedRef}>
            {children || <CheckedSquareIcon />}
        </StyledLabel>  
    ) : (
        <> {null} </>
    )
})

CheckboxLabel.displayName = CHECKBOX_LABEL_NAME
export default CheckboxLabel