import { Flex } from '@/components/Flex'
import { H4 } from '@/components/Text/Heading'
import { ExampleBase } from '@/components/ExampleBase'

import { StyledLabel } from './styles'
import CodeInputBasic from './CodeInputInstances'

import { CodeIcon } from '@radix-ui/react-icons'

export const CodeInputInstance = () => {
    const expected = '123123'

    return (
        <Flex css={{ fd: 'column', jc: 'flex-start', ai: 'flex-end', gap: '$2' }}> 
        
        
        
            <StyledLabel htmlFor="code-input"> 
                code&emsp;<span>expected: {expected}</span>
            </StyledLabel>
            <CodeInputBasic id="code-input" expected={expected} />
        </Flex> 
    )
}


const ExampleCodeInput = () => {

    return (
        <ExampleBase
            heading={'Code Input'}
            description={''}
            icon={<CodeIcon />}
            component={<CodeInputInstance /> }
            controls={[]}
        />
    )
}

ExampleCodeInput.displayName = 'ExampleCodeInput'
export default ExampleCodeInput
