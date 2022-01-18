

export const DEFAULT_TAG = 'input'

export type MinMaxField = { 
    min: number; 
    max: number; 
}

export const minimumIntegerDigits: MinMaxField = { min: 1, max: 21 };
export const minimumFractionDigits: MinMaxField = { min: 1, max: 21 };
export const maximumFractionDigits: MinMaxField = { min: 1, max: 21 };
export const minimumSignificantDigits: MinMaxField = { min: 1, max: 21 };
export const maximumSignificantDigits: MinMaxField = { min: 1, max: 21 };

export const signDisplay = [
    'auto',
    'never',
    'always',
    'alwaysZero'
];

export const unitDisplays = [
    'narrow', 
    'short', 
    'long'
];

export const simpleUnits = [
    'acre', 
    'bit',
    'byte', 
    'celsius', 
    'centimeter', 
    'day', 
    'degree', 
    'farenheit', 
    'fluid-ounce', 
    'foot',
    'gallon',
    'gigabit', 
    'gigabyte', 
    'gram', 
    'hectare', 
    'hour', 
    'inch', 
    'kilobit', 
    'kilobyte', 
    'kilogram', 
    'kilomitre', 
    'litre', 
    'megabit', 
    'megabyte', 
    'meter', 
    'mile', 
    'mile-scandinavian', 
    'milliliter',
    'millimeter', 
    'millisecond',
    'minute', 
    'month', 
    'ounce',
    'percent', 
    'petabyte',
    'pound', 
    'second', 
    'stone', 
    'terabit', 
    'terabyte', 
    'week', 
    'yard',
    'year'
];

export const locales = [
    'en-US',
    'en-IN',
    'en-UK'
]; 