import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { ExampleBase } from '@/components/ExampleBase'

import Tooltip from './index'
import { Button } from '@/components/Buttons'
import { FloatingTooltip } from './floaters'

export const TooltipWithDelay = () => (
    <Tooltip.Trigger defaultOpen={true} delay={100} content="Primary Tooltip">
        <Button code="0100" variant="primary"> 
            Hover me
        </Button>
    </Tooltip.Trigger> 
)

export const TooltipInstance = () => <FloatingTooltip /> 

const ExampleTooltip = () => {
    return (
        <ExampleBase
            heading={'Tooltip'}
            description={'Tooltip description here'}
            icon={<ChatBubbleIcon />}
            component={<TooltipInstance />}
            controls={[]}
        />
    )
}

export default ExampleTooltip