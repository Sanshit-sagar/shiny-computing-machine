import { 
    RobotIcon,
    TrashIcon, 
    SendIcon, 
    RocketIcon 
} from '@/components/Icons'

import { AccessibleButtonBase as StyledButtonBase } from './styles'

import { Flex } from '@/components/Flex'
import { Boop, Slide } from '@/components/Animated'

const DefaultIconButton = (props) => (
    <StyledButtonBase icon={true} variant="outlined" {...props} />
)

const SmallDangerRoundedButton = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <StyledButtonBase code="0100" variant="secondary" {...props} /> 
        <StyledButtonBase code="0101" variant="primary" {...props} /> 
        <StyledButtonBase code="0110" variant="outlined" {...props} /> 
    </Flex>
)
const OvularButtons = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <StyledButtonBase code="1000" variant="secondary" {...props} /> 
        <StyledButtonBase code="1001" variant="primary" {...props} /> 
        <StyledButtonBase code="1010" variant="outlined" {...props} /> 
    </Flex>
)

const CircularButtons = (props) => (
    <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
        <StyledButtonBase code="1100" variant="secondary" {...props} /> 
        <StyledButtonBase code="1101" variant="primary" {...props} /> 
        <StyledButtonBase code="1110" variant="outlined" {...props} /> 
    </Flex>
)


export const ButtonsInstance = () => (
    <Flex css={{ fd: 'column', jc: 'flex-start', ai: 'center', gap: '$3' }}>

        <Slide color="transparent" x="30px" duration="800ms">
            <DefaultIconButton> 
                <RobotIcon /> 
            </DefaultIconButton>
        </Slide>

        <SmallDangerRoundedButton> 
            Danger <TrashIcon /> 
        </SmallDangerRoundedButton>

        <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
            <OvularButtons> 
                <SendIcon /> Success 
            </OvularButtons>
        </Flex>

        <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3' }}>
            <CircularButtons>
                <RocketIcon />
            </CircularButtons>
        </Flex>
    </Flex>


)

