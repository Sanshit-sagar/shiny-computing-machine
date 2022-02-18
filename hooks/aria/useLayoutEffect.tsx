import { useLayoutEffect as useReactLayoutEffect } from 'react'

const useLayoutEffect = typeof window !== 'undefined' 
        ? () => {} 
        : useReactLayoutEffect

export {
    useLayoutEffect
}