import { useState } from 'react' 
import { useKeyboard } from '@react-aria/interactions'
import { KeyboardEvent, KeyboardEvents } from '@/interfaces/Interactions'

type UseKbdProps = KeyboardEvents & {
    trackUpHistory?: boolean;
    trackDownHistory?: boolean;
    upHistorySize?: number;
    downHistorySize?: number;
}

const noop = (_event: KeyboardEvent) => {}

const useKbd = ({ 
    trackUpHistory = false,
    onKeyUp = noop, 
    upHistorySize = 20,
    trackDownHistory = false,
    onKeyDown = noop,
    downHistorySize = 20
}: UseKbdProps) => {

    const [mostRecentKey, setMostRecentKey] = useState<string | undefined>(undefined)
    const [upHistory, setUpHistory] = useState<string[]>([])
    const [downHistory, setDownHistory] = useState<string[]>([])

    const resetUpHistory = () => setUpHistory([])
    const resetDownHistory = () => setDownHistory([])

    const resetHistory = () => {
        resetUpHistory()
        resetDownHistory()
    }

    const { keyboardProps } = useKeyboard({
        onKeyDown: (event: KeyboardEvent) => {
            setMostRecentKey(event.key)
            if(trackUpHistory) {
                setUpHistory((upHistory: string[]) => (upHistory.length > upHistorySize) ? [
                    ...upHistory.splice(upHistory.length - upHistorySize), 
                    event.key
                ] : [
                    ...upHistory,
                    event.key
                ])
            }
            onKeyUp(event)
        },
        onKeyUp: (event: KeyboardEvent) => {
            setMostRecentKey(event.key)
            if(trackDownHistory) {
                setDownHistory((downHistory: string[]) => (downHistory.length > downHistorySize) ? [
                    ...downHistory.splice(downHistory.length - downHistorySize), 
                    event.key
                ] : [
                    ...downHistory,
                    event.key
                ])
            }
            onKeyDown(event)
        }
    })

    return {
        keyboardProps,
        mostRecentKey,
        upHistory,
        downHistory,
        resetUpHistory,
        resetDownHistory,
        resetHistory,
        settings: {
            trackUpHistory,
            trackDownHistory,
            upHistorySize,
            downHistorySize
        }
    }
}

export default useKbd