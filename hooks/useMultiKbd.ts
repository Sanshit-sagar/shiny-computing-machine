import { useState, HTMLAttributes } from 'react' 
import { useKeyboard } from '@react-aria/interactions'
import { KeyboardEvent, KeyboardEvents } from '@/interfaces/Interactions'


type MultiKbdProps = KeyboardEvents & {}

type ConcurrentlyPressedState = {
    keyboardProps: HTMLAttributes<HTMLElement>;
    isKeyPressed: boolean;
    mostRecentKeyUp: string | undefined;
    mostRecentKeyDown: string | undefined;
    pressedKeys: Set<string>;
    pressedCount: number; 
}

const noop = (_event: KeyboardEvent) => {}

export const useMultiKbd = ({
    onKeyUp: handleKeyUp = noop,
    onKeyDown: handleKeyDown = noop
}: MultiKbdProps): ConcurrentlyPressedState => {
    
    const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false)
    const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set([]))
    const [mostRecentKeyUp, setMostRecentKeyUp] = useState<string | undefined>(undefined)
    const [mostRecentKeyDown, setMostRecentKeyDown] = useState<string | undefined>(undefined)

    const press = () => setIsKeyPressed(true)
    const unpress = () => setIsKeyPressed(false) 

    const addPressedKey = (key: string) => {
        if(!pressedKeys.has(key)) {
            setPressedKeys(pressedKeys.add(key))
        }
    }

    const removePressedKey = (key: string) => {
        if(!pressedKeys.has(key)) {
            pressedKeys.delete(key)
            setPressedKeys(pressedKeys)
        }
    }

    const updateMostRecentKeyDown = (key: string) => {
        if(mostRecentKeyDown !== key) {
            setMostRecentKeyDown(key)
        }
    }

    const updateMostRecentKeyUp = (key: string) => {
        if(mostRecentKeyUp !== key) {
            setMostRecentKeyUp(key)
        }
    }

    const pressedCount: number = [...pressedKeys].length

    const { keyboardProps } = useKeyboard({
        onKeyUp: (event: KeyboardEvent) => {
            unpress()
            removePressedKey(event.key)
            updateMostRecentKeyUp(event.key)
            handleKeyUp(event)
        },
        onKeyDown: (event: KeyboardEvent) => {
            press()
            addPressedKey(event.key)
            updateMostRecentKeyDown(event.key)
            handleKeyDown(event)
        }
    })

    return {
        keyboardProps,
        isKeyPressed,
        mostRecentKeyUp,
        mostRecentKeyDown,
        pressedKeys,
        pressedCount
    }
}