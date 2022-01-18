import { ExampleBase } from '@/components/ExampleBase'
import { Tile } from './Tile'
import { Splitter } from './Splitter'
import { SplitDirections } from './interfaces'

import { ViewVerticalIcon } from '@radix-ui/react-icons'

const SplitterInstance = () => (
    <Tile>
        <Splitter direction={SplitDirections.HORIZONTAL}>
            <Tile>
                <Splitter direction={SplitDirections.VERTICAL}>
                    <Tile/>
                    <Splitter direction={SplitDirections.HORIZONTAL}>
                        <Tile> ONE </Tile>
                        <Tile> TWO </Tile>
                        <Tile> THREE </Tile>
                    </Splitter>
                </Splitter>
            </Tile>
        </Splitter>
    </Tile>
)

const ExampleSplitter = () => {

    return(
        <ExampleBase
            heading={'Splitter'}
            description={'Splitter description here'}
            icon={<ViewVerticalIcon />}
            component={<SplitterInstance />}
            controls={[]}
        />
    )
}

export default ExampleSplitter