import React from 'react'

import { Badge as StyledBadge } from './styles'
import { useInteractions } from '../../hooks/useInteractions'
import type { BadgeProps } from './styles'

export const Badge = ({ radius, gradient, children, ...otherProps }: BadgeProps) => {
    const { interactionProps, isHovered } = useInteractions({ isDisabled: false })
   
    return (
        <StyledBadge 
            {...interactionProps}
            isHovered={isHovered}
            radius={radius}
            gradient={gradient}
        >
            {children}
        </StyledBadge>
    )
}
