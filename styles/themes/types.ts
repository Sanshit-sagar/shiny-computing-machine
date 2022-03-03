

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


export type {
    Hue,
    Saturation,
    Lightness,
    Foundation,
    FoundationCss
}