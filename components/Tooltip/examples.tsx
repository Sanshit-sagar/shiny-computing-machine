import Tooltip from './index'

import { Flex } from '@/components/Flex'
import { ExampleBase } from '@/components/ExampleBase'
import { RocketIcon, ChatBubbleIcon } from '@radix-ui/react-icons'

export const TooltipWithDelay = () => (
    <Tooltip.Root isLoading={true} isDisabled={false} placement="top">
        <Tooltip.Trigger>
            Destination
        </Tooltip.Trigger> 
        <Tooltip.Content>
            The Evil Rabbit Jumped over the Fence
        </Tooltip.Content>
    </Tooltip.Root>
)


export const TooltipInstance = () => <TooltipWithDelay /> 

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