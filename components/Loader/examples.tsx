import React, { useState } from 'react'

import { ExampleBase } from "@/components/ExampleBase"
import { StopIcon, UpdateIcon } from '@radix-ui/react-icons'
import { Collection } from './index'

const ExampleLoader = () => {
    const [isDisabled, setDisabled] = useState<boolean>(false)

    const controls = [{
        type: 'switch',
        value: isDisabled,
        onChange: (val: boolean) => setDisabled(val),
        title: 'Disable',
        description: 'disable the loader',
        icon: <StopIcon />
    }];

    return (
        <ExampleBase
            heading={'Loading'}
            description={'Loader described here'}
            icon={<UpdateIcon />}
            component={<Collection />}
            controls={controls}
        /> 
    );
}

export default ExampleLoader 