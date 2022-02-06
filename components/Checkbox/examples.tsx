import Checkbox from '@/components/Checkbox'
import { RobotIcon } from '@/components/Icons'

export const CheckboxInstance = () => (
    <Checkbox.Root defaultSelected={false}>
        <Checkbox.On shape='square' size={2}> <RobotIcon /> </Checkbox.On> 
        <Checkbox.Off shape='square' size={2} />
        <Checkbox.Label> Apocalypse </Checkbox.Label>  
    </Checkbox.Root>
) 


// pass defaults to root or to individual subcomponents -> overwrite w/ merge props 
// icon specified as param to root, or as a child to subcomponents
// create an async version with <Async /> 
// animation, animationDuration etc. 
// loading, loading effect around border 