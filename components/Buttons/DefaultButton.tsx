import { AriaButton } from './ButtonBase'
import { withDefaultProps } from './utils' 
import { AriaButtonProps, DefaultButtonProps } from './types'

const DefaultButtonContent = () => <> hihi </>

const defaultProps: DefaultButtonProps = {
    elementType: 'button',
    isDisabled: false,
    isLoading: false,
    autoFocus: false,
    shape: 'rounded',
    size: 's',
    children: <DefaultButtonContent />
}

const DefaultButton = withDefaultProps<AriaButtonProps<'button'>, DefaultButtonProps>(defaultProps, AriaButton)
export const Button = DefaultButton