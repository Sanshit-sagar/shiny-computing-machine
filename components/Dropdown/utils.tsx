import { forwardRef, Ref, ElementType } from 'react'
import type { 
    Hook,
    Props, 
    Options,
    AnyObject, 
    Component, 
    HTMLProps,
    RenderProp
} from './types' 

export function hasOwnProperty<T extends AnyObject>(
    object: T, 
    prop: keyof any
): prop is keyof T {
    return Object.prototype.hasOwnProperty.call(object, prop)
}

export const isRenderProp = (children: any): children is RenderProp => {
    return typeof children === 'function'
}

export function createComponent<O extends Options>(
    render: (props: Props<O>) => JSX.Element | null
) {
    const Role = (props: Props<O>, ref: Ref<any>) => (
        render({ ref, ...props })
    )

    return forwardRef(Role) as unknown as Component<O>
}

export function createHook<O extends Options>(
    useProps: (props: Props<O>) => HTMLProps<O>
) {
    const useRole = (props: Props<O> = {} as Props<O>) => {
        const htmlProps = useProps(props)
        const copy = {} as typeof htmlProps
        
        for(const prop in htmlProps) {
            if(hasOwnProperty(htmlProps, prop) && htmlProps[prop] !== undefined) {
                copy[prop] = htmlProps[prop]
            }
        }
    }

    return useRole as Hook<O>
}


export function createElement(
    Type: ElementType, 
    props: HTMLProps<Options>
) {
    const { as: As, wrapElement, ...rest } = props 
    let element: JSX.Element | null 
    
    if(As && typeof As !== 'string') {
        element = <As {...rest} /> 
    } else if(isRenderProp(props.children)) {
        const { children, ...otherProps } = rest
        element = props.children(otherProps)
    } else if(As) {
        element = <As {...rest} /> 
    } else {
        element = <Type {...rest} /> 
    }

    if(wrapElement) {
        return wrapElement(element) 
    }
    return element
}