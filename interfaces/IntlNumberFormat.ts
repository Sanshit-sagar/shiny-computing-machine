
// symb = US$, narrowSym = $ | code=ISO code | name= ISO name (dollar..)
export type CurrencyDisplay = 'symbol' | 'narrowSymbol' | 'code' | 'name'; //def symbol
export type CurrencySign = 'standard' | 'accounting'; // def standard
export type LocaleMatcher = 'lookup' | 'best fit'; // def best fit
export type Notation = 'standard' | 'scientific' | 'engineering' | 'compact'; // def = standard
export type NumberingSystem = 'TODO'
export type SignDisplay = 'auto' | 'always' | 'never' | 'exceptZero';
export type FormatterStyleType = 'decimal' | 'currency' | 'percent' | 'unit';
export type UnitDisplay = 'long' | 'short' | 'narrow';

type IntlUnitType = string;

export interface IntlNumberFormatAllOptions {
    currency: string;
    currencyDisplay: CurrencyDisplay;
    currencySign: CurrencySign;
    localeMatcher: LocaleMatcher;
    notation: Notation;
    // numberingSystem: NumberingSystem;
    signDisplay: SignDisplay;
    style: FormatterStyleType;
    unit: IntlUnitType;
    unitDisplay: UnitDisplay;
    useGrouping: boolean; // true | (!maxSigs || !minSigs) ? true & grp2 : (maxFrac || minFrac || minInts) ? true & grp1 : false
    maximumFractionDigits: number; // grping 1
    minimumFractionDigits: number; // grping 1
    minimumIntegerDigits: number; // grping 1
    maximumSignificantDigits: number; //grping 2
    minimumSignificantDigits: number; // grping 2
}
export type IntlNumberFormatOptions = Partial<IntlNumberFormatAllOptions>

export type MinMaxField = { 
    min: number; 
    max: number; 
}

export const minimumIntegerDigits: MinMaxField = { min: 1, max: 21 };
export const minimumFractionDigits: MinMaxField = { min: 1, max: 21 };
export const maximumFractionDigits: MinMaxField = { min: 1, max: 21 };
export const minimumSignificantDigits: MinMaxField = { min: 1, max: 21 };
export const maximumSignificantDigits: MinMaxField = { min: 1, max: 21 };


export const signDisplay: SignDisplay[] = [
    'auto',
    'never',
    'always',
    'exceptZero'
]

export const unitDisplays: UnitDisplay[] = [
    'narrow', 
    'short', 
    'long'
];


export const units = [
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

type IntlUnit = typeof units[number]

export const locales = [
    'en-US',
    'en-IN',
    'en-UK'
]; 