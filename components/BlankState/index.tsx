import React from 'react'

import { Title, Subtitle } from '@/components/Typography'
import { Undrawn } from '@/components/Undrawn'

import { useInteractions } from '@/hooks/useInteractions'

import { StyledBlankState } from './styles'
import { InitBlankStateProps } from './interfaces'

export const BlankState = ({
    dashed = false,
    bordered = true,
    transparent = false,
    title,
    subtitle,
    action,
    ...otherProps
}: InitBlankStateProps) => {  
    const { interactionProps, ...interactions } = useInteractions({ isDisabled: false, isLoading: false });
  
    return (
        <StyledBlankState
            {...interactionProps}
            {...interactions}
            dashed={dashed}
            bordered={bordered}
            transparent={transparent}
        >
            <Title> {title} </Title>
            <Subtitle> {subtitle} </Subtitle>
            <Undrawn name="polaroid" /> 
        </StyledBlankState>

    );
}

// {action && (
//     <Button onPress={action.onClick}>
//         {action.label || ""}
//     </Button>
// )}