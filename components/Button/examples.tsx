
import { Button } from './Button'
import { withDefaultProps } from '../Buttons/utils'
import type { AriaButtonProps, DefaultButtonProps } from './types'
import { RocketIcon } from '@/components/Icons'

const defaultProps: Omit<DefaultButtonProps, 'children'> = {
    elementType: 'button',
    isDisabled: false,
    isLoading: false,
    autoFocus: false
}

const DefaultButton = withDefaultProps<AriaButtonProps<'button'>, DefaultButtonProps>(defaultProps, Button)

export const ButtonInstance = () => (
    <DefaultButton> Launch </DefaultButton>
)
