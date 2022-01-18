import { Key } from 'react'
import { styled } from 'stitches.config'

export const LeftSlot = styled('div', {
    width: 'inherit',
    display: 'flex', 
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'center', 
    gap: '$1', 
    flexWrap: 'nowrap',
    overflow: 'hidden', 
    whiteSpace: 'nowrap',
    border: 'none',
    outline: 'none',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit'
})

export const Kbd = styled('span', {
    fontSize: '$2',
    fontFamily: '$raleway',
    color: '$accentText'
})