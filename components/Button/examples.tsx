import { Button } from '@/components/Button'
import { BackpackIcon, TriangleDownIcon } from '@radix-ui/react-icons'

export const ButtonInstance = () => (
    <Button size="medium" style="outline" prefix={<BackpackIcon />} suffix={<TriangleDownIcon />}> 
        Options
    </Button>
)

export const SmallButton = (props) => (
    <Button size='small' {...props} />
)

export const MediumButton = (props) => (
    <Button size='medium' {...props} />
)

export const LargeButton = (props) => (
    <Button size='large' {...props} /> 
)

export const OutlineButton = (props) => (
    <Button style='outline' {...props} /> 
)

export const SmallOutlineButton = (props) => (
    <Button size='small' style='outline' {...props} /> 
)

