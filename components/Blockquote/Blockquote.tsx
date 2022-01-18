import { StyledBlockquote } from './Styles'
import { BlockquoteProps, IBlockquoteContext } from './interfaces'
import { useBlockquoteContext } from './utils'

export const Blockquote = ({ element: Component = 'div', quote, ...props }: BlockquoteProps) => {
    return (
        <Component {...props}>
            <StyledBlockquote>
                <p> {quote.quote} </p>—{" "}
                <span className="underlined"> {quote.author} </span>
            </StyledBlockquote>
        </Component>
    )
}