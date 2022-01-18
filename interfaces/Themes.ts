import { EnumLiteralsOf } from '@/interfaces/Guards'

const RadixColors = Object.freeze({
    WHITE: 'white' as 'white',
    BLACK: 'black' as 'black',
    AMBER: 'amber' as 'amber',
    ORANGE: 'orange' as 'orange',
    YELLOW: 'yellow' as 'yellow',
    CRIMSON: 'crimson' as 'crimson',
    VIOLET: 'violet' as 'violet',
    SKY: 'sky' as 'sky',
    TEAL: 'teal'as 'teal',
    BLUE: 'blue' as 'blue',
    CYAN: 'cyan' as 'cyan',
    GREEN: 'green' as 'green',
    GRASS: 'grass' as 'grass',
    BROWN: 'brown' as 'brown', 
    PLUM: 'plum' as 'plum',
    MINT: 'mint' as 'mint',
    TOMATO: 'tomato' as 'tomato',
    PINK: 'pink' as 'pink',
    INDIGO: 'indigo' as 'indigo',
    LIME: 'lime' as 'lime',
    PURPLE: 'purple' as 'purple',
    RED: 'red' as 'red',
    GOLD: 'gold' as 'gold',
    BRONZE: 'bronze' as 'bronze',
    MAUVE: 'mauve' as 'mauve',
    SAGE: 'sage' as 'sage',
    OLIVE: 'olive' as 'olive',
    SAND: 'sand' as 'sand',
    SLATE: 'slate' as 'slate'
})

type Colors = EnumLiteralsOf<typeof RadixColors>

export interface ThemeDatum {
    id: string;
    name: string;
    className: any;
    color: Colors; 
    base: string; 
}
