
import { Flex } from '@/components/Flex'
import { Grid } from '@/components/Grid'
import { Box } from '@/components/Box'
import { ExampleBase } from '@/components/ExampleBase'

import { Kbd, Container } from './index'

import { ChatBubbleIcon } from '@radix-ui/react-icons'
import {
    CommandIcon,
    ShiftIcon,
    AltIcon,
    OptionIcon,
    UpIcon,
    CapsLockIcon,
    PowerIcon,
    BackspaceIcon,
    ReturnIcon
} from '@/components/Icons'

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

const row0 = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+' ]
const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'l', 'o', 'p', '{', '}', '|']
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', `"`]
const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/']

export const KbdInstance = () => (
    <Flex css={{ width: 'fit-content', height: 'fit-content', fd: 'column', jc: 'flex-start', ai: 'stretch', gap: '$2' }}>
        <Flex css={{ fd: 'column', jc: 'flex-start', ai: 'flex-end', gap: '$1' }}>
            <Kbd size='1'> <PowerIcon /> </Kbd> 
        </Flex>

        <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$1' }}>
            {row0.map((row0Item, index) => (
                <Kbd size='2' key={`row-0-${index}`}> {row0Item} </Kbd>
            ))}
            <Kbd> <BackspaceIcon /> </Kbd>
        </Flex>

        <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center'}}>
            <Kbd size='2'> tab </Kbd>
            
            {row1.map((row1Item, index) => (
                <Kbd size='2' key={`row-1-key-${index}`}> {row1Item} </Kbd>
            ))}
        </Flex>

        <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center' }}>
            <Kbd size='1'> caps <CapsLockIcon /> </Kbd>

            {row2.map((row2Item, index) => (
                <Kbd size='2' key={`row-2-key${index}`}> {row2Item} </Kbd>
            ))}

            <Kbd size='1'> enter <ReturnIcon /> </Kbd>
        </Flex>

        <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center' }}>
            <Kbd size='2'>  Shift <ShiftIcon /> </Kbd>

            {row3.map((row3Item, index) => (
                <Kbd size='2' key={`row-3-key${index}`}> {row3Item} </Kbd>
            ))}

            <Kbd size='2'> <ShiftIcon /> Shift </Kbd>
        </Flex>

        <Flex css={{ fd: 'row', jc: 'center', ai: 'center', gap: '$2' }}>
            <Kbd> <AltIcon /> </Kbd>
            <Kbd> <CommandIcon /> </Kbd>
            <Kbd width="space"> Space </Kbd>
            <Kbd> <CommandIcon /> </Kbd>
            <Kbd> <OptionIcon /> </Kbd>
        </Flex>
    </Flex>
)



const ExampleKbd = () => {

    return (
        <ExampleBase
            heading={'Kbd'}
            icon={<ChatBubbleIcon />}
            description={'Kbd description here'}
            component={<KeyboardReplica />}
            controls={[]}
        />
    )
}

export default ExampleKbd;