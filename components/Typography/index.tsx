import React from 'react'

import { Text, TextProps } from '../Text/Text'

export type TitleProps = Omit<TextProps, 'size'>
export type SubtitleProps = Omit<TextProps, 'size'>
export type ParagraphProps = Omit<TextProps, 'size'>
export type HeadingProps = Omit<TextProps, 'size'>
export type SubheadingProps = Omit<TextProps, 'size'>

export const Title = (props: TitleProps) => (
    <Text 
        as="h1" 
        {...props} 
        size={{ 
            initial: '8',
            bp2: '9',
        }}
        css={{
            fontWeight: 900,
            color: '$accentText',
            fontVariantNumeric: 'proportional-nums',
            lineHeight: '80px',
            ...(props.css as any),
            bp2: {
                lineHeight: '60px',
                ...(props.css?.bp2 as any),
            },
        }}
    />
); 


export const Subtitle = (props: SubtitleProps) => (
    <Text
        as="h2"
        {...props}
        size={{
            initial: '5',
            bp2: '6',
        }}
        css={{
            fontWeight: 700,
            color: '$accentTextContrast',
            lineHeight: '35px',
            ...(props.css as any),
            bp2: {
                lineHeight: '55px',
                ...(props.css?.bp2 as any),
            },
        }}
    />
)

export function Heading(props: HeadingProps) {
  return (
    <Text
      as="h3"
      {...props}
      size={{
        initial: '6',
        bp2: '7',
      }}
      css={{
        fontWeight: 500,
        color: '$accentText',
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '27px',
        ...(props.css as any),
        bp2: {
          lineHeight: '30px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}

export function Subheading(props: SubheadingProps) {
  return (
    <Text
      as="h4"
      {...props}
      size={{
        initial: '3',
        bp2: '4',
      }}
      css={{
        color: '$accentText',
        fontFamily: '$bdr',
        fontWeight: 700,
        fontStyle: 'bold',
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '25px',
        ...(props.css as any),

        bp2: {
          lineHeight: '30px',
          ...(props.css?.bp2 as any),
        },
      }}
    />
  );
}

export const Paragraph = (props: ParagraphProps) => (
    <Text
        as="p"
        {...props}
        size={{
            initial: '3',
            bp2: '4',
        }}
        css={{
            fontWeight: 200,
            color: '$accentTextContrast',
            lineHeight: '25px',
            ...(props.css as any),
            bp2: {
                lineHeight: '27px',
                ...(props.css?.bp2 as any),
            }
        }}
    />
);
