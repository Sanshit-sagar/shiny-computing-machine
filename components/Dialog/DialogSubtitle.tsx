
import { StyledSubtitle } from './styles'
import { DialogSubtitleProps } from './types'
import { useDialogContext } from './utils'

const DialogSubtitle = ({ children, element: Component = 'h4', css, ...props }: DialogSubtitleProps) => {
    const { subtitle } = useDialogContext()

    return (
        <StyledSubtitle {...props} as={Component} css={{ ...css }}> 
            {children || subtitle}
        </StyledSubtitle>
    )
}

DialogSubtitle.displayName = 'DialogSubtitle'
export default DialogSubtitle