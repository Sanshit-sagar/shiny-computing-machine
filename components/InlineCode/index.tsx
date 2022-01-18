import { ReactNode } from 'react'
import { StyledInlineCode } from './styles'

export interface InlineCodeProps {
    children: ReactNode
}

export const InlineCode = (props: InlineCodeProps) => (
     <StyledInlineCode> {props.children} </StyledInlineCode>
)