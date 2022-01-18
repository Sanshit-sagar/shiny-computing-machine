import { Grid, Cube } from './styles'

interface CubedGridProps {
    sideLength?: number; 
}

const getRandomColor = () => Number(Math.round(Math.random()*12))

const FoldedCubeLoader = ({ sideLength = 3 }: CubedGridProps) => (
    <Grid>  
        {[...Array(sideLength)].map((_row, i) => (
            [...Array(sideLength)].map((_col, j) => (
                <Cube 
                    delay={sideLength - 1 - i + j} 
                    color={getRandomColor()}
                />
            ))
        ))} 
    </Grid>
); 

export default FoldedCubeLoader
