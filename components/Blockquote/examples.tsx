import { ExampleBase } from '@/components/ExampleBase'
import { Blockquote } from './Blockquote'
import { quotes } from './data'
import { Card } from '@/components/Card/Card'

import { QuoteIcon } from '@radix-ui/react-icons'

const ExampleBlockquote = () => {
    return (
        <ExampleBase
            heading={'Blockquote'}
            description={''}
            icon={<QuoteIcon />}
            component={<Blockquote element={Card} quote={quotes[0]} />}
            controls={[]}
        />
    )
}

export default ExampleBlockquote