import { styled } from 'stitches.config'
import { Flex } from '@/components/Flex'
import { H3 } from '@/components/Text/Heading'

// https://web.dev/building-a-split-button-component/
// https://www.openpeeps.com/
// https://www.happyhues.co/palettes/13
// https://codesandbox.io/s/1qo7rylm14?file=/src/index.js
// https://tinkersynth.com/
// https://p5-demos.glitch.me/
// https://web.dev/codelab-building-a-sidenav-component/

export const StyledOverlay = styled('div', {
    p: 0,
    bc: 'transparent', 
    color: 'transparent',
    border: 'none', 
    outline: 'none'
})

export const StyledOverlayContents = styled(Flex, {
    appearance: 'none',
    userSelect: 'none',
    overflow: 'hidden', 
    whiteSpace: 'wrap',

    width: 'inherit', 
    maxWidth: 300, 

    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch', 
    gap: '$1', 
    fw: 'wrap', 

    variants: {
        border: {
            true: {
                border: '1px solid $accentBorder',
                br: '$2',
                '&:hover': {
                    borderColor: '$accentBorderHover',
                },
                '&:active': {
                    outline: '1px solid $accentFocusRing'
                }
            },
            false: {
                br: '$1',
                border: 'none',
                outline: 'none'
            }
        },
        background: {
            true: { bc: '$accentBase' },
            false: { bc: 'transparent'},
        },
        padding: {
            true: { padding: '$1 $2' },
            false: { padding: 0 }
        }
    },
    defaultVariants: {
        border: false,
        background: false,
        padding: false
    }
})

export const StyledOverlayDescription = styled('div', {
    fontSize: '$2', 
    fontFamily: '$mono',
    m: '$1',
    p: 0,
    color: '$accentTextContrast'
})

export const StyledOverlayHeading = styled(H3, { 
    fontFamily: '$jetbrains',
    fontSize: '$3',
    m: '$1',
    color: '$accentText'
})
// 
// export const StyledOverlayWrapper = styled('div', {
    // m: '$1',
    // p: '$1',
    // color: '$accentText'
// })