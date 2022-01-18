import { Key, useState } from 'react'

import { Card } from '@/components/Card'
import { ExampleBase } from '@/components/ExampleBase'
import { DropdownMenuIcon } from '@radix-ui/react-icons'
import { Collapsible } from './Collapsible'

export const CollapsibleInstance = () => {
   

    return (
        <Card.Wrapper>
            <Card.Body>
                <Collapsible defaultOpen={true} title="Heres the title">
                        Consectetur adipiscing elit pellentesque habitant morbi tristique.
                        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
                        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
                        et netus et. Elementum integer enim neque volutpat. Faucibus in ornare
                        quam viverra orci sagittis. Amet volutpat consequat mauris nunc congue
                        nisi vitae suscipit. Dui accumsan sit amet nulla. Proin sagittis nisl
                        rhoncus mattis. Enim nulla aliquet porttitor lacus. Arcu odio ut sem
                        nulla pharetra diam sit amet. Gravida rutrum quisque non tellus orci ac
                        auctor augue
                        
                        <Collapsible defaultOpen={false} title="Heres anotha one" >
                            Sunt ut exercitation qui quis id aliquip sunt. Exercitation sint nulla 
                            ut veniam enim do. Eu aliquip magna nulla irure nulla duis ullamco. 
                            Et adipisicing duis irure aliqua eiusmod tempor commodo qui mollit 
                            occaecat elit sint duis quis.
                        </Collapsible>
                       
                </Collapsible>
            </Card.Body>
        </Card.Wrapper>
    )
}

const ExampleCollapsible = () => {

    return (
        <ExampleBase
            heading="Collapsible"
            description=""
            icon={<DropdownMenuIcon />}
            component={<CollapsibleInstance />}
            controls={[]}
        />
    )
}

export default ExampleCollapsible