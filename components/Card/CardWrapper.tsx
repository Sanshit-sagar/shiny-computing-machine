import React, { useContext, ReactNode, ReactElement, Children } from 'react'
import { isElementOfType } from '@/interfaces/Guards'

import CardHeader from './CardHeader'
import CardDescription from './CardDescription'

import { CardContext } from './CardContext'
import { StyledCardWrapper } from './styles' 
import { CardProps, CardState } from './interfaces'

const isHeaderElement = (child: ReactNode, index: number): child is ReactElement<{children: ReactNode}> => {
    return isElementOfType(child, CardHeader) && index == 0
} 

const isDescriptionElement = (child: ReactNode, index: number): child is ReactElement<{children: ReactNode}> => {
    return (isElementOfType(child, CardDescription) || isElementOfType(child, CardHeader)) && index === 1
}

const CardWrapper = ({ 
    element: Component = 'div', 
    children, 
    interactive,
    title, 
    subtitle,
    css,
    ...props 
}: CardProps) => {
    const childArr = React.Children.toArray(children)

    const titleElem = title || childArr.filter((child, index) => isHeaderElement(child, index))
    const subtitleElem = subtitle || childArr.filter((child, index) => isDescriptionElement(child, index))

    const contextValue = { 
        childrenArray: childArr,
        hasTitle: titleElem?.length ?? false, 
        hasSubtitle: subtitleElem?.length ?? false,
        hasHeader:  (titleElem?.length) ?? (subtitleElem?.length) ?? false,
        title: titleElem,
        subtitle: subtitleElem
    }
  
    return (
        <CardContext.Provider value={contextValue}>
            <Component {...props}>
                <StyledCardWrapper as={Component} interactive={interactive} css={{ ...css }}>
                    {children}
                </StyledCardWrapper>
            </Component>
        </CardContext.Provider>
    )
}

CardWrapper.displayName = 'CardWrapper'
export default CardWrapper