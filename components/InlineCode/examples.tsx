
import { CodeIcon } from '@radix-ui/react-icons'
import StateFactory from '@/utils/StateFactory'
import { ExampleBase } from '@/components/ExampleBase'

import { InlineCode, InlineCodeProps } from './index'

const init = (): InlineCodeProps => {
    const initInlineCodeState: InlineCodeProps = {
        code: 'var a = b; return a;',
    }

    return initInlineCodeState
}

export const InlineCodeInstance = () => {
    const { state } = StateFactory<InlineCodeProps>(init)

    return <InlineCode {...state} />
}

const ExampleInlineCode = () => {
   

    return (
        <ExampleBase
            heading={'Inline Code'}
            description={'Inline Code described here'}
            icon={<CodeIcon />}
            component={<InlineCodeInstance />}
            controls={[]}
        />
    )
}

export default ExampleInlineCode