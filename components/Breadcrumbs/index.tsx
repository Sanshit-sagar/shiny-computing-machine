import React, { cloneElement, Children } from 'react'
import { useBreadcrumbs } from '@react-aria/breadcrumbs'

import { OrderedList } from './styles' 
import { BreadcrumbElement, AriaBreadcrumbProps } from './interfaces'


export function BreadcrumbsRoot({ element: Component = 'a', ...props }: AriaBreadcrumbProps) {
    let { navProps } = useBreadcrumbs(props)
  
    return (
        <nav {...navProps}>
            <OrderedList>
                {Children.toArray(props.children).map((child: BreadcrumbElement, idx: number) =>
                    cloneElement(child, { 
                        isCurrent: idx === props.children.length - 1,
                        elementType: idx === props.children.length - 1 ? 'h3' : 'a'
                    })
                )}
            </OrderedList>
        </nav>
    )
}
