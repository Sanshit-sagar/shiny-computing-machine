import type { Foundation, FoundationCss } from './types'

const brandToCssVars = (foundation: Foundation): FoundationCss => {
    return {
        '--brand-hue': foundation['hue'],
        '--brand-saturation': foundation['saturation'],
        '--brand-lightness': foundation['lightness']
    }
}

const brand_01: Foundation = {
    hue: '200', 
    saturation: '100%',
    lightness: '50%'
}


const defaultBrand = brandToCssVars(brand_01)

export {
    brandToCssVars,
    brand_01,
    defaultBrand
}