import { Flex } from '@/components/Flex'
import { ExampleBase } from '@/components/ExampleBase'
import { 
    RobotIcon,
    TrashIcon, 
    SendIcon, 
    RocketIcon 
} from '@/components/Icons'
import { AccessibleButtonBase as StyledButtonBase } from './styles'
import { NuBoop } from '@/components/Boop'

const DefaultIconButton = (props) => (
    <StyledButtonBase icon={true} variant="outlined" {...props} />
)

const SmallDangerRoundedButton = (props) => (
    <StyledButtonBase code="0100" theme="warning" {...props} /> 
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

        <NuBoop>
            <DefaultIconButton> 
                <RobotIcon /> 
            </DefaultIconButton>
        </NuBoop>

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

