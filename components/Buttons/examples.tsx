import { SunglassesIcon } from '@/components/Icons'

import { Flex } from '@/components/Flex'

import { StyledButton } from './styles'
import ClippedButton from './ClippedButton'
import { Button as DefaultButton } from './DefaultButton'

const DefaultIconButton = (props) => (
    <StyledButton icon={true} variant="outlined" {...props} />
)

const ClippedButtons = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <ClippedButton size='0' variant="secondary" {...props} />
        <ClippedButton size='1' variant="primary" {...props} />
        <ClippedButton size='2' variant="outlined" {...props} />
    </Flex>
)

const BevelEdgedButtons = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <StyledButton code="011100" variant="secondary" {...props} />
        <StyledButton code="011101" variant="primary" {...props} />
        <StyledButton code="011110" variant="outlined" {...props} />
    </Flex>
)

const RoundedButtons = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <StyledButton code="0100" variant="secondary" {...props} /> 
        <StyledButton code="0101" variant="primary" {...props} /> 
        <StyledButton code="0110" variant="outlined" {...props} /> 
    </Flex>
)

const OvularButtons = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <StyledButton code="1000" variant="secondary" {...props} /> 
        <StyledButton code="1001" variant="primary" {...props} /> 
        <StyledButton code="1010" variant="outlined" {...props} /> 
    </Flex>
)

const CircularButtons = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <StyledButton code="1100" variant="secondary" {...props} /> 
        <StyledButton code="1101" variant="primary" {...props} /> 
        <StyledButton code="1110" variant="outlined" {...props} /> 
    </Flex>
)

export const ButtonsInstance = () => (
    <DefaultButton shape="rounded" size="xs" isDisabled={true} isLoading={true}>
        <SunglassesIcon /> yoyo
    </DefaultButton>
)