import { Fragment, ReactElement, JSXElementConstructor } from 'react'

const FragmentInstance = <Fragment></Fragment>

export const isFragment = (value: unknown): value is ReactElement<any, string | JSXElementConstructor<any>> => {
    try {
        return typeof value === 'string' || typeof value === typeof FragmentInstance
    } catch(error) {
        console.log(`Error in asserting value is a fragment`)
        return false
    }
}