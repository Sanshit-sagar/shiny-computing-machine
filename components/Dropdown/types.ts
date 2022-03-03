import { ElementType, HTMLAttributes, ReactNode, RefAttributes, ComponentPropsWithRef } from 'react' 

export type AnyObject = Record<keyof any, any>
export type AnyFunction = (...args: any) => any
export type As<P = any> = ElementType<P>

export type BivariantCallback<T extends AnyFunction> = {
    bivarianceHack(...args: Parameters<T>): ReturnType<T>;
}["bivarianceHack"];

export type SetStateAction<T> = T | BivariantCallback<(prevState: T) => T>;
export type SetState<T> = BivariantCallback<(value: SetStateAction<T>) => void>;
export type BooleanOrCallback<T = never> =
  | boolean
  | BivariantCallback<T extends never ? () => boolean : (arg: T) => boolean>;


export type RenderProp<P = AnyObject>= (props: P) => JSX.Element | null

export type Children<T = any> = 
    | ReactNode 
    | RenderProp<HTMLAttributes<T> & RefAttributes<T>>

export type Options<T extends As = any> = { as?: T; }
export type WrapElement = (element: JSX.Element | null) => JSX.Element | null


export type HTMLProps<O extends Options> = {
    wrapElement?: WrapElement;
    children?: Children;
    [index: `data-${string}`]: unknown;
} & Omit<ComponentPropsWithRef<NonNullable<O["as"]>>, keyof O>;


export type Props<O extends Options> = O & HTMLProps<O>

export type Component<O extends Options> = {
    <T extends As>(
        props: Omit<O, 'as'> & 
            Omit<HTMLProps<Options<T>>, keyof O> & 
            Required<Options<T>>
        ): JSX.Element | null;
    (props: Props<O>): JSX.Element | null;
    displayName?: string;
}

export type Hook<O extends Options> = {
    <T extends NonNullable<O['as']>>(
        props?: Omit<O, 'as'> & Omit<HTMLProps<Options<T>>, keyof O> & Options<T>
    ): HTMLProps<Options<T>>;
    displayName?: string; 
}