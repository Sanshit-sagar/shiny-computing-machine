

import { strEnum } from '@/interfaces/Guards'


export const RadiusEnum = strEnum([
    'topRound' as 'TOP_ROUND',
    'bottomRound' as 'BOTTOM_ROUND',
    'topLeftRound' as 'TOP_LEFT_ROUND',
    'bottomLeftRound' as 'BOTTOM_LEFT_ROUND',
    'topRightRound' as 'TOP_RIGHT_ROUND',
    'bottomRightRound' as 'BOTTOM_RIGHT_ROUND',
    'y=x',
    'y=n-x',
    'round' as 'ROUND',
    '1',
    '2',
    '3',
    '4',
    '5'
])

export type Radius = keyof typeof RadiusEnum

