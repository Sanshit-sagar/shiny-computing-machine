import { ExampleBase } from '@/components/ExampleBase'
import { IdCardIcon } from '@radix-ui/react-icons'
import { Card } from './index'
import { ControlPanel } from '@/components/ControlPanel'

const CardInstance = () => (
    <Card as="button">
        <ControlPanel /> 
    </Card>
)

const ExampleCard = () => {

    return (
        <ExampleBase
            heading={'Card'}
            description={'Card described here'}
            component={<CardInstance /> }
            icon={<IdCardIcon />}
            controls={[]}
        />
    )
}

export default ExampleCard