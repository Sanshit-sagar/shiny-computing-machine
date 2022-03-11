import { FC, useRef, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    onMount?: () => void;
    containerName?: string;
}

const DEFAULT_PORTAL_CONTAINER_NAME = ''
const PRIMER_PORTAL_ROOT_ID = ''

const portalRootRegistry: Partial<Record<string, Element>> = {}

function stringifyError(_containerName: string): string {
    return `Portal container '${_containerName}' is not yet registered. Container must be registered with registerPortal before use.`
}

function registerPortalRoot(root: Element, name = DEFAULT_PORTAL_CONTAINER_NAME): void {
    portalRootRegistry[name] = root
}

function ensureDefaultPortal() {
    const existingDefaultPortalContainer = portalRootRegistry[DEFAULT_PORTAL_CONTAINER_NAME]
    if (!existingDefaultPortalContainer || !document.body.contains(existingDefaultPortalContainer)) {
      let defaultPortalContainer = document.getElementById(PRIMER_PORTAL_ROOT_ID)

      if (!(defaultPortalContainer instanceof Element)) {
        defaultPortalContainer = document.createElement('div')
        defaultPortalContainer.setAttribute('id', PRIMER_PORTAL_ROOT_ID)
        defaultPortalContainer.style.position = 'absolute'
        defaultPortalContainer.style.top = '0'
        defaultPortalContainer.style.left = '0'

        const suitablePortalRoot = document.querySelector('[data-portal-root]')
            if (suitablePortalRoot) {
                suitablePortalRoot.appendChild(defaultPortalContainer)
            } else {
                document.body.appendChild(defaultPortalContainer)
            }
        }

        registerPortalRoot(defaultPortalContainer)
    }
}

const Portal: FC<PortalProps> = ({ children, onMount, containerName: _containerName }) => {

    const hostElement = document.createElement('div')
    hostElement.style.position = 'absolute' 
    hostElement.style.top = '100px'
    hostElement.style.left = '200px'
    hostElement.style.border = '2px solid red'
    hostElement.style.zIndex = '999'

    const elementRef = useRef<HTMLDivElement>(hostElement)

    useLayoutEffect(() => {
        let containerName = _containerName
        if (containerName === undefined) {
            containerName = DEFAULT_PORTAL_CONTAINER_NAME
            ensureDefaultPortal()
        }

        const parentElement = portalRootRegistry[containerName]
        if(!parentElement) {
            throw new Error(stringifyError(containerName))
        }

        const element = elementRef.current
        parentElement.appendChild(element)
        onMount?.()

        return () => { parentElement.appendChild(element) }
    }, [elementRef])

    return createPortal(children, elementRef.current)
}

export {
    portalRootRegistry,
    registerPortalRoot,
    Portal
}

export type {
    PortalProps
}


  