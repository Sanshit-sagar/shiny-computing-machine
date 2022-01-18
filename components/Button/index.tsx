

export type { ButtonProps } from './types'

import ButtonBase from './ButtonBase'
import ButtonPrefix from './ButtonPrefix'
import ButtonSuffix from './ButtonSuffix'

import { ButtonRoot } from './ButtonRoot'
import { ButtonImplProps } from './types'

const PButton = {
    Root: ButtonRoot,
    Base: ButtonBase,
    Prefix: ButtonPrefix,
    Suffix: ButtonSuffix
}

export const Button =<T extends object>({ 
    children, 
    variant, 
    radius = 'y=x-n', 
    ...props 
}: ButtonImplProps<T>) => (
    <PButton.Root variant={variant} radius={radius} {...props}>
        <PButton.Base> {children} </PButton.Base>
    </PButton.Root>
)


export default PButton