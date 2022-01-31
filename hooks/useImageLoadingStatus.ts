import { useEffect, useState } from 'react' 

import { useIsSSR } from '@react-aria/ssr'
import { strEnum } from '@/interfaces/Guards'

export const ImageLoadingStatus = strEnum([
    'IDLE', 
    'LOADING', 
    'ERROR', 
    'LOADED'
])
export type ImageLoadingStatusType = keyof typeof ImageLoadingStatus

export const useImageLoadingStatus = (src: string) => {
    const isSSR = useIsSSR()
    const [loadingStatus, setLoadingStatus] = useState<ImageLoadingStatusType>(ImageLoadingStatus.IDLE) 

    useEffect(() => {
        if(isSSR) return
        
        if(!src) {
            setLoadingStatus(ImageLoadingStatus.ERROR)
            return
        }

        let isMounted = true
        const image = new window.Image() 
        
        const updateStatus = (status: ImageLoadingStatusType) => () => {
            if(!isMounted) return
            setLoadingStatus(status)
        }

        updateStatus(ImageLoadingStatus.LOADING)
        image.onload = updateStatus(ImageLoadingStatus.LOADED)
        image.onerror = updateStatus(ImageLoadingStatus.ERROR)
        image.src = src

        return () => {
            isMounted = false
        }
    }, [isSSR, loadingStatus])

    return loadingStatus
}