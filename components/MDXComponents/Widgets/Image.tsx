import { styled } from '../../../stitches.config' 

import React from 'react'
import NextImage, { ImageProps } from 'next/image'
import { Text } from '@/components/Text/Text'

const StyledFigure = styled('figure', {
    mb: '$4',
    mx: 0
})

const StyledCaption = styled(Text, {
    height: 'fit-content', 
    width: 'fit-content', 
    fontSize: '$2', 
    fontFamily: '$hack',
    lineHeight: '$2', 
    pt: '$2'
})

const Image = (props: ImageProps) => (
    <StyledFigure>
        <NextImage {...props} quality={50} /> 
        <StyledCaption as="figcaption"> 
            {props.alt} 
        </StyledCaption>
    </StyledFigure>
)


export default Image 