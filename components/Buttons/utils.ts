import { Children, isValidElement, ComponentType } from "react"

export const withDefaultProps = <
    P extends object, 
    DP extends Partial<P> = Partial<P>
>(
    defaultProps: P, 
    Cmp: ComponentType<P>
) => {
    type RequiredProps = Omit<P, keyof DP>
    // type Props = Partial<DP> & Required<RequiredProps>
    type Props = Partial<DP> & RequiredProps

    Cmp.defaultProps = defaultProps
    return (Cmp as ComponentType<any>) as ComponentType<Props>
}

export const isTextOnly = (children): boolean => (
        typeof children === 'string' 
    ||  Children.toArray(children).every((child) => !isValidElement(child))
)