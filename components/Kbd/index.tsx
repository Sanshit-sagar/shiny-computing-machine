import React from 'react'
import { styled } from '../../stitches.config'

import type * as Stitches from '@stitches/react'

import { UpIcon } from './Icons'

export const StyledKbd = styled('kbd', {
    boxSizing: 'border-box',
    display: 'inline-flex',
    ai: 'center',
    jc: 'space-between',
    bc: '$accentBase',
    gap: '$2',
    border: '1px solid $accentBorder',
    br: '$1',
    p: '$1',

    color: '$accentBorder',
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
    fontFamily: 'inherit',
    fontWeight: 300,
    lineHeight: 1,

    mx: '2px',
    padding: '$3',
    height: '2em',
    minWidth: '2em',
    fontFamily: '$jetbrains',
    fontSize: '$2',

    variants: {
        size: {
            '1': {
                borderRadius: '$1',
                px: '0.3em',
                height: '$3',
                minWidth: '1.6em',
                fontSize: '$1',
                lineHeight: '$spaces$3'
            },
            '2': {
                borderRadius: '$2',
                px: '0.5em',
                height: '$5',
                minWidth: '2em',
                fontSize: '$2',
                lineHeight: '$spaces$5'
            }
        },
        width: {
            shift: {
                width: '4em',
                justifyContent: 'flex-start',
            },
            command: {
                width: '3em',
                justifyContent: 'flex-end',
            },
            space: {
                width: '8em',
            }
        }
    },
    compoundVariants: [{
            size: '1',
            width: 'shift',
            css: {
                width: '3em',
            },
        },
        {
            size: '1',
            width: 'command',
            css: {
                width: '2.5em',
            },
        },
        {
            size: '1',
            width: 'space',
            css: {
                width: '5em',
            },
        }
    ],
    defaultVariants: {
        size: '2',
    }
});

export type KbdProps = Stitches.VariantProps<typeof StyledKbd> & { 
    children: React.ReactNode; 
    css?: Stitches.CSS; 
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