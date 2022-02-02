import { useEffect, useRef } from 'react'
import { CountUpProps } from './types'
import { useCountUp } from './useCountUp'
import { useEventCallback } from '@/hooks/useEventCallback'


export const CountUp = (props: CountUpProps) => {
    const {
        redraw,
        className,
        children,
        containerProps,
        css,
        ...rest
    } = props

    const containerRef = useRef<HTMLElement>()
    const isInitializedRef = useRef<boolean>(false)

    const { 
        reset, 
        start, 
        pauseResume, 
        getCountUp, 
        update: updateCountUp 
    } = useCountUp({
        ...rest,
        ref: containerRef,
        startOnMount: typeof children !== 'function' || props.delay === 0,
        enableReinitialize: false
    })

    const restart = useEventCallback(() => {
        start()
    })

    const update = useEventCallback((end: string | number) => {
        if(!props.preserveValue) {
            reset()
        }
        updateCountUp(end)
    })


    const initializeOnMount = useEventCallback(() => {
        if(typeof props.children === 'function') {
            if(!(containerRef.current instanceof Element)) {
                console.error(`ContainerRef isnt an instance of JSX's Element`)
            }
        }

        getCountUp()
    })

    useEffect(() => {
        initializeOnMount()
    }, [initializeOnMount])

    useEffect(() => {
        if(isInitializedRef.current) {
            update(props.end)
        }
    }, [props.end, update])

    const redrawDependencies = redraw && props

    useEffect(() => {
        if(redraw && isInitializedRef.current) {
            restart()
        }
    }, [restart, redraw, redrawDependencies])

    useEffect(() => {
        if (!redraw && isInitializedRef.current) {
            restart();
        }
    }, [redraw, reset, props.start, props.duration]) // TODO

    useEffect(() => {
        isInitializedRef.current = true
    }, [])

    if(typeof children === 'function') {
        return children({
            countUpRef: containerRef,
            start,
            reset,
            update: updateCountUp,
            pauseResume,
            getCountUp
        }) as JSX.Element | null
    }

    return (
        <span 
            className={className} 
            ref={containerRef}
            {...containerProps} 
            style={{ ...css }}
        >
            {props.start ? getCountUp() : ''}
        </span>
    )
}

