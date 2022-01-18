import React, { cloneElement, Children } from 'react'
import { useBreadcrumbs } from '@react-aria/breadcrumbs'

import { BreadcrumbElement, AriaBreadcrumbProps } from './interfaces'
import { OrderedList } from './styles' 



function BreadcrumbsRoot(props: AriaBreadcrumbProps) {
    const { element: Component = 'a', children, ...rest } = props
    let { navProps } = useBreadcrumbs(props)
  
    return (
        // <nav {...navProps}>
            <OrderedList>
                {Children.toArray(children).map((child: BreadcrumbElement, idx: number) =>
                    cloneElement(child, { 
                        isCurrent: idx === children.length - 1,
                        elementType: idx === children.length - 1 ? 'h3' : 'a'
                    })
                )}
            </OrderedList>
        // </nav>
    )
}

export default BreadcrumbsRoot