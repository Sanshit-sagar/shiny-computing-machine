import { Children, cloneElement } from 'react'
import { 
    RocketIcon, 
    DribbleIcon,
    SunglassesIcon, 
    HeartEyesEmojiIcon
} from '@/components/Icons'

import { Flex } from '@/components/Flex'
import { Button } from './DefaultButton'

export const ButtonGroup = ({ children }) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$2' }}>
        {['xs', 's', 'm', 'l'].map((size) => Children.toArray(children).map((child, index) => {
            return index === 0 
                ? cloneElement(child, {
                    size,
                    isDisabled: false,
                    isLoading: true,
                }) : null
        }))}
    </Flex>
)

const contentMap = [
    { shape: 'sharp', content: <> <DribbleIcon /> Tzatziki! </>},
    { shape: 'rounded', content: <> <SunglassesIcon /> howdy! </> },
    { shape: 'oval', content: <> <RocketIcon /> Mooon! </> },
    { shape: 'circular', content: <HeartEyesEmojiIcon /> }
]

export const ButtonsInstance = () => (
    <Flex css={{ fd: 'column', jc: 'flex-start', ai: 'stretch', gap: '$2' }}>
        {contentMap.map((entry) => (
            <ButtonGroup> 
                <Button shape={entry.shape}> 
                    {cloneElement(entry.content, {

                    })}
                </Button> 
            </ButtonGroup>
        ))}
    </Flex>
)