import React, { Fragment, useRef, ReactNode } from 'react'
import { useBreadcrumbItem } from '@react-aria/breadcrumbs'
import { useId, mergeProps } from '@react-aria/utils'

import { ListItemWrapper, BreadcrumbLink, BreadcrumbHeading } from './styles' 
import { AriaBreadcrumbItemProps } from './interfaces'
import BreadcrumbIcon from './BreadcrumbsIcon'

import { useFocusRing } from '@react-aria/focus'
import { useHover, usePress } from '@react-aria/interactions'


function BreadcrumbsItem({
    element: Component = 'li',
    icon = 'SLASH',
    ...props
}: AriaBreadcrumbItemProps) {

    const ref = useRef<HTMLAnchorElement>()
    const { itemProps } = useBreadcrumbItem(props, ref)

    const { hoverProps, isHovered } = useHover({ isDisabled: props.isDisabled })
    const { focusProps, isFocusVisible, isFocused } = useFocusRing({ isTextInput: true, within: true, autoFocus: false })
    const { pressProps, isPressed } = usePress(props)

    const mergedProps = mergeProps(hoverProps, focusProps, pressProps)
    const states = { isHovered, isPressed, isFocused, isFocusVisible, isDisabled: props.isDisabled }

    let breadcrumbContent: ReactNode

    if(props.isCurrent) {
        breadcrumbContent = (
            <BreadcrumbHeading ref={ref} isCurrent={props.isCurrent}>
                {props.children}
            </BreadcrumbHeading>
        )
    } else { 
        breadcrumbContent = (
            <Fragment key={`breadcrumb-item-${useId()}`}>
                <BreadcrumbLink {...itemProps} ref={ref} href={props.href} {...states}>
                    {props.children}
                </BreadcrumbLink>
                <BreadcrumbIcon isCurrent={props.isCurrent} {...states} aria-hidden="true" icon={icon} /> 
            </Fragment>
        )
    }

    return (
        <ListItemWrapper as={Component} {...mergedProps}> 
            {breadcrumbContent}
        </ListItemWrapper>
    )
}

export default BreadcrumbsItem
  