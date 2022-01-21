import { ChatBubbleIcon } from '@radix-ui/react-icons'

import { Button } from "@/components/Button"
import { ExampleBase } from '@/components/ExampleBase'

import { TooltipTrigger } from './index'


export const TooltipInstance = () => (
    <TooltipTrigger defaultOpen={true} delay={100} content="Primary Tooltip">
        <Button variant="primary"> Protip: Hover me! </Button>
    </TooltipTrigger> 
)

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