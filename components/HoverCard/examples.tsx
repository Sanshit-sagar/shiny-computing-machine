import { ChatBubbleIcon } from '@radix-ui/react-icons'
import { styled } from 'stitches.config'
import Popover from './index'

import { Flex } from '@/components/Flex'
import { ExampleBase } from '@/components/ExampleBase'
import { Placements } from './constants'
import { 
    StyledCard,
    FollowButton, 
    PopoverTrigger, 
    PopoverImage, 
    StyledPopoverText as Text 
} from './styles'

const StyledTwitterCard = styled('div', {
    width: '300px', 
    
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

   
   

    borderColor: 'inherit',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: 'inherit',
    padding: '20px'
})

export const TwitterHoverCardClone = () => (
    <StyledTwitterCard>
        <FollowButton> Follow </FollowButton>  
        <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <PopoverImage size="large" src="https://avatars.githubusercontent.com/u/1134620?v=4" />

            <Flex css={{ flexDirection: 'column', gap: 15 }}>
                <Text>
                    <Text bold> Composable UI </Text>
                    <Text faded> @composable-euai </Text>
                </Text>
                <Text>
                    Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source.
                </Text>
                <Flex css={{ gap: 15 }}>
                    <Flex css={{ gap: 5 }}>
                        <Text bold> 20,187 </Text> 
                        <Text faded> Following </Text>
                    </Flex>
                    <Flex css={{ gap: 5 }}>
                        <Text bold> 22,965 </Text> 
                        <Text faded> Followers </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </StyledTwitterCard>
)

export const PopoverWithLoader = () => (
    <Popover.Root isLoading={false} isDisabled={false} placement="top">
        <Popover.Trigger element={PopoverTrigger} href="https://twitter.com/argyleink" target="_blank" rel="noreferrer noopener">
            <PopoverImage src="https://avatars.githubusercontent.com/u/1134620?v=4" />
        </Popover.Trigger> 
        <Popover.Content color="dark">
            <TwitterHoverCardClone /> 
        </Popover.Content>
    </Popover.Root>
)


export const PopoverInstance = () => <PopoverWithLoader /> 

const ExampleTooltip = () => {
    return (
        <ExampleBase
            heading={'Tooltip'}
            description={'Tooltip description here'}
            icon={<ChatBubbleIcon />}
            component={<PopoverInstance />}
            controls={[]}
        />
    )
}

export default ExampleTooltip