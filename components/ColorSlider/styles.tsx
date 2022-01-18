import { styled } from '../../stitches.config'

export const Container = styled('div', {
    display: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',
    gap: '$1',
    width: 300,
    px: '$1',
    py: '$3',
    bc: '$panelBase',
    border: '2px solid',
    borderColor: '$accentBorder',
    br: 0,
    borderTop: 'none',
    borderBottom: 'none',
    '&:first-child': {
        borderTop: '2px solid $accentBorder',
        br: 0,
        borderTopLeftRadius: '$2',
        borderTopRightRadius: '$2'
    },
    '&:last-child': {
        borderBottom: '2px solid $accentBorder',
        br: 0,
        borderBottomLeftRadius: '$2',
        borderBottomRightRadius: '$2'
    }
}); 


export const Label = styled('label', {
    fontSize: '$2',
    color: '$accentTextContrast',
    lineHeight: 1,
    mx: 0,
    my: '$1'
});

export const Output = styled('output', {
    flex: '1 0 auto', 
    textAlign: 'end',
    color: '$accentTextContrast'
}); 
