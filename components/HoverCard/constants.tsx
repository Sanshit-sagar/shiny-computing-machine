import { strEnum } from '@/interfaces/Guards'

const DEFAULT_NAME          =   'Popover'

const DEFAULT_ROOT_TAG      =   'div'
const DEFAULT_TRIGGER_TAG   =   'a'
const DEFAULT_CONTENT_TAG   =   'div'

const Placements = strEnum([  
    'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 
    'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'
])
export type Placement = keyof typeof Placements

export {
    DEFAULT_NAME,
    DEFAULT_ROOT_TAG,     
    DEFAULT_TRIGGER_TAG,  
    DEFAULT_CONTENT_TAG, 
    Placements
}