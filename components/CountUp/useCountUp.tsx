import { useRef, useMemo, useEffect } from 'react' 
import { CounterHookProps } from './types'
import { CountUp as CountUpJs } from 'countup.js'

import { useEventCallback } from '@/hooks/useEventCallback'
import { createCountUpInstance } from './createCountUp'

const defaultProps = {
    duration: 2,
    start: 0,
    delay: null,
    startOnMount: true,
    enableReinitialize: true
}

export const useCountUp = (props: CounterHookProps) => {

    const {
        ref,
        onEnd,
        onStart,
        onUpdate,
        onPauseResume,
        onReset,
        delay,
        startOnMount,
        enableReinitialize,
        ...instanceProps
    } = useMemo(() => ({ 
        ...defaultProps, 
        ...props 
    }), [props])

    const countUpRef = useRef<CountUpJs>()
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const isInitializedRef = useRef<boolean>(false)


    const createInstance = useEventCallback(() => {
        return createCountUpInstance(
            typeof ref === 'string' ? ref : ref.current!,
            instanceProps
        )
    })

    const getCountUp = useEventCallback((recreate?: boolean) => {
        const countUp = countUpRef.current;
        if (countUp && !recreate) {
            return countUp
        }

        const newCountUp = createInstance()
        countUpRef.current = newCountUp
        return newCountUp
    })

    const start = useEventCallback(() => {
        const run = () =>
            getCountUp(true).start(() => {
                onEnd?.({ 
                    pauseResume, 
                    reset, 
                    start: restart, 
                    update 
                })
            })
    })

    const pauseResume = useEventCallback(() => {
        getCountUp().pauseResume()
    
        onPauseResume?.({ 
            reset, 
            start: restart, 
            update 
        })
    })

    const update = useEventCallback((newEnd) => {
        getCountUp().update(newEnd)
    
        onUpdate?.({ 
            pauseResume, 
            reset, 
            start: restart 
        })
    })    

    const reset = useEventCallback(() => {
        timerRef.current && clearTimeout(timerRef.current)
    
        getCountUp().reset()
    
        onReset?.({ 
            pauseResume, 
            start: restart,
            update
        })
    })

    const restart = useEventCallback(() => {
        reset()
        start()
    })

    const maybeInitialize = useEventCallback((shouldReset?: boolean) => {
        if(startOnMount) {
            if(shouldReset) {
                reset()
            }
            start()
        }
    })

    useEffect(() => {
        if(!isInitializedRef.current) {
            isInitializedRef.current = true
            maybeInitialize()
        } else if(enableReinitialize) {
            maybeInitialize(true)
        }  
    }, [enableReinitialize, isInitializedRef, maybeInitialize, delay, props.start, props.end, props.duration])
       
    useEffect(() => {
        return () => reset()
    }, [reset])

    return {
        start: restart,
        reset, 
        update,
        pauseResume,
        getCountUp
    }
}