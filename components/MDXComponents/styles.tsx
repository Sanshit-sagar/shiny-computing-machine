import { styled, keyframes } from '../../stitches.config'
import { Flex } from '@/components/Flex'


export const fadeIn = keyframes({
    '0%': {
        opacity: 0
    },
    '100%': {
        opacity: 1
    }
})

export const fadeOut = keyframes({
    '0%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0
    }
})

export const PaletteColor = styled('div', {
    width: '50px',
    height: '50px',
    br: '50%',
    ml: '-12px',
})

export const SliderLabel = styled('span', {
    display: 'inline-flex', 
    fd: 'row', 
    jc: 'flex-start',
    ai: 'center'
})

export const ViewingWindow = styled(Flex, {
    height: 'fit-content',
    width: '100%', 
    display: 'flex', 
    fd: 'column', 
    ai: 'center', 
    p: 0, 
    m: 0,
})
