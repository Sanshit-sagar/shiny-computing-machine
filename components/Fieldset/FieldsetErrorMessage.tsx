import { useFieldsetContext } from './utils'
import { FieldsetErrorMessageProps } from './types'
import { StyledFieldsetErrorMessage } from './styles'


const CrossCircledIcon = () => (
    <svg 
        width="15" 
        height="15" 
        viewBox="0 0 15 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z" 
            fill="currentColor" 
            fill-rule="evenodd" 
            clip-rule="evenodd"
        >
        </path>
    </svg>
)


const FieldsetErrorMessage = ({ 
    children, 
    element: Component = 'div',
    css, 
    ...props 
}: FieldsetErrorMessageProps) => {

    const { errorMessage, errorMessageProps, validationState } = useFieldsetContext() 

    return (
        <StyledFieldsetErrorMessage validationState={validationState} {...errorMessageProps}>
            {children || errorMessage}
            <CrossCircledIcon /> 
        </StyledFieldsetErrorMessage>
    )
}

FieldsetErrorMessage.displayName = 'FieldsetErrorMessage'
export default FieldsetErrorMessage

