import React from 'react'
import { ExampleBase } from '@/components/ExampleBase'
import { Container } from '@/components/Container'
import { BoxIcon } from '@radix-ui/react-icons'


const ExampleContainer = () => {

    return (
        <ExampleBase
            heading={'Container'} 
            description={''}
            icon={<BoxIcon />}
            component={<Container />}
            controls={[]}
        />
    )
}

export default ExampleContainer