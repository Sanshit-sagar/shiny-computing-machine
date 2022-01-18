import StateFactory from '@/utils/StateFactory'
import { ExampleBase } from '@/components/ExampleBase'
import { InlineCode, InlineCodeProps } from './index'
import { CodeIcon } from '@radix-ui/react-icons'

const init = (): InlineCodeProps => {
    const initInlineCodeState: InlineCodeProps = {
        children: 'var a = b; return a;',
    }
    return initInlineCodeState
}

const ExampleInlineCode = () => {
    const { state } = StateFactory<InlineCodeProps>(init)

    return (
        <ExampleBase
            heading={'Inline Code'}
            description={'Inline Code described here'}
            icon={<CodeIcon />}
            component={<InlineCode {...state} />}
            controls={[]}
            state={state}
        />
    )
}

export default ExampleInlineCode