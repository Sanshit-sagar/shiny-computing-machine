import { ExampleBase } from '../ExampleBase'
import { Canvas } from './index'

const CanvasInstance = () => <Canvas />

const SprayPaintIcon = () => <i className='bx bxs-spray-can' ></i>

const ExampleCanvas = () => (
    <ExampleBase 
        icon={<SprayPaintIcon />}
        heading={'Canvas'}
        description={'Canvas description here'}
        component={<CanvasInstance />}
        controls={[]}
    />
);

export default ExampleCanvas