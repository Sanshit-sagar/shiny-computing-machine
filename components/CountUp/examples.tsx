import { useState } from 'react'
import { strEnum } from '@/interfaces/Guards'

import { CountUp } from './CountUp'
import { useCountUp } from './useCountUp'

import { Text } from '@/components/Text'
import { Button } from '@/components/Buttons'

const Status = strEnum([ 'AWAITING', 'IDLE', 'PAUSED', 'RESOLVED' ])
type CounterStatus = keyof typeof Status 

const statusMapping = {
    'AWAITING': 'PAUSE',
    'IDLE': 'START',
    'PAUSED': 'RESUME',
    'RESOLVED': 'RESET'
}

const isAwaiting = (status: CounterStatus) => status === Status.AWAITING
const isResolved = (status: CounterStatus) => status === Status.RESOLVED
const isPaused = (status: CounterStatus)   => status === Status.PAUSED
const isIdle = (status: CounterStatus)     => status === Status.IDLE

const startCounterFromZero = (status: CounterStatus) => isResolved(status) || isIdle(status)


const CountUpWithBoundsAndDuration = () => {
    useCountUp({ ref: 'counter', end: 10, duration: 2 })

    const [status, setStatus] = useState<CounterStatus>(Status.IDLE)
  
    const onStart       = () => setStatus(Status.AWAITING)  
    const onEnd         = () => setStatus(Status.RESOLVED)
    const onPauseResume = () => setStatus(isAwaiting(status) ? Status.PAUSED : Status.AWAITING)

    const containerProps = { 'aria-busy': isAwaiting(status) }

    return (
        <CountUp 
            start={0}
            end={100}
            duration={5}
            onStart={onStart}
            onEnd={onEnd}
            onPauseResume={onPauseResume}
            containerProps={containerProps}
        >
            {({ countUpRef, start, pauseResume }) => (
                <Text>
                    <span ref={countUpRef} /> 
                    <Button onPress={() => startCounterFromZero(status) ? start() : pauseResume()}> 
                        {statusMapping[status]}
                    </Button>
                </Text> 
            )}
        </CountUp>
    )
}


export const CountUpInstance = () => <CountUpWithBoundsAndDuration /> 