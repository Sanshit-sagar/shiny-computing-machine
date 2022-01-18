
import React from 'react' 
import { ExampleBase } from '@/components/ExampleBase'
import { ButtonIcon } from '@radix-ui/react-icons'


const ExampleToggleButton = () => {
    
    return (
        <ExampleBase 
            heading={'Toggle Button'}
            description={''}
            icon={<ButtonIcon />}
            component={
                // TODO 
                <ButtonIcon />
            }
            controls={[]}
        />
    )
}

export default ExampleToggleButton