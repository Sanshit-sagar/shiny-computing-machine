import React from 'react'
import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { Tooltip } from '../Tooltip'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 27.5,
  height: 27.5,
  borderRadius: '$2',
  backgroundColor: blackA.blackA3,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

interface AvatarProps { 
    src: string; 
    alt: string; 
    fallback: string; 
    delay: number; 
}; 

export const AvatarWithTooltip = ({ 
    src, 
    alt, 
    fallback, 
    delay = 500 
}: AvatarProps) => (
    
    <Tooltip content={alt || fallback || src}>
        <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback delayMs={delay}>
                {fallback}
            </AvatarFallback>
        </Avatar>
    </Tooltip>
);

// "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80