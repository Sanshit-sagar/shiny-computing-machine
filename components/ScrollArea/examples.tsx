import { styled } from '../../stitches.config'

import { ExampleBase } from '../ExampleBase'
import { Separator } from '../Separator'
import * as Samples from './constants'
import { ScrollArea } from './index'
import { Text } from '../Text/Text'

import { BoxIcon } from '@radix-ui/react-icons'

const Container = styled('div', {
    height: 400,
    width: 450,
    overflowX: 'hidden',
    overflowY: 'hidden'
}); 

type SampleType = [string, { textSample1: string; }];

const TextBlock = ({ sample, i }: { sample: SampleType; i: number; }) => (
    <Text> {sample[1][`textSample${i + 1}`]} </Text>
);

const ScrollAreaInstance = () => (
    <Container>
        <ScrollArea> 
            {Object.entries(Samples).map((sample, index) => (
                <>
                    <TextBlock sample={sample} i={index} /> 
                    <Separator />
                </>
            ))}
        </ScrollArea>
    </Container>
); 

const ExampleScrollArea = () => {
    const controls = []

    return (
        <ExampleBase
            icon={<BoxIcon />}
            heading={'Scroll Area'}
            description={'Scroll area described here'}
            component={<ScrollAreaInstance />}
            controls={controls}
        />
    ); 
}

export default ExampleScrollArea
