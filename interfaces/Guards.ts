

export type EnumLiteralsOf<T extends Object> = T[keyof T]
export type Constructor<T = {}> = new (...args: any[]) => T

export function isElementOfType<P = {}>(
    element: unknown,
    ComponentType: React.ComponentType<P>
  ): element is React.ReactElement<P> {
    const reactElement = element as React.ReactElement;
  
    return (
        reactElement &&
        reactElement.type &&
        //@ts-ignore
        reactElement.type.displayName &&
        //@ts-ignore
        reactElement.type.displayName === (ComponentType?.displayName ?? "-1")
    )
}

/** Utility function to create a K:V from a list of strings */
export function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null))
}

/** HOW TO USE strEnum 
const DirectionEnum = strEnum([
    'NORTH', 
    'SOUTH', 
    'EAST', 
    'WEST'
])
export type Direction = keyof typeof DirectionEnum

const dir1: Direction = DirectionEnum.NORTH;  // OK
const dir2: Direction = 'NORTH'               // OK
const dir3: Direction = 'north'               // Error

const isTrue = dir1 === dir2
const isFalse = dir1 === dir3 || dir2 === dir3
*/


export type Nullable<T> = T | null | undefined