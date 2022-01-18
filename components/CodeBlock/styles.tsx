import { styled } from '../../stitches.config'
import { Card } from '@/components/Card' 

export const Container = styled('div', {
    width: '500px',
    height: '500px',

    border: '2px solid $accentBorder',
    br: '$2',
    oy: 'scroll',

    '&::-webkit-scrollbar': {
        width: '$2',
        bc: 'transparent',
        border: 'none',
        outline: 'none',
    },
    '&::-webkit-scrollbar-thumb': {
        bc: '$accentSolid',
        br: '999px',
        '&:hover': {
            bc: '$accentSolidHover'
        },
    },
})

export const Header = styled(Card.Header, {
    p: '0px $4',
    bc: '$panelBase',
})

export const Pre = styled('pre', {
    overflow: 'hidden',
    mt: '0',
    mb: '0',
    textAlign: 'left',
    p: '$2 $1',
    bblr: '$2',
    bbrr: '$2',
    bc: '$panelBase',

    fontFamily: '$hack',
    fontSize: '$2',
    lineHeight: '26px'
})

export const Line = styled('div', {
    display: 'table',
    borderCollapse: 'collapse',
    p: '$1 $3',
    borderLeft: '3px solid blur',

    '&:highlight-line': {
        bc: 'green',
        borderColor: '$accentBorder'
    },
    '&:hover': {
        bc: '$accentLine'
    }
})

export const LineNo = styled('div', {
    width: '45px',
    padding: '0 12px',
    userSelect: 'none',
    opacity: '1',
    color: '$accentText',
    textOverflow: 'clip',
    
    fontFamily: '$hack',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums'
})

export const LineContent = styled('span', {
    display: 'table-cell',
    width: '100%'
})

export const CodeSnippetTitle = styled('p', {
    marginBlockStart: '0px',
    mb: '$2',

    fontFamily: '$mono',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '$7',
    lineHeight: '$4',
    color: '$accentText',
})