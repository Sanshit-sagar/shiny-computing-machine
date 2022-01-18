import { useState } from 'react'

import { Button } from '@/components/Button'
import { ExampleBase } from "@/components/ExampleBase"
import { ChatBubbleIcon } from "@radix-ui/react-icons"

import dynamic from 'next/dynamic'

const PopoverTrigger = dynamic(
    () => import('@/components/Overlay/styles'), {
    ssr: false
})

const PopoverInstance = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleChange = () => {
        setIsOpen(!isOpen)
    }

    return (
        <PopoverTrigger />
    )
}

const ExamplePopover = () => {

    return (
        <ExampleBase
            heading={''}
            description={''}
            icon={<ChatBubbleIcon />}
            component={<PopoverInstance />}
            controls={[]}
        />
    )
}

export default ExamplePopover