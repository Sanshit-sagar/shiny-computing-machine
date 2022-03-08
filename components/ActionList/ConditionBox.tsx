import { Fragment, ReactNode, ComponentProps } from 'react'
import { CSS } from 'stitches.config' 
import { Box } from '@/components/Box' 

type ConditionBoxProps = ComponentProps<typeof Box> & {
    if: boolean;
    css?: CSS;
    children?: ReactNode; 
}

const ConditionBox = ({ if: condition, children, css, ...rest }: ConditionBoxProps) => {
    return (condition) ? (
        <Box {...rest} css={css}> {children} </Box>
    ) : (
        <Fragment> {children} </Fragment> 
    )
}

ConditionBox.displayName = 'ConditionBox'

export { 
    ConditionBox 
}

export type { 
    ConditionBoxProps 
}