import { HTMLAttributes, ComponentProps } from 'react' 
import { VariantProps, CSS } from '../../stitches.config'
import { Text } from './Text' 

export type EMProps = HTMLAttributes<HTMLParagraphElement>
export type StrongProps = HTMLAttributes<HTMLParagraphElement>


export const DEFAULT_TAG = 'h1'
export type HeadingProps = ComponentProps<typeof DEFAULT_TAG> & HeadingVariants & { 
    css?: CSS; 
    as?: string; 
}

export type HeadingSizeVariants = '1' | '2' | '3' | '4'
export type HeadingPresizedVariants = Omit<VariantProps<typeof Text>, 'size'>
export type HeadingVariants = { size?: '1' | '2' | '3' | '4'; } & HeadingPresizedVariants

export type ShortHandHeadingProps = Omit<HeadingProps, 'size' | 'as'>

export type StyledTextVariants = VariantProps<typeof Text>
export type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
export type ParagraphSizeVariants = '1' | '2';
export type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<StyledTextVariants, 'size'>;
export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & ParagraphVariants & { css?: CSS }


export type TextVariants = Pick<StyledTextVariants, "color" | "size" | "weight" | "spaced" | "gradient">