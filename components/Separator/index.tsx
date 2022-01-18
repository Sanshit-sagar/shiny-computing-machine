import { useSeparator } from '@react-aria/separator'
import { mergeProps } from '@react-aria/utils'

import { StyledSeparator } from './styles'
import { SeparatorProps } from './interfaces'

export const Separator = ({ orientation = 'horizontal', size, ...props }: SeparatorProps) => {
    const { separatorProps } = useSeparator(props)
   
    return (
        <StyledSeparator 
            {...mergeProps(props, separatorProps)} 
            size={size} 
            orientation={orientation} 
            css={{ ...props.css }}
        />
    );
}
