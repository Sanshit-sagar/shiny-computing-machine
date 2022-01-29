import React, { ComponentType, Component } from 'react'


import { getHocComponentName } from './utils'
import hoistNonReactStatics from 'hoist-non-react-statics'

import {
    Toggleable,
    Props as ToggleableProps,
    ToggleableComponentProps
} from './Toggleable'



type OwnProps = Pick<ToggleableProps, 'show'>
type InjectedProps = ToggleableComponentProps


export const withToggleable = <OriginalProps extends object>(
    UnwrappedComponent: ComponentType<OriginalProps & InjectedProps> 
) => {
    type Props = Omit<OriginalProps, keyof InjectedProps> & OwnProps

    class WithToggleable extends Component<Props> {
        static readonly displayName = getHocComponentName(
            WithToggleable.displayName,
            UnwrappedComponent
        )

        static readonly WrappedComponent = UnwrappedComponent

        render() {
            const { show, ...rest } = this.props as Pick<Props, 'show'>

            return (
                <Toggleable 
                    show={show}
                    render={(renderProps) => (
                        <UnwrappedComponent {...rest} {...renderProps} /> 
                    )}
                />
            )
        }
    }

    return hoistNonReactStatics(WithToggleable, UnwrappedComponent as any) as ComponentType<Props>
}
