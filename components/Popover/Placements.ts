import { strEnum } from '@/interfaces/Guards'

export const Placements = strEnum([
    'bottom', 'bottom left', 'bottom right', 'bottom start', 'bottom end',
    'top', 'top left', 'top right', 'top start', 'top end',
    'left', 'left top', 'left bottom', 
    'start', 'start top', 'start bottom',
    'right', 'right top', 'right bottom',
    'end', 'end top', 'end bottom'
])

export type Placement = keyof typeof Placements
