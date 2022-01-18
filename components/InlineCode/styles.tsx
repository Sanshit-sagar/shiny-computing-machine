import { styled } from '../../stitches.config'

export const StyledInlineCode = styled('code', {
    br: '$2',
    bc: '$panelBg',
    color: '$panelText',
    padding: '$1 $3',
    
    fontSize: '$2',
    fontFamily: '$hack',
    fontStyle: 'normal',
    fontWeight: 200,
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    textDecoration: 'none',
    textDecorationColor: 'inherit',
    lineHeight: '1.45em',
    wordBreak: 'break-word',

    $$shadowColor: '$colors$accentLine',
    boxShadow: '0px 3px 5px 2px $$shadowColor'
})

