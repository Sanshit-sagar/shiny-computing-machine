import React from 'react'
import { styled } from '../../stitches.config'

export const MenuFieldGroup = styled('div', {
    height: '100%',
    width: '100%',
    minHeight: '200px',
    overflow: 'visible',
    m: 0,
    p: 0
})

const MenuField = styled('div', {
    width: 'inherit',
    height: 'fit-content',
    display: 'flex',
    fd: 'row',
    jc: 'space-around',
    ai: 'center',
    gap: '$2',
    py: '$6', 
    px: 0,
    m: 0,
    ox: 'visible',
    borderBottom: '1px solid $accentBorder',

    '&:last-child': {
        borderBottom: 'none'
    }
})

const MenuFieldInfo = styled('div', {
    height: '100%',
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'flex-start',
    gap: 0,
    p: 0,
    m: 0
})

const MenuFieldIcon = styled('div', {
    display: 'flex',
    color: '$accentSolid',
    m: 0,
    p: '$3',    

    boxShadow: 'none',
    opacity: 0.7,
    willChange: 'transform, opacity',
    transition: 'all 0.4s ease',

    $$activeShadowColor: '$colors$accentSolid',

    '&:hover': {
        br: '50%',
        p: '$3',
        transform: 'background-color 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease',
        opacity: 0.95,
        bc: '$accentTextContrast',
        boxShadow: '0 0 3px $$activeShadowColor'
    },
    '&:active': {
        br: '50%',
        p: '$4',
        transform: 'background-color 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease',
        opacity: 0.95,
        bc: '$accentTextContrast',
        boxShadow: '0 0 3px $$activeShadowColor'
    },

    variants: {
        active: {
            true: {
            }
        }
    },
    defaultVariants: {
        active: true
    }
})

const MenuFieldName = styled('h5', {
    fontSize: '$3',
    fontFamily: '$mono',
    fontWeight: 300,
    fontStyle: 'normal',
    fontVariant: 'tabular-numeric',
    color: '$accentText',
    m: 0,
    p: 0
})

const MenuFieldDescription = styled('span', {
    fontSize: '$1',
    fontFamily: '$mono',
    fontStyle: 'normal',
    fontWeight: 100,
    fontVariant: 'tabular-numeric',
    color: '$accentText',
    '&:hover': {
        color: '$accentTextContrast'
    },
    '&:focus': {
        color: '$accentTextContrast'
    },
    m: 0,
    p: 0
})

type MenuFieldProps = {
    id?: string; 
    icon: React.ReactNode;
    name: string;
    description?: string; 
    children: React.ReactNode; 
    active: boolean; 
}

export const Field = ({ id, icon, name, description, active, children }: MenuFieldProps) => (
    <MenuField key={id}>
        <MenuFieldInfo>
            <MenuFieldIcon active={active}> {icon} </MenuFieldIcon>
            <MenuFieldName> {name} </MenuFieldName>
            <MenuFieldDescription> {description} </MenuFieldDescription>
        </MenuFieldInfo>

        <>{children}</>
    </MenuField>
)


export const SettingsCard = styled('div', {
    width: '375px',
    display: 'flex',
    fd: 'row',
    jc: 'flex-end',
    ai: 'stretch',
    gap: '$2',
    bc: '$accentLine', 
    border: '1px solid $accentBorder',
    br: '$1',
    btlr: 0, 
    btrr: 0, 
    m: 0,
    p: '$1',

    borderTop: 'none',
    borderRight: 'none',

    btrr: '$5',
    bblr: '$8',
})