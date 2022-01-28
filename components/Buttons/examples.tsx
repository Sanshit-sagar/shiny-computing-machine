import { 
    SendIcon,
    RobotIcon,
    TrashIcon,  
    RocketIcon,
    SunglassesIcon
} from '@/components/Icons'

import { AccessibleButtonBase as StyledButtonBase } from './styles'

import { Flex } from '@/components/Flex'
import { Boop, Slide } from '@/components/Animated'
import ClippedButton from './ClippedButton'


const DefaultIconButton = (props) => (
    <StyledButtonBase icon={true} variant="outlined" {...props} />
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
        <StyledButtonBase code="011100" variant="secondary" {...props} />
        <StyledButtonBase code="011101" variant="primary" {...props} />
        <StyledButtonBase code="011110" variant="outlined" {...props} />
    </Flex>
)

const RoundedButtons = (props) => (
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


        <BevelEdgedButtons>
            <SunglassesIcon /> yoyo 
        </BevelEdgedButtons>

        <RoundedButtons> 
            Danger <TrashIcon /> 
        </RoundedButtons>

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

