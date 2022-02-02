import React, { useState } from 'react' 

import { Ripple } from './Ripple'
import { Spinner } from './Spinner'
import { Equalizer } from './Equalizer'
import { Counter } from './Counter'

import { ExampleBase } from '@/components/ExampleBase'
import { SymbolIcon } from '@radix-ui/react-icons'

export const SpinnerInstance = () => <Counter /> 

const ExampleSpinner = () => {

    return (
        <ExampleBase
            heading={'Spinner'}
            description={'Spinner description here'}
            icon={<SymbolIcon />}
            component={<SpinnerInstance />}
            controls={[]}
        />
    );
}

export default ExampleSpinner