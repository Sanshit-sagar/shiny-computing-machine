import { styled } from '../../stitches.config'

export const Container = styled('div', {
    width: '75%',
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: 0,
    margin: '$1',
    padding: 0,
    bc: 'transparent',
    border: 'none'
})

export const TagListWrapper = styled('div', {
    minHeight: '25px',
    width: '100%',
    display: 'flex',
    jc: 'space-between',
    ai: 'center',
    flexWrap: 'wrap',
    padding: '$1 $2',
    border: '1px solid',
    br: '$1',
    bc: '$accentBase',
    color: '$accentText',
    borderColor: '$accentBorder',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
});

export const TagInputGroup = styled('div', {
    width: '100%',
    display: 'flex',
    fd: 'row', 
    jc: 'flex-start',
    ai: 'center', 
    gap: 0,
    padding: 0,
    margin: 0,
    border: '1px solid',
    borderTop: 'none',
    borderBottomLeftRadius: '$2',
    borderBottomRightRadius: '$2',
    bc: '$accentBase',
    color: '$accentText',
    borderColor: '$accentBorder'
})


export const TagInputField = styled('input', {
    flex: 1,
    width: '100%',
    fontSize: '$2',
    fontWeight: 150,
    border: '$accentBorder',
    bc: '$accentBase',
    color: '$accentText',
    outline: 'none',
    boxShadow: 'none',
    placeholder: '$accentContrast',
    padding: 0,
    margin: 0
});

export const Tags = styled('ul', {
    width: '100%',
    display: 'flex',
    fd: 'row', 
    jc: 'flex-start', 
    ai: 'flex-start',
    bc: '$accentBase',
    color: '$accentText',
    border: '$accentBorder',
    gap: '$1',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0, 
    maxHeight: 100,
    overflowX: 'hidden',
    overflowY: 'hidden'
});

export const Tag = styled('li', {
    width: 'auto',
    height: '$2',
    display: 'flex',
    bc: '$accentBase',
    color: '$accentText',
    border: '$accentBorder',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1px',
    fontSize: '$1',
    fontWeight: 150,
    fontStyle: 'light',
    listStyle: 'none',
    borderRadius: '$1',
    mx: '$1'
})

export const TagTitle = styled('span', {
    margin: '$1',
    marginRight: '$3',
    textTransform: 'lowercase',
})

export const TagInputLeftSlot = styled('button', {
    float: 'left',
    height: '100%',
    lineHeight: '1',
    textAlign: 'center',
    fontSize: '$2',
    mr: '$2',
    cursor: 'pointer',
    borderLeft: '1px solid',
    borderRadius: '$1',
    padding: '4px',
    bc: '$accentBg',
    color: '$accentText',
    border: '$accentBorder',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: '$2',
});

export const TagInputRightSlot = styled('button', {
    float: 'right',
    height: '100%',
    lineHeight: '1',
    textAlign: 'center',
    fontSize: '$2',
    ml: '$2',
    cursor: 'pointer',
    borderLeft: '1px solid',
    borderRadius: '$1',
    padding: '4px',
    bc: '$dangerBase',
    color: '$dangerText',
    border: '$dangerBorder'
})

