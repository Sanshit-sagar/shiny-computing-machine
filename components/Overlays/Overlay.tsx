
import React, { useCallback, useState } from 'react'

import { OverlayProps } from '@react-types/overlays'
import { useIsSSR } from '@react-aria/ssr'
import { DOMRef } from '@react-types/shared'
import ReactDOM from 'react-dom'

import Transition from 'react-transition-group/Transition'
import { OverlayProvider } from "@react-aria/overlays"

const OPEN_STATES = {
    entering: false,
    entered: true
}

const OpenTransition = (props) => (
    <Transition timeout={{ enter: 0, exit: 350 }} {...props}>
        {(state) => (
            React.Children.map(props.children, child => (
                child && React.cloneElement(child, {isOpen: !!OPEN_STATES[state]})
            )))
        }
    </Transition>
)

export const StyledOverlay = (props: OverlayProps, ref: DOMRef<HTMLDivElement>) => {

    const { children, isOpen, container, onEnter, onEntering, onEntered, onExit, onExiting, onExited } = props

    const [exited, setExited] = useState<boolean>(!isOpen)
    const isSSR = useIsSSR();

    const handleEntered = useCallback(() => {
        setExited(false)
        if (onEntered) {
          onEntered()
        }
    }, [onEntered])
    
    const handleExited = useCallback(() => {
        setExited(true)
        if (onExited) {
            onExited()
        }
    }, [onExited])

    const mountOverlay = isOpen || !exited
    if(isSSR) {
        return  null;
    } 

    const contents = (
        <OverlayProvider>
            <OpenTransition
                in={isOpen}
                appear
                onExit={onExit}
                onExiting={onExiting}
                onExited={handleExited}
                onEnter={onEnter}
                onEntering={onEntering}
                onEntered={handleEntered}
            >
                {children}
            </OpenTransition>
        </OverlayProvider>
    )

    return ReactDOM.createPortal(contents, container || document.body)
}

let _Overlay = React.forwardRef(StyledOverlay);
export {_Overlay as Overlay};


