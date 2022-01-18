import React, { ElementRef, forwardRef } from 'react'
import { 
    red, crimson, pink, purple, 
    blue, indigo, violet, amber, 
    green, grass, orange, teal, 
    cyan, lime, mint, bronze
} from '@radix-ui/colors'

import { styled, CSS } from '../../stitches.config'
import { 
    EMProps, 
    StrongProps,
    ParagraphProps,
    TextSizeVariants,
    ParagraphSizeVariants
} from './types'
import { mergeProps } from '@react-aria/utils'

export const Text = styled('span', {
    display: 'block',
    color: '$accentText',
    fontVariantNumeric: 'tabular-nums',
    textRendering: 'optimizeLegibility',

    variants: {
        spaced: {
            true: {
                letterSpacing: '0.3px',
                lineHeight: 1.9
            }
        },
        size: {
            1: {
                fontSize: '$1'
            },
            2: {
                fontSize: '$2'
            },
            3: {
                fontSize: '$3'
            },
            4: {
                fontSize: '$4'
            },
            5: {
                fontSize: '$5',
                letterSpacing: '-.015em'
            },
            6: {
                fontSize: '$6',
                letterSpacing: '-.016em'
            },
            7: {
                fontSize: '$7',
                letterSpacing: '-.031em',
                textIndent: '-.005em'
            }
        },
        weight: {
            1: { fontWeight: '$1' },
            2: { fontWeight: '$2' },
            3: { fontWeight: '$3' },
            4: { fontWeight: '$4' },
            5: { fontWeight: '$5' },
            6: { fontWeight: '$6' },
            7: { fontWeight: '$7' },
            8: { fontWeight: '$8' },
            9: { fontWeight: '$9' }
        },
        color: {
            'dark': {
                color: '$dark1'
            },
            'contrast': {
                color: '$light1'
            },
            'black': {
                color: '#000',
            },
            'red': {
                color: red.red9,
            },
            'crimson': {
                color: crimson.crimson9,
            },
            'pink': {
                color: pink.pink9,
            },
            'purple': {
                color: purple.purple9,
            },
            'violet': {
                color: violet.violet9,
            },
            'indigo': {
                color: indigo.indigo9,
            },
            'blue': {
                color: blue.blue9,
            },
            'amber': {
                color: amber.amber9
            },
            'green': {
                color: green.green9
            },
            'grass': {
                color: grass.grass9
            },
            'orange': {
                color: orange.orange9
            },
            'teal': {
                color: teal.teal9
            },
            'cyan': {
                color: cyan.cyan9
            },
            'lime': {
                color: lime.lime9
            },
            'mint': {
                color: mint.mint9
            },
            'bronze': {
                color: bronze.bronze9
            },
            'accent': {
                color: '$accentText'
            },
            'turq': {
                color: '$turq'
            },
            'magenta': {
                color: '$highlightMagenta'
            },
            'danger': {
                color: '$dangerText'
            },
            'warning': {
                color: '$warningText'
            },
            'success': {
                color: '$successText'
            }
        },
        gradient: {
            true: {
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }
        }
    },
    defaultVariants: {
        spaced: true,
        size: '3',
        weight: '2',
        color: 'accent'
    }
})
Text.displayName = 'Text'

const EM = forwardRef<ElementRef<'em'>, EMProps>((props, ref) => (
    <Text {...props} as="em" color="accent" weight="3" ref={ref} />
))
EM.displayName = 'EM'
  
const Strong = forwardRef<ElementRef<'strong'>, StrongProps>((props, ref) => (
    <Text {...props} as="strong" color="accent" weight="4" ref={ref} />
))  
Strong.displayName = 'Strong'
  

const P_TAG = 'p'
const Paragraph = forwardRef<ElementRef<typeof P_TAG>, ParagraphProps>(
    ({ size = '1', children, css, ...props }, ref) => {

    const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
        1: { '@initial': '3', '@bp2': '4' },
        2: { '@initial': '5', '@bp2': '6' },
    }

    const textCss: Record<ParagraphSizeVariants, CSS> = {
        1: { color: '$accentText', lineHeight: '22px', '@bp2': { lineHeight: '26px' } },
        2: { color: '$accentText', lineHeight: '26px', '@bp2': { lineHeight: '32px' } },
    }

    return (
        <Text {...props} 
            as="p" 
            color="accent" 
            weight="1" 
            ref={ref} 
            css={mergeProps(textCss[size], css)}
        /> 
    )
})
Paragraph.displayName = 'Paragraph'

export default Text 
export {
    EM,
    Strong,
    Paragraph
}