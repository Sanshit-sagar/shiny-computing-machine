import React, { ComponentProps, forwardRef } from 'react'
import { styled } from '../../stitches.config'

const StyledContainer = styled('div', {
    boxSizing: 'border-box',
    flexShrink: 0,

    ml: 'auto',
    mr: 'auto',
    px: '$5',
  
    variants: {
        size: {
            '1': {
                maxWidth: '430px'
            },
            '2': {
                maxWidth: '715px'
            },
            '3': {
                maxWidth: '1145px'
            },
            '4': {
                maxWidth: 'none'
            }
        }
    },
    defaultVariants: {
      size: '4',
    },
})

export type ContainerProps = ComponentProps<typeof StyledContainer>
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, ...props }, forwardedRef) => (
        <StyledContainer {...props} ref={forwardedRef}>
            {children}
        </StyledContainer>
    )
)

const StyledSection = styled('section', {
    boxSizing: 'border-box',
    flexShrink: 0,
    '&::before': {
        boxSizing: 'border-box',
        content: '""',
    },
    '&::after': {
        boxSizing: 'border-box',
        content: '""',
    },

    variants: {
        size: {
        '1': {
            py: '$3',
        },
        '2': {
            py: '$7',
        },
        '3': {
            py: '$9',
        },
        },
    },
    defaultVariants: {
        size: '3',
    },
})


export type SectionProps = ComponentProps<typeof StyledSection>
export const Section = forwardRef<HTMLSectionElement, SectionProps>(
    ({ children, ...props }, forwardedRef) => (
        <StyledSection {...props} ref={forwardedRef}>
            {children}
        </StyledSection>
    )
)