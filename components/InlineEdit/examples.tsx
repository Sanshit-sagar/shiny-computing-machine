import React from 'react'
import StateFactory from '@/utils/StateFactory'

import { InlineEdit } from './InlineEdit'
import { InlineEditProps } from './interfaces'

import { InputIcon } from '@radix-ui/react-icons'
import { ExampleBase } from '@/components/ExampleBase'

const InlineEditInstance = (props) => <InlineEdit {...props} />




const init = (): InlineEditProps => {
    return {
        value: "Fee Fi fo fum, I smell pancakes and your bum",
        onChange: (update: string) => {} // TODO: Clarify this
    }
}

const ExampleInlineEdit = () => {
    const { state, update } = StateFactory<InlineEditProps>(init)

    const mutableState = {
        ...state,
        onChange: (value: string) => update('value', value)
    }

    return (
        <ExampleBase 
            heading={'Inline Edit'}
            description={'Key bindings and more!'}
            icon={<InputIcon />}
            component={<InlineEditInstance {...mutableState} />}
            controls={[]}
            state={mutableState}
        />
    )
}

export default ExampleInlineEdit