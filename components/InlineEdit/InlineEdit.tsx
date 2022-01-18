import React, { useState, useEffect, useRef, useCallback } from 'react'

import { InlineEditProps } from './interfaces'
import { Container, Copy, Input } from './styles'
import { useKeyPress, useOnClickOutside } from './utils'

export const InlineEdit = ({ value, onChange }: InlineEditProps) => {
    const [inputValue, setInputValue] = useState(value)
    const [isInputActive, setIsInputActive] = useState(false)

    const wrapperRef = useRef<HTMLElement | null>(null)
    const textRef = useRef<HTMLSpanElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const esc = useKeyPress('Esc')
    const enter = useKeyPress('Enter')

    useOnClickOutside((wrapperRef), () => {
        if (isInputActive) {
            onChange(inputValue)
            setIsInputActive(false)
        }
    })
    
    const onEnter = useCallback(() => {
        if (enter) {
            onChange(inputValue)
            setIsInputActive(false)
        }
    }, [enter, inputValue, onChange])
    
    const onEsc = useCallback(() => {
        if (esc) {
            setInputValue(value)
            setIsInputActive(false)
        }
    }, [esc, value])
    
    useEffect(() => {
        if (isInputActive) {
            inputRef.current.focus()
        }
    }, [isInputActive])
    
    useEffect(() => {
        if (isInputActive) {
            onEnter()
            onEsc()
        }
    }, [onEnter, onEsc, isInputActive])
    
    const handleInputChange = useCallback((event) => {
        setInputValue(event.target.value)
    }, [setInputValue])
    
    const handleSpanClick = useCallback(() => {
        setIsInputActive(true)
    }, [setIsInputActive])

    const calcWidth = (inputValue: string) => Math.ceil((inputValue.length) * 0.9)

    return (
        <Container ref={inputRef}>
            <Copy ref={textRef} onClick={handleSpanClick}>
                {value}
            </Copy>

            <Input 
                ref={inputRef} 
                value={inputValue} 
                onChange={handleInputChange}
                css={{ width: `${calcWidth(inputValue)}ex` }}
            /> 
        </Container>
    )
}