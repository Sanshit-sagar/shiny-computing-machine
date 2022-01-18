import { styled } from '../../stitches.config'

export type StronglyKeyedMap<T, K extends keyof T, V> = { 
    [k in K]: V 
}

export const TableContainer = styled('div', {
    width: '95%', 
    height: 'fit-content', 
    padding: 0,
    margin: 0,
    color: '$accentTextContrast',
    bc: '$dark2',
    border: '0.25px solid $accentBorder',
    br: '$2'
})
