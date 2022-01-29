import { ReactNode, Children, ComponentType } from 'react'

export const isEmptyChildren = (children: ReactNode): boolean => (
    Children.count(children) === 0
)

export const isFunction = <T extends Function>(value: any): value is T => (
    typeof value === 'function'
)

export const getComponentName = (component: ComponentType<any>) => (
    component.displayName || (component as any).name
)

export const getHocComponentName = (hocName: string, component: ComponentType<any>) => (
    `${hocName}(${getComponentName(component)})`
)

