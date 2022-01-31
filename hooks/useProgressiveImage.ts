import { useEffect, useState, CSSProperties } from 'react'

export const useProgressiveImage = (lowQualitySrc: string, highQualitySrc: string) => {
    const [source, setSource] = useState<string>(lowQualitySrc)
    const blur = source === highQualitySrc
    
    useEffect(() => {
        setSource(lowQualitySrc)

        const img = new Image() 
        img.src = highQualitySrc
        img.onload = () => setSource(highQualitySrc)
    }, [lowQualitySrc, highQualitySrc])

    const css: CSSProperties = {
        filter: blur ? "blur(20px)" : "none",
        transition: blur ? "none" : "filter 300ms ease-out" 
    }

    return {
        source,
        blur,
        css
    }
}