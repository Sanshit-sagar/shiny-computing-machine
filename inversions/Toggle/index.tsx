import { useState, useCallback, useMemo } from 'react'

import { IToggleContext, ComposableComponentProps, ToggleProps } from './types'
import { useEffectAfterMount, useToggleContext } from './utils'
import ToggleContext from './ToggleContext'
import { Switch } from './Switch'


export const Toggle = ({  
    selected, 
    onSelectedChange,
    defaultSelected, 
    children,
}: ToggleProps) => {
    const [on, setOn] = useState<boolean>(selected || defaultSelected) 

    const onToggle = useCallback(() => (
        setOn(!selected)
    ), [])

    useEffectAfterMount(() => {
        setOn(selected)
        onSelectedChange(on)
    }, [selected])

    const toggleContext: IToggleContext = useMemo(() => ({
        selected,
        onSelectedChange,
        defaultSelected,
        onToggle
    }), [selected])

    return (
        <ToggleContext.Provider value={toggleContext}>
            {children}
        </ToggleContext.Provider>
    )
}

export const On = ({ children }: ComposableComponentProps) => {
    const { selected } = useToggleContext()
    return selected ? children : null
}

export const Off = ({ children }: ComposableComponentProps) => {
    const { selected } = useToggleContext()
    return selected ? null : children
}

export const Button = (props: ComposableComponentProps) => {
    const { selected, onSelectedChange } = useToggleContext()

    return (
        <Switch 
            selected={selected} 
            onClick={onSelectedChange} 
            aria-label="sampleSwitch" 
            {...props} 
        />
    )
}

Toggle.On = On
Toggle.Off = Off
Toggle.Button = Button
