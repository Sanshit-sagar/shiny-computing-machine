import { AnchorHTMLAttributes } from 'react'

import { Link } from './Link'
import { Item, ItemProps } from './Item'

import { mergeProps } from '@react-aria/utils'
import { ForwardRefComponent } from '@radix-ui/react-polymorphic'

import { StyledLink } from './Styles'

type LinkProps = {
    download?: string;
    href?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    rel?: string;
    target?: string;
    type?: string;
    referrerPolicy?: AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy'];
}

const DEFAULT_TAG = 'a'

type LinkItemElement = ElementRef<typeof DEFAULT_TAG>
interface LinkItemProps extends Pick<ItemProps, 'children' | 'css'>, LinkProps {}

const LinkItem = forwardRef<LinkItemElement, LinkItemProps>(
    ({ as: Component, css, ...props }, forwardedRef) => {
    
    return (
        <Item 
            css={{ px: 0, py: 0 }}
            _PrivateItemWrapper={({ children }) => (
                <StyledLink as={Component} {...props} css={{ ...css }} ref={forwardedRef}>
                    {children} 
                </StyledLink> 
            )}
        >
            {props.children}
        </Item> 
    )
})

export {
    LinkItem
}

export type {
    LinkProps,
    LinkItemProps,
    LinkItemElement
}