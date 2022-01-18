import React, { ElementRef } from 'react'
import { CSS } from 'stitches.config'

import {
    DEFAULT_TAG,
    HeadingProps,
    HeadingSizeVariants,
    ShortHandHeadingProps,
    TextVariants,
} from './types'
import Text from './Text'

const Heading = React.forwardRef<ElementRef<typeof DEFAULT_TAG>, HeadingProps>((props, ref) => {
    const { size = '1',  ...rest } = props

    const headingSize: Record<HeadingSizeVariants, TextVariants['size']> = {
        1: { '@initial': '4' },
        2: { '@initial': '5' },
        3: { '@initial': '6' },
        4: { '@initial': '7' },
    }

    const headingCSS: Record<HeadingSizeVariants, CSS> = {
        1: {
            fontFamily: '$mono',
            fontWeight: '$8',
            lineHeight: '$3',
            letterSpacing: '$3',
            mb: '$4',
            color: '$accentText',
        },
        2: {
            fontFamily: '$jetbrains',  
            fontWeight: '$6',
            lineHeight: '$2',
            letterSpacing: '$2', 
            mb: '$4',
            color: '$accentTextContrast',
        },
        3: {
            fontFamily: '$jetbrains',
            fontWeight: '$4',
            lineHeight: '$3',
            letterSpacing: '$1',
            mb: '$4',
            color: '$accentText',
        },
        4: {
            fontFamily: '$jetbrains',  
            fontWeight: '$2',
            lineHeight: '$2',
            letterSpacing: '0px',
            mb: '$4',
            color: '$accentTextContrast',
        },
    };

    return (
        <Text
            as={DEFAULT_TAG}
            {...rest}
            ref={ref}
            size={headingSize[size]}
            css={{
                ...headingCSS[size], 
                ...props.css,
            }}
        />
    )
})

export const H1 = React.forwardRef<
  React.ElementRef<'h1'>,
  ShortHandHeadingProps
>((props, ref) => (
  <Heading
    {...props}
    ref={ref}
    as="h1"
    size="4"
    spaced={false}
    color="accent"
  />
))

H1.displayName = 'H1'

export const H2 = React.forwardRef<
  React.ElementRef<'h2'>,
  ShortHandHeadingProps
>((props, ref) => (
  <Heading
    {...props}
    ref={ref}
    as="h2"
    size="3"
    spaced={false}
    color="accent"
  />
))

H2.displayName = 'H2';

export const H3 = React.forwardRef<
  React.ElementRef<'h3'>,
  ShortHandHeadingProps
>((props, ref) => (
  <Heading
    {...props}
    ref={ref}
    as="h3"
    size="2"
    spaced={false}
    color="accent"
  />
));

H3.displayName = 'H3';

export const H4 = React.forwardRef<
  React.ElementRef<'h4'>,
  ShortHandHeadingProps
>((props, ref) => (
  <Heading
    {...props}
    ref={ref}
    as="h4"
    size="1"
    spaced={false}
    color="accent"
  />
))

H4.displayName = 'H4'

Heading.displayName = 'Heading'
export default Heading