import Tooltip from './index'
import { StyledTooltipTrigger } from './styles'

import { Flex } from '@/components/Flex'
import { ExampleBase } from '@/components/ExampleBase'
import { RocketIcon, ChatBubbleIcon } from '@radix-ui/react-icons'

const SampleTooltipContent = () => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$2', p: 0, m: 0 }}>
        <RocketIcon /> Moonship
    </Flex>
)

export const TooltipWithDelay = () => (
    <Tooltip.Root isLoading={true} isDisabled={false} placement="top">
        <Tooltip.Trigger>
            <StyledTooltipTrigger> Hover me </StyledTooltipTrigger>
        </Tooltip.Trigger> 
        <Tooltip.Content>
            <SampleTooltipContent /> 
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