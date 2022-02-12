import { ValidationState } from '@/interfaces/Shared'
import { Nullable, strEnum } from '@/interfaces/Guards'

export const VALIDATION_STATES: ['VALID', 'INVALID'] = [ 'VALID', 'INVALID' ]
export const EMPTY_VALIDATION_STATE = 'NONE'

export const Validity = strEnum(VALIDATION_STATES)
export const Validatability = strEnum([
    ...VALIDATION_STATES,
    EMPTY_VALIDATION_STATE
])

export type ValidityType = keyof typeof Validity
export type ValidityCss = keyof typeof Validatability

export type ValidityStateMapping = {
    [key in ValidationState]: ValidityType;
}

export const stateMapping: ValidityStateMapping = {
    'valid': Validity.VALID,
    'invalid': Validity.INVALID
}
export const invertedStateMapping: ValidityStateMapping = {
    'invalid': Validity.INVALID,
    'valid': Validity.VALID
}

export const getValidationStatesBooleans = (validationState: Nullable<ValidationState>): ValidityCss => (
        validationState 
    &&  validationState?.length 
    &&  stateMapping[validationState]?.length 
    &&  stateMapping[validationState] === Validatability.VALID || stateMapping[validationState] === Validatability.INVALID
    ?   stateMapping[validationState] 
    :   Validatability.NONE
)

export type ValidityCssMap = { 
    isValid: boolean; 
    isInvalid: boolean; 
    isNotValidated: boolean;
} 

export const getValidationStatesCss = (validationState: Nullable<ValidationState>): ValidityCssMap => {
    const validity: ValidityCss = getValidationStatesBooleans(validationState)

    return {
        isValid: validity === Validatability.VALID,
        isInvalid: validity === Validatability.INVALID,
        isNotValidated: validity === Validatability.NONE
    }
}