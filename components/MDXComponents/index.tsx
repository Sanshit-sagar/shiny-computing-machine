import React from 'react' 
import dynamic from 'next/dynamic'

import { Text } from '@/components/Text/Text'
import { Card } from '@/components/Card/Card'
import { Button } from '@/components/Button'
import { CodeBlock } from '@/components/CodeBlock/Code'
import { InlineCode } from '@/components/InlineCode'
import { Checkbox } from '@/components/Checkbox/CheckboxRoot'
import { Slider } from '@/components/Slider/Slider'
import { Switch } from '@/components/Switch'
import {
    Title,
    Subtitle,
    Heading,
    Subheading
} from '@/components/Typography'


const Image = dynamic(() => import('./Widgets/Image'))
const PaletteGenerator = dynamic(() => import('./Widgets/PaletteGenerator'))

const customComponents = [
    Card,
    PaletteGenerator
]

const MDXComponents = {
    button: Button,
    inlineCode: InlineCode,
    h1: Title,
    h2: Subtitle,
    h3: Heading,
    h4: Subheading,
    p: (props) => {
        return <Text as="p" {...props} />
    },
    img: Image,
    pre: CodeBlock,
    input: (props) => (
            props.type === "checkbox"   ?   <Checkbox {...props} />
        :   props.type === "range"      ?   <Slider {...props} />
        :   props.type === "switch"     ?   <Switch {...props} />
        :   <input {...props} /> 
    ),
    ...customComponents
}

export default MDXComponents