import { ExampleBase } from '@/components/ExampleBase'
import { NotificationHub } from '@/components/Notification'

import { ChatBubbleIcon } from '@radix-ui/react-icons'

const ExampleNotification = () => {

    return (
        <ExampleBase
            heading={'Notification'}
            description={'Notification description here'}
            icon={<ChatBubbleIcon />}
            component={<NotificationHub />}
            controls={[]}
        /> 
    )
}


export default ExampleNotification;