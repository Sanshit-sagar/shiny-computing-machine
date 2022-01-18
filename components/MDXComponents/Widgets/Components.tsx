import { styled } from '../../../stitches.config'

export const AnimationCardContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: '175px',
    height: 'fit-content',
    padding: '$3 $4',
})

export const TransitionGridWrapper = styled('div', {
    display: 'grid',
    gridGap: '32px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    '@media (max-width: 950px)': {
        padding: '0',
    },
    '> div': {
        width: '100%',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

export const HighlightedValue = styled('span', {
    display: 'inline-block',
    br: 0,
    bc: '$accentBg',
    color: '$accentText',
    // border: '2px solid $accentBorder',
    p: '$1',
    fontFamily: '$hack',
    mb: '$2',
    ml: '$1',
    lineHeight: '1rem'
})

export const Wrapper = styled('div', {
    margin: '30px 0px',

    '@media (min-width: 1100px)': {
        position: 'relative',
        maxWidth: '1000px',
        width: 'calc(100% + 300px)',
        margin: '30px -150px'
    }
})

export const Form = styled('form', {
    margin: '$2 $1',
    width: '80%',
    zIndex: '1',
    display: 'flex',
    fd: 'column',
    jc: 'space-around',
    fontSize: '$3',
    label: {
        mb: '$1'
    },
    input: {
        mb: '$1'
    },
    select: {
        border: '1px solid $accentBorder',
        boxShadow: 'none',
        bc: '$accentBg',
        color: '$accentText',
        height: '30px',
        br: 0,
    }
});