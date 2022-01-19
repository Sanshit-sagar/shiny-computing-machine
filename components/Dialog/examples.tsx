import React from 'react'

import { StackIcon } from '@radix-ui/react-icons'

import Dialog from './index'
import { DialogVariant } from './types'

import Paragraph from '@/components/Text/Text'
import { Button } from '@/components/Button'
import { ExampleBase } from '@/components/ExampleBase'

export const DialogInstance = ({ defaultOpen = false, portalContainer }) => {
    const handleAction = () => {}

    return (
        <Dialog.Root 
            variant={"primary" as unknown as DialogVariant} 
            defaultOpen={defaultOpen} 
            onAction={handleAction}
        >
            <Dialog.Trigger> 
                <Button css={{ br: '$2' }}> open dialog </Button>
            </Dialog.Trigger>
            
            <Dialog.Overlay>
                <Dialog.Title> Dolor </Dialog.Title> 
                <Dialog.Subtitle> 
                    Eiusmod irure ad dolor ex. 
                </Dialog.Subtitle>
                <Paragraph> 
                    Incididunt deserunt reprehenderit dolor eu nostrud elit excepteur in sint. Dolor id do excepteur aliqua consectetur qui aute. Veniam ipsum sunt et magna in sunt enim sunt. Reprehenderit pariatur incididunt velit ullamco nostrud. Aliqua incididunt laborum elit sit.
                    Dolor nostrud minim amet ad eu occaecat mollit nisi laborum. Nulla sunt non sunt esse sint ex tempor sunt. Ad incididunt cupidatat consequat occaecat irure. Nostrud id id nulla eiusmod proident amet commodo anim ex. Occaecat amet reprehenderit sint occaecat cupidatat dolor et. Commodo est pariatur esse amet reprehenderit ipsum do deserunt ex aute ad cupidatat tempor. Ut nulla sint culpa laboris dolor reprehenderit
                    Sint pariatur magna incididunt est incididunt. Sint ad duis aliqua consectetur sunt ad ex proident tempor id commodo laboris sit. Nulla voluptate cupidatat fugiat cupidatat officia irure ut id velit aliqua nulla voluptate. Tempor nisi nulla sunt ea.
                    Ex ut ullamco ut pariatur ipsum consectetur. Tempor ea labore veniam mollit in incididunt nostrud adipisicing eiusmod id exercitation veniam. Deserunt in magna laboris ea ut excepteur irure consectetur velit. Ea reprehenderit ea enim sit consequat tempor enim culpa proident irure ullamco est irure ea.
                    Ipsum elit occaecat commodo nostrud magna ut magna magna non incididunt aute. Est in ea exercitation dolor nisi tempor dolore id dolore ullamco dolor amet. Aliquip ipsum labore mollit officia. Excepteur amet non qui dolore sunt ut velit ea enim consequat et ipsum. Deserunt nulla incididunt dolore aliqua aute excepteur veniam ea.
                </Paragraph> 
            </Dialog.Overlay>
        </Dialog.Root>  
    )
}

const ExampleDialog = () => (
    <ExampleBase
        heading={'Dialog'}
        description={''}
        icon={<StackIcon />}
        component={<DialogInstance />} 
        controls={[]}
    />
)

export default ExampleDialog