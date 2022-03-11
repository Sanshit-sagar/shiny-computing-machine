import { RefObject, useEffect } from 'react'
import { iterateFocusableElements } from '@primer/behaviors/utils'
import { useProvidedRefOrCreate } from '@/hooks/useRef'

const TYPEAHEAD_TIMEOUT = 1000

const useTypeaheadFocus = (
    open?: boolean, 
    providedRef?: RefObject<HTMLElement>
) => {
    const containerRef = useProvidedRefOrCreate(providedRef)

    const isAlphabetKey = (event: KeyboardEvent) => {
        return event.key.length === 1 && /[a-z\d]/i.test(event.key)
    }

    useEffect(() => {
        if(!open || !containerRef.current) return
        const container = containerRef.current

        let query = ''
        let timeout: number | undefined

        const handler = (event: KeyboardEvent) => {

            const activeElement = document.activeElement as HTMLElement
            if (activeElement.tagName === 'INPUT') return

            const hasModifier = event.ctrlKey || event.altKey || event.metaKey
            if (hasModifier) return

            if (query.length && event.code === 'Space') {
                event.preventDefault()
            } else if(!isAlphabetKey(event)) {
                query = ''
                return
            }

            query += event.key.toLowerCase()
            event.stopPropagation()
            window.clearTimeout(timeout)
            timeout = window.setTimeout(() => (query = ''), TYPEAHEAD_TIMEOUT)


            let elementToFocus: HTMLElement | undefined

            const focusableItems = [...iterateFocusableElements(container)]

            const focusNextMatch = () => {
                const itemsStartingWithKey = focusableItems.filter(item => {
                    return item.textContent?.toLowerCase().trim().startsWith(query)
                })
        
                const currentActiveIndex = itemsStartingWithKey.indexOf(activeElement)
        
                if (currentActiveIndex === itemsStartingWithKey.length - 1) {
                    elementToFocus = itemsStartingWithKey[0]
                } else {
                    elementToFocus = itemsStartingWithKey.find((item, index) => {
                        return index > currentActiveIndex
                    })
                }
                elementToFocus?.focus()
            }

            if (query.length === 1) {
                return focusNextMatch()
            }

            if (query.length === 2 && query[0] === query[1]) {
                query = query[0] 
                return focusNextMatch()
            }

            if (activeElement.textContent?.toLowerCase().startsWith(query)) {
                return
            }

            return focusNextMatch()
        }

        container.addEventListener('keydown', handler)
        return () => container.removeEventListener('keydown', handler)
        
    }, [open, containerRef])

    return {
        containerRef
    }
}


export {
    useTypeaheadFocus
}