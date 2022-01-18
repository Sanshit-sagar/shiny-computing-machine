import { useState, useEffect, MutableRefObject } from 'react'

interface Loc {
    x: string;
    y: string; 
}

const getLoc = (event: MouseEvent, x: number, y: number, width: number, height: number): Loc => {
    return {
        x: (((event.clientX - x) / width) * 100).toFixed(2),
        y: (((event.clientY - y) / height) * 100).toFixed(2)
    };
}

export function useMousePosition(ref: MutableRefObject<HTMLElement>) {
    const [mousePosition, setMousePosition] = useState<Loc>({ 
        x: Number(0).toFixed(2), 
        y: Number(0).toFixed(2)
    })
  
    const handleMouseMove = (event: MouseEvent) => {
      const { x, y, width, height } = ref.current.getBoundingClientRect()
      setMousePosition(getLoc(event, x, y, width, height))
    }
  
    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, [])
  
    return mousePosition
}