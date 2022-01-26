import React, { ReactNode } from 'react'
import { styled, VariantProps, CSS } from '../../stitches.config'

export const StyledKbd = styled('kbd', {
    boxSizing: 'border-box',
    display: 'inline-flex',
    ai: 'center',
    jc: 'space-between',
    bc: '$accentBase',
    gap: '$2',
    border: '1px solid $accentBorder',
    br: '$1',

    color: '$accentText',
    us: 'none',
    cursor: 'default',
    whiteSpace: 'nowrap',
    boxShadow: `
        inset 0 0.5px rgba(255, 255, 255, 0.1),
        inset 0 1px 5px $colors$panelBg,
        0px 0px 0px 0.5px $colors$panelSolid,
        0px 2px 1px -1px $colors$panelSolid,
        0 1px $colors$panelSolid`,
    textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',
   
    fontWeight: 300,
    lineHeight: 1,

    mx: '2px',
    p: '$3',
    minHeight: '2em',
    minWidth: '2em',
    fontFamily: '$jetbrains',
    fontSize: '$2',

    variants: {
        size: {
            '1': {
                br: '$2',
                px: '0.3em',
                height: '$3',
                minWidth: '1.6em',
                fontSize: '$1',
                lineHeight: '$spaces$3'
            },
            '2': {
                br: '$2',
                px: '0.5em',
                height: '$5',
                minWidth: '2em',
                fontSize: '$2',
                lineHeight: '$spaces$5'
            }
        },
        width: {
            default: {
                width: 'fit-content',
                px: '$3',
                jc: 'center'
            },
            shift: {
                width: '4em',
                justifyContent: 'flex-start',
            },
            command: {
                width: '3em',
                justifyContent: 'flex-end',
            },
            space: {
                width: '6.5em',
            }
        }
    },
    compoundVariants: [
        { size: '2', width: 'default', css: { width: 'fit-content', px: '$3', jc: 'center' } },
        { size: '2', width: 'shift', css: {  width: '6.25em' } },
        { size: '2', width: 'command', css: {  width: '4.5em' } },
        { size: '2', width: 'space', css: {  width: '9.75em' } },
    ],
    defaultVariants: {
        width: 'default',
        size: '2',
    }
});

export type KbdProps = VariantProps<typeof StyledKbd> & { 
    children: ReactNode; 
    css?: CSS; 
}

export const Kbd = ({ children, ...otherProps }: KbdProps) => (
    <StyledKbd {...otherProps}>
        {children}
    </StyledKbd>
); 


export const Container = styled('div', {
    border: '2px solid',
    bc: '$accentBase',
    borderColor: '$accentBorder',
    px: '$1',
    py: '$2',
})