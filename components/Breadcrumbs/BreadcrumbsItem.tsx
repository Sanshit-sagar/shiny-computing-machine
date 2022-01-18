import React, { useRef, ReactNode } from 'react'
import { useBreadcrumbItem } from '@react-aria/breadcrumbs'
import { mergeProps } from '@react-aria/utils'

import { useInteractions } from '@/hooks/useInteractions'
import { ListItemWrapper, BreadcrumbLink, BreadcrumbHeading } from './styles' 
import { AriaBreadcrumbItemProps } from './interfaces'
import BreadcrumbIcon from './BreadcrumbsIcon'

function BreadcrumbsItem(props: AriaBreadcrumbItemProps) {
    const ref = useRef<HTMLAnchorElement>()
    const { itemProps } = useBreadcrumbItem(props, ref)

    const { interactionProps, ...interactionStates } = useInteractions({ 
        isDisabled: props.isDisabled 
    })

    let breadcrumbContent: ReactNode

    if(props.isCurrent) {
        breadcrumbContent = (
            <BreadcrumbHeading {...mergeProps(interactionProps, itemProps)} ref={ref}>
                {props.children}
            </BreadcrumbHeading>

        )} else { 
            breadcrumbContent = (
            <>
                <BreadcrumbLink
                    {...mergeProps(interactionProps, itemProps)}
                    ref={ref}
                    href={props.href}
                    isCurrent={props.isCurrent}
                    {...interactionStates}
                >
                    {props.children}
                </BreadcrumbLink>
                {!props.isCurrent && (
                    <BreadcrumbIcon isCurrent={props.isCurrent} aria-hidden="true" /> 
                )}
            </>
        )}
   
    return <ListItemWrapper> {breadcrumbContent} </ListItemWrapper>
}

export default BreadcrumbsItem
  