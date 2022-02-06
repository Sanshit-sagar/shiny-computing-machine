import { useState, useMemo } from 'react'

import { RocketIcon } from '@/components/Icons'
import { TextField } from '@/components/TextField'

// TODO: add valid patterns
//       add support 

export const InputInstance = () => {
    let [value, setValue] = useState<string>('0')

    let isValid = useMemo(() => {
        return /^\d$/.test(value)
    }, [value])
  
    return (
       
        <TextField
            icon={<RocketIcon />}
            validationState={isValid ? 'valid' : 'invalid'}
            value={value}
            onChange={(value) => setValue(value)}
            label="Favorite number"
            maxLength={6}
            description="Enter a single digit number."
            errorMessage={
              value === ''
                ? 'Empty input not allowed'
                : 'Single digit numbers are 0-9'
            } 
        />
    )
}