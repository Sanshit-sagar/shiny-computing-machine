import { CSS } from 'stitches.config'
import { defaultBrand } from 'styles/themes/brand'

export const dim: CSS = {
    ...defaultBrand,
    '--brand-dim': `hsl(
        var(--brand-hue) 
        calc(var(--brand-saturation) / 1.25)
        calc(var(--brand-lightness) / 1.25)
    )`,
    '--text1-dim': 'hsl(var(--brand-hue) 15% 75%)',
    '--text2-dim': 'hsl(var(--brand-hue) 10% 61%)',
    '--surface1-dim': 'hsl(var(--brand-hue) 10% 20%)',
    '--surface2-dim': 'hsl(var(--brand-hue) 10% 25%)',
    '--surface3-dim': 'hsl(var(--brand-hue) 5% 30%)',
    '--surface4-dim': 'hsl(var(--brand-hue) 5% 35%)',
    '--surface-shadow-dim': 'hsl(var(--brand-hue)) 30% 13%',
    '--shadow-strength-dim': .2
}










