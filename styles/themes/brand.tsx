
type Hue = number;
type Saturation = number;
type Lightness = number; 

type Foundation = Required<{
    hue: Hue | `${Hue}`;
    saturation: `${Saturation}%`;
    lightness: `${Lightness}%`;
}>

type FoundationCss = Required<{
    '--brand-hue': Foundation['hue'];
    '--brand-saturation': Foundation['saturation'];
    '--brand-lightness': Foundation['lightness'];
}>

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

export type {
    Hue,
    Saturation,
    Lightness,
    Foundation,
    FoundationCss
}