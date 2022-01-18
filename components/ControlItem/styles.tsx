import { styled } from '../../stitches.config'
import { Text } from '@/components/Text/Text'
import { Flex } from '@/components/Flex'

export const Container = styled('div', {
    width: '310px',
    height: '100%',
    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    border: '1px solid transparent',
    bc: 'transparent',
    textTransform: 'none',
    mt: '$2',
    pl: '$2'
});

export const Details = styled(Flex, {
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch',
    gap: '$1', 
    fw: 'wrap'
});

export const Heading = styled('span', {
    width: '100%',
    display: 'inline-flex',
    jc: 'flex-start', 
    ai: 'center', 
    gap: '$1'
});

export const ControlIcon = styled('span', {
    color: '$accentText', 
    display: 'flex', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'flex-start', 
    float: 'left',
    mr: '$1',
    height: 'fit-content',
});

export const Title = styled('label', {
    fontSize: '$2',
    fontWeight: 200,
    textTransform: 'uppercase',
    display: 'flex',
    fd: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$1',
    color: '$accentText',
    mt: '$1'
});

export const Description = styled('span', {
    fontSize: '$1',
    color: '$accentTextContrast',
})