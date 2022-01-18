import { styled } from '../../stitches.config'

export const ThemeColor = styled('button', {
    width: '50px',
    height: '50px',
    // background: 'hsl(var(--hue), calc(var(--saturation) * 1%), 50%)',
    borderRadius: '50px',
    boxShadow: 'none',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '20px',
    outline: 'none',
})


export const ButtonWrapper = styled('div', {
    display: 'flex',
    fd: 'column',
    ai: 'center',
    fontSize: '$5',
    mb: '$3',
})

