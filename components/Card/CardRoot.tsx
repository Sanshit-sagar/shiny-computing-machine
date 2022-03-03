import { forwardRef, RefObject, ReactNode, ElementRef, ComponentPropsWithRef } from 'react'
import { CSS } from 'stitches.config'

import type { ScopedProps, ICardContext } from './types'
import { StyledCardRoot } from './styles'
import { DEFAULT_NAME } from './constants'
import { CardProvider } from './CardContext'

const DEFAULT_TAG = 'div' 

type CardRootElement = ElementRef<typeof DEFAULT_TAG>
type DefaultCardRootProps = ComponentPropsWithRef<typeof DEFAULT_TAG>

interface CardRootProps extends DefaultCardRootProps {
    css?: CSS;
    children: ReactNode; 
}

const CARD_ROOT_NAME = `${DEFAULT_NAME}Root`

const CardRoot = forwardRef<CardRootElement, CardRootProps>(({ 
        __scopeCard, 
        ...props 
    }: ScopedProps<CardRootProps>, forwardedRef) => {

    const cardContext: ICardContext = {

    }
        
    return (
        <CardProvider scope={__scopeCard} {...cardContext}>
            <StyledCardRoot {...props} ref={forwardedRef}>
                
            </StyledCardRoot>
        </CardProvider>
    )
})

CardRoot.displayName = CARD_ROOT_NAME
export default CardRoot