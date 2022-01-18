import { StyledTile } from './Styles'
import type { TileProps } from './interfaces'


export const Tile = ({ children, css, ...props }: TileProps) => (
    <StyledTile {...props} css={{ ...css }}> 
        {children} 
    </StyledTile>
)
