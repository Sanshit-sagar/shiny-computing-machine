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

export const MultiToggleInstance = () => {
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