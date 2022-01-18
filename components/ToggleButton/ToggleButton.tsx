import React, { useState, useRef } from 'react'

import { Flex } from '@/components/Flex'
import { StyledToggleButton } from './styles' 

import {useToggleButton} from '@react-aria/button'
import {useToggleState} from '@react-stately/toggle'




export const ToggleButton = ({ children, ...props }) => {
    const ref = useRef()
    const state = useToggleState(props)
    const { buttonProps, isPressed } = useToggleButton(props, state, ref)
    
    return (
        <StyledToggleButton 
            {...buttonProps} 
            selected={state.isSelected} 
            isPressed={isPressed}
            ref={ref} 
        >
            <Flex css={{ fd: 'row', jc: 'center', ai: 'center' }}>
                {children}
            </Flex>
        </StyledToggleButton>
    )
}


// export const ToggleGroup = (props) => (
//     <StyledToggleGroup>
//         <ToggleButton>
//             <FontBoldIcon />
//         </ToggleButton>
//         <ToggleButton>
//             <FontItalicIcon /> 
//         </ToggleButton>
//         <ToggleButton>
//             <UnderlineIcon /> 
//         </ToggleButton>
//     </StyledToggleGroup>
// )