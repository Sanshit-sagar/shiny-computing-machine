import { styled, CSS } from '../../stitches.config'

const itemStyles: CSS = {
    bc: '#5445cc',
    font: '$hack',
    fontSize: '$5',
    color: '#e9e9e9',
    textAlign: 'left',
    margin: '4rem 10rem',
    padding: 0,
    border: 'none',
    borderBottom: '1px dashed #666666',
    outline: 'none'
}

export const Container = styled('span', itemStyles);

export const Copy = styled('span', {
    ...itemStyles,
    cursor: 'pointer'
})

export const Input = styled('input', {
    ...itemStyles,
    borderBottom: '1px solid #666666',
    textAlign: 'left'
})

