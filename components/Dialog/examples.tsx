import React, { useState } from 'react'


import PButton from '@/components/Button'
import Paragraph from '@/components/Text/Text'
import { ExampleBase } from '@/components/ExampleBase'

import Dialog from './index'
import { CloseType, UnInitCloseType, DialogVariant } from './types'

import { StackIcon } from '@radix-ui/react-icons'

const InfoIcon = () => <i className="bi bi-info"></i>
const AlertIcon = () => <i className="bi bi-exclamation-lg"></i>
const SuccessIcon = () => <i className="bi bi-check-lg"></i>


const DialogInstance = () => {
    const [closeType, setCloseType] = useState<UnInitCloseType>('na')

    const handleAction = (mutation: CloseType) => setCloseType(mutation)

    return (
        <Dialog.Root variant={"primary" as unknown as DialogVariant} onAction={handleAction}>
            <Dialog.Trigger> 
                <PButton.Root>
                    <PButton.Prefix radius="bottomLeftRound" variant="info"> <InfoIcon /> </PButton.Prefix> 
                    <PButton.Base variant="success"> <SuccessIcon /> {closeType} </PButton.Base>
                    <PButton.Suffix radius="topRightRound" variant="danger"> <AlertIcon /> </PButton.Suffix>
                </PButton.Root>
            </Dialog.Trigger>
            
            <Dialog.Overlay>
                <Dialog.Title> Dolor </Dialog.Title> 
                <Dialog.Subtitle> 
                    Eiusmod irure ad dolor ex. 
                </Dialog.Subtitle>
                <Paragraph> 
                    Incididunt deserunt reprehenderit dolor eu nostrud elit excepteur in sint. Dolor id do excepteur aliqua consectetur qui aute. Veniam ipsum sunt et magna in sunt enim sunt. Reprehenderit pariatur incididunt velit ullamco nostrud. Aliqua incididunt laborum elit sit.
                    
                    Dolor nostrud minim amet ad eu occaecat mollit nisi laborum. Nulla sunt non sunt esse sint ex tempor sunt. Ad incididunt cupidatat consequat occaecat irure. Nostrud id id nulla eiusmod proident amet commodo anim ex. Occaecat amet reprehenderit sint occaecat cupidatat dolor et. Commodo est pariatur esse amet reprehenderit ipsum do deserunt ex aute ad cupidatat tempor. Ut nulla sint culpa laboris dolor reprehenderit.
                    
                    Sint pariatur magna incididunt est incididunt. Sint ad duis aliqua consectetur sunt ad ex proident tempor id commodo laboris sit. Nulla voluptate cupidatat fugiat cupidatat officia irure ut id velit aliqua nulla voluptate. Tempor nisi nulla sunt ea.

                    Ex ut ullamco ut pariatur ipsum consectetur. Tempor ea labore veniam mollit in incididunt nostrud adipisicing eiusmod id exercitation veniam. Deserunt in magna laboris ea ut excepteur irure consectetur velit. Ea reprehenderit ea enim sit consequat tempor enim culpa proident irure ullamco est irure ea.

                    Ipsum elit occaecat commodo nostrud magna ut magna magna non incididunt aute. Est in ea exercitation dolor nisi tempor dolore id dolore ullamco dolor amet. Aliquip ipsum labore mollit officia. Excepteur amet non qui dolore sunt ut velit ea enim consequat et ipsum. Deserunt nulla incididunt dolore aliqua aute excepteur veniam ea.
                </Paragraph> 
            </Dialog.Overlay>
        </Dialog.Root>  
    )
}
const ExampleDialog = () => {
    
    return (
        <ExampleBase
            heading={'Dialog'}
            description={'Description of a dialog here'}
            icon={<StackIcon />}
            component={<DialogInstance />} 
            controls={[]}
        />
    );
}

export default ExampleDialog