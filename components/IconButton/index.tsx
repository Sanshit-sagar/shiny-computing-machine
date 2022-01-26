import React, { useState, useEffect } from 'react'
import {
    CheckIcon,
    ClippyIcon,
    StyledIconButton,
} from './styles'
import type { 
    IconButtonProps as StyledIconButtonProps 
} from './styles'

import { useIsSSR } from 'react-aria'

export interface IconButtonProps extends StyledIconButtonProps {
    copied: boolean;
    content: string; 
    onChange?: (checked: boolean) => void; 
    timeoutValue?: number;
    strokeWidth?: `${"1" | "2" | "3"}.${number}` | "1" | "2" | "3";
}

function execCopyToClipboard(content: string) {
    const el = document.createElement(`textarea`)
    el.value = content
    el.setAttribute(`readonly`, ``)
    el.style.position = `absolute`
    el.style.left = `-9999px`
    document.body.appendChild(el)
    el.select()
    document.execCommand(`copy`)
    document.body.removeChild(el)
}

const noop = (checked: boolean) => {}

export const IconButton = ({ 
    copied = false, 
    content = "",
    onChange = noop,
    timeoutValue = 3000, 
    strokeWidth = "1"  
}: IconButtonProps) => {
    const isSSR = useIsSSR()

    const copyToClipboard = () => {
        if(!isSSR) {
            onChange(true)
            execCopyToClipboard(content)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) onChange(false)
        }, timeoutValue)

        return () => clearTimeout(timeout)
    }, [copied, timeoutValue])

    return (
        <StyledIconButton 
            onClick={copyToClipboard}
            copied={copied}
        >
            <ClippyIcon 
                aria-hidden="false"
                strokeWidth={strokeWidth}
            />
            <CheckIcon 
                aria-hidden={copied.toString()} 
                className="check-icon"
                strokeWidth={strokeWidth}
            />
        </StyledIconButton>
    )
}