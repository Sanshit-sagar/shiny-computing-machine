import ProgressBar from './ProgressBar'
import { ExampleBase } from '@/components/ExampleBase'
import { SliderIcon } from '@radix-ui/react-icons'

const SimpleProgressBar = () => (
    <ProgressBar label="Downloaded" value={85} />
)

export const ProgressBarInstance = () => <SimpleProgressBar /> 

const ExampleProgressBar = () => {

    return (
        <ExampleBase
            heading={'ProgressBar'}
            description={''}
            icon={<SliderIcon />}
            component={<ProgressBarInstance />}
            controls={[]}
        /> 
    )
}

export default ExampleProgressBar