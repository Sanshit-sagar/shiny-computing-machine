
import { useState, useEffect } from "react"

export function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState<boolean>(false)

    function downHandler({ key }) {
        if (key === targetKey) setKeyPressed(true)
    }

    const upHandler = ({ key }) => {
        if (key === targetKey)  setKeyPressed(false)
    }

    useEffect(() => {
        window.addEventListener("keydown", downHandler)
        window.addEventListener("keyup", upHandler)

        return () => {
            window.removeEventListener("keydown", downHandler)
            window.removeEventListener("keyup", upHandler)
        }
    }, [])

    return keyPressed
}

export function useOnClickOutside(ref, handler) {
    useEffect(
      () => {

        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) return
            handler(event)
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)
        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref, handler])
}
  