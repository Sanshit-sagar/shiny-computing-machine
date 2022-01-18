import { strEnum } from '@/interfaces/Guards'

export const FieldEnum = strEnum([
    'input', 
    'select', 
    'textarea', 
    'checkbox', 
    'radio',
    'range', 
    'switch'
])