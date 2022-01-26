
import { Flex } from '@/components/Flex'
import { Grid } from '@/components/Grid'
import { Box } from '@/components/Box'
import { ExampleBase } from '@/components/ExampleBase'

import { Kbd, Container } from './index'
import { KbdInstance } from './KbdInstance'
import { ChatBubbleIcon } from '@radix-ui/react-icons'

export const KbdInstances2 = () => {

    return (
        <Flex css={{ bc: 'transparent', fd: 'column', jc: 'flex-start', ai: 'stretch', gap: '31px' }}>
            <Kbd>Space</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Tab</Kbd>
            <Kbd>Shift + Tab</Kbd>
            <Kbd>Esc</Kbd>
        </Flex>
    )
}

export const KbdInstances = () => (
    <Container>
        <Grid css={{ gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <Flex css={{ bc: 'transparent', fd: 'column', jc: 'flex-start', ai: 'stretch', gap: '31px' }}>
                <Kbd>Space</Kbd>
                <Kbd>Enter</Kbd>
                <Kbd>Tab</Kbd>
                <Kbd>Shift + Tab</Kbd>
                <Kbd>Esc</Kbd>
            </Flex>

            <Box>
                <Flex css={{ mb: '$5' }}>
                    <Kbd>I</Kbd>
                    <Kbd>A</Kbd>
                    <Kbd>W</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd>⇧</Kbd>
                    <Kbd>⌘</Kbd>
                    <Kbd>A</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd>⌘ + Tab</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd width="command">⌘</Kbd>
                    <Kbd>Tab</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd width="shift">⇧</Kbd>
                    <Kbd>↑</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd width="shift">⇧</Kbd>
                    <Kbd>Tab</Kbd>
                </Flex>
                <Flex css={{}}>
                    <Kbd width="space">Space</Kbd>
                </Flex>
            </Box>
            <Box>
                <Flex css={{ mb: '$5' }}>
                    <Kbd size="1">I</Kbd>
                    <Kbd size="1">A</Kbd>
                    <Kbd size="1">W</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd size="1">⇧</Kbd>
                    <Kbd size="1">⌘</Kbd>
                    <Kbd size="1">W</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd size="1">⌘ + Tab</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd size="1" width="command">
                    ⌘
                    </Kbd>
                    <Kbd size="1">Tab</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd size="1" width="shift">
                    ⇧
                    </Kbd>
                    <Kbd size="1">↑</Kbd>
                </Flex>
                <Flex css={{ mb: '$5' }}>
                    <Kbd size="1" width="shift">
                    ⇧
                    </Kbd>
                    <Kbd size="1">Tab</Kbd>
                </Flex>
                <Flex css={{}}>
                    <Kbd size="1" width="space">
                    Space
                    </Kbd>
                </Flex>
            </Box>
        </Grid>
    </Container>
);


const ExampleKbd = () => {

    return (
        <ExampleBase
            heading={'Kbd'}
            icon={<ChatBubbleIcon />}
            description={'Kbd description here'}
            component={<KbdInstance />}
            controls={[]}
        />
    )
}

export default ExampleKbd;