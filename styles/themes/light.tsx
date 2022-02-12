import { CSS } from 'stitches.config'
import { defaultBrand } from 'styles/themes/brand'

export const light: CSS = {
    ...defaultBrand,
    '--brand-light': `
        hsl(var(--brand-hue) 
        var(--brand-saturation) 
        var(--brand-lightness))
    `,
    '--text1-light': 'hsl(var(--brand-hue) var(--brand-saturation) 10%)',
    '--text2-light': 'hsl(var(--brand-hue) 30% 30%)',
    '--surface1-light': 'hsl(var(--brand-hue) 25% 90%)',
    '--surface2-light': 'hsl(var(--brand-hue) 20% 99%)',
    '--surface3-light': 'hsl(var(--brand-hue) 20% 92%)',
    '--surface4-light': 'hsl(var(--brand-hue) 20% 85%)',
    '--surface-shadow-light': 'hsl(var(--brand-hue)) 10% 20%',
    '--shadow-strength-light': .02
}










