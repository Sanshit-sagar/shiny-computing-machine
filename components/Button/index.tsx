import { Button as ButtonBase } from './Button'
import { withDefaultProps } from '../Buttons/utils'
import type { AriaButtonProps, DefaultButtonProps } from './types'

export type ButtonBaseProps = Omit<DefaultButtonProps, 'children'>

const defaultProps: ButtonBaseProps = {
    elementType: 'button',
    isDisabled: false,
    isLoading: false,
    autoFocus: false,
    size: 'medium',
    style: 'default',
    prefix: null,
    suffix: null
}

export const Button = withDefaultProps<
    AriaButtonProps<'button'>, 
    DefaultButtonProps
>(defaultProps, ButtonBase)

