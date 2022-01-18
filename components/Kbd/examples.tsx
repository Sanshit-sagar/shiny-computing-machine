import { ExampleBase } from '@/components/ExampleBase'
import { Flex } from '@/components/Flex'
import { Grid } from '@/components/Grid'
import { Box } from '@/components/Box'

import { Kbd, Container } from './index'
import type { KbdProps } from './index'
import StateFactory from '@/utils/StateFactory'

import { ChatBubbleIcon } from '@radix-ui/react-icons'

export const KbdInstance = () => {

    return (
        <Box>
            <Flex css={{ mb: '31px' }}>
                <Kbd>Space</Kbd>
            </Flex>
            <Flex css={{ mb: '31px' }}>
                <Kbd>Enter</Kbd>
            </Flex>
            <Flex css={{ mb: '31px' }}>
                <Kbd>Tab</Kbd>
            </Flex>
        </Box>
    )
}

export const KbdInstances = () => (
    <Container>
        <Grid css={{ gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <Box>
                <Flex css={{ mb: '31px' }}>
                    <Kbd>Space</Kbd>
                </Flex>
                <Flex css={{ mb: '31px' }}>
                    <Kbd>Enter</Kbd>
                </Flex>
                <Flex css={{ mb: '31px' }}>
                    <Kbd>Tab</Kbd>
                </Flex>
                <Flex css={{ mb: '31px' }}>
                    <Kbd>Shift + Tab</Kbd>
                </Flex>
                <Flex css={{ mb: '31px' }}>
                    <Kbd>Esc</Kbd>
                </Flex>
            </Box>
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
    // const { state, update } = StateFactory<KbdProps>({})

    // const mutableState: KbdState = {
    //     ...state,
    //     onChange: (event: React.FormEvent<HTMLInputElement>) => update('input', event.currentTarget.value)
    // }

    return (
        <ExampleBase
            heading={'Kbd'}
            icon={<ChatBubbleIcon />}
            description={'Kbd description here'}
            component={<KbdInstances />}
            controls={[]}
        />
    );
}

export default ExampleKbd;