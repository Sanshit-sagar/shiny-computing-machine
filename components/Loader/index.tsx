import FlippedPlaneLoader from "./FlippedPlane"
import FoldedCuadsLoader from './FoldedCuads'
import SpunBallsLoader from './SpunBalls'
import TiledGridLoader from './TiledGrid'
import ScaledBarsLoader from './ScaledBars'

import { LoaderCollection } from './styles'


export const Collection = () => (
    <LoaderCollection>
        <ScaledBarsLoader />
        <TiledGridLoader />
        <SpunBallsLoader /> 
        <FoldedCuadsLoader />
        <FlippedPlaneLoader />
    </LoaderCollection>
);

