import { useRef, useState, RefObject, useEffect } from 'react'

export function useResizeObserver(ref: RefObject<HTMLElement>) {
    const [element, setElement] = useState<HTMLElement | null>(null)
    const [rect, setRect] = useState<DOMRect | { }>({ }) 
    const observer = useRef(null) 

    useEffect(() => {
        setElement(ref.current) 
    }, [ref])

    const cleanObserver = () => {
        if(observer.current) {
            observer.current.disconnect() 
        }
    }

    useEffect(() => {
        if(!element) return

        cleanObserver()

        const ob = (observer.current = new ResizeObserver(([entry]) => {
            setRect(entry.target.getBoundingClientRect()) 
        }))
        ob.observe(element)

        return () => { cleanObserver() }
    }, [element])

    return rect
}