
/// numeric(1) = "1" | 1, (...), numeric(100) = "100" | 100, .... numeric(n) = `${n}` | n s/t typeof n === number 
/// = invNumeric(invN: string | number)

export function stringifyNumeric(numeric: number | string) {
    return typeof numeric === 'string' ? numeric : String(numeric);
}

export function precise(numeric: number | string, precision: number = 2) {
    return Number.parseFloat(stringifyNumeric(numeric)).toPrecision(precision)
}

export function round(x: number) {
    return Math.round((Number(x) + Number.EPSILON) * 100) / 100
}

export function diff(a: number, b: number) {
    return Math.abs(a - b);
}

export function generateRandom(min: number = 0, max: number) {
    return round(Math.random() * diff(min, max)) + min; 
}