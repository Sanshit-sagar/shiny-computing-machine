import { Button } from '@/components/Button'
import { RocketIcon } from '@radix-ui/react-icons'

export const ButtonInstance = () => (
    <Button size="large" style="outline" prefix={<RocketIcon />} suffix={<RocketIcon />}> 
        Launch 
    </Button>
)

