import { TagInput } from './index'
import { ExampleBase } from '../ExampleBase'

import { BookmarkIcon } from '@radix-ui/react-icons'


const ExampleTagInput = () =>  {
    let controls = []

    return (
        <ExampleBase 
            size='fill'
            icon={<BookmarkIcon /> }
            heading={'Tag Input'}
            description={'Tag input described here'}
            component={<TagInput tags={['Oxygen', 'Platinum']} />}
            controls={controls} 
        />
    );
}

export default ExampleTagInput