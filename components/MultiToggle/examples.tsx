import React from 'react'
import { MultiToggle } from './index'
import { ExampleBase } from '@/components/ExampleBase'
import { 
    BorderLeftIcon, 
    BorderRightIcon, 
    BorderTopIcon, 
    BorderAllIcon, 
    BorderNoneIcon, 
    BorderBottomIcon, 
    ValueIcon 
} from '@radix-ui/react-icons'

import {
    AppleIcon,
    EarbudsIcon
} from '@/components/Icons'


export const DualToggle = () => {
    const [selected, setSelected] = React.useState<string>('Apple Music')
    
    const handleChange = (updatedSelection: string) => setSelected(updatedSelection)

    return (
        <MultiToggle
            values={[
                { icon: <AppleIcon />, value: 'Apple Music' },
                { icon: <EarbudsIcon />, value: 'Your Library' }
            ]}
            onChange={handleChange}
            selection={selected}
        /> 
    )
}

export const TriToggle = () => {
    const [selected, setSelected] = React.useState<string>('Toggle')
    
    const handleChange = (updatedSelection: string) => setSelected(updatedSelection)

    return (
        <MultiToggle
            values={[
                { value: 'Toggle' },
                { value: 'Submit' },
                { value: 'Cancel' }
            ]}
            onChange={handleChange}
            selection={selected}
        /> 
    )
}

export const PluresToggle = () => {
    const [selected, setSelected] = React.useState<string>('left')
 
    const onChange = (updatedSelection: string) => setSelected(updatedSelection)
    
    return (
        <MultiToggle 
            values={[
                { icon: <BorderLeftIcon />, value: 'left' },
                { icon: <BorderRightIcon />, value: 'right' },
                { icon: <BorderTopIcon />, value: 'top' },
                { icon: <BorderBottomIcon />, value: 'bottom' },
                { icon: <BorderAllIcon />, value: 'all' },
                { icon: <BorderNoneIcon />, value: 'none' },
            ]} 
            onChange={onChange}
            selection={selected}
        />
    )
}

export const MultiToggleInstance = () => <DualToggle /> 

const ExampleMultiToggle = () => {

    return (
        <ExampleBase
            heading={'Multi-Toggle'}
            description={''}
            icon={<ValueIcon />}
            component={<MultiToggleInstance />}
            controls={[]}
        /> 
    )
}

export default ExampleMultiToggle