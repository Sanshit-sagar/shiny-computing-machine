import { FoldingCube, FoldedCube } from './styles'


const TiledGridLoader = () =>(
    <FoldingCube>
        <FoldedCube animation="1" />
        <FoldedCube animation="2" />
        <FoldedCube animation="4" />
        <FoldedCube animation="3" />
    </FoldingCube>
)

export default TiledGridLoader