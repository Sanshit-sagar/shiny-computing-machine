import { useContext } from 'react'

import TextInputPrefix from './InputPrefix'
import TextInputSuffix from './TextInputSuffix'
import TextInputContext from './TextInputContext'
import { ITextInputContext } from './interfaces'
import { isElementOfType } from '@/interfaces/Guards'

import {
    InputSuffixNode,
    InputPrefixNode 
} from './interfaces'

export const useTextInputContext = () => {
    const textInputContext = useContext<ITextInputContext>(TextInputContext)

    if(!textInputContext) 
        throw new Error(`Accessing TextInputContext illegally`)
    
    return textInputContext
}


export const isString = (str: unknown): str is string => {
    return str && typeof str === 'string' && str?.length > 0
}

const validateEmailStr = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

export const validateEmail = (email: unknown): boolean => {
    return isString(email) ? validateEmailStr(email) : false
}

export const validatePassword = (password: unknown): boolean => {
    if(isString(password)) {

        return true
    }
    return false
}

export const validateUrl = (url: unknown): boolean => {
    if(isString(url)) {

        return true
    }
    return false
}

const luhnCheck = (num: number) => {
    const arr = (num + '').split('').reverse().map(x => parseInt(x))
    const lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => 
        (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)), 0
    )
    sum += lastDigit
    return sum % 10 === 0
}



export const isInputPrefix = (child, index: number): child is InputPrefixNode => (
    child && index === 0
)

export const isInputSuffix = (child, index: number): child is InputSuffixNode => (
    child && index === 1
)

export const isInputBase = (_child, index: number) => true