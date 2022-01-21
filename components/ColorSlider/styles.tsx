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
    bc: 'transparent',
    border: '1px solid transparent',
    br: 0,
    borderTop: 'none',
    borderBottom: 'none',
    '&:first-child': {
        br: 0,
        btlr: '$2',
        btrr: '$2'
    },
    '&:last-child': {
        br: 0,
        bblr: '$2',
        bbrr: '$2'
    }
}); 


export const Label = styled('label', {
    textAlign: 'start',
    lineHeight: 1,
    color: '$accentTextContrast',
    fontFamily: '$plexsans',
    fontSize: '$2',
    fontVariant: 'tabular'
});

export const Output = styled('output', {
    lineHeight: 1,
    flex: '1 0 auto', 
    textAlign: 'end',
    color: '$accentTextContrast',
    fontFamily: '$plexsans',
    fontSize: '$2',
    fontVariant: 'tabular'
})