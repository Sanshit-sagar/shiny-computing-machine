import { StyledTitle } from './styles'
import { DialogTitleProps } from './types'
import { useDialogContext } from './utils'


const DialogTitle = ({ children, element: Component = 'h2', titleProps, css }: DialogTitleProps) => {
    const { title } = useDialogContext()

    return (
        <StyledTitle as={Component} {...titleProps} css={{ ...css }}> 
            {children || title} 
        </StyledTitle>
    )
}

DialogTitle.displayName = 'DialogTitle'
export default DialogTitle