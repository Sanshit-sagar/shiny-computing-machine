import { Fragment } from 'react'
import { useMenuSection } from '@react-aria/menu'
import { useSeparator } from '@react-aria/separator'

import type { MenuSectionProps } from './types'
import { MenuSeparator } from './MenuSeparator' 
import { MenuItem } from './MenuItem'

import { 
    StyledMenuSection,
    StyledMenuSectionHeading,
    StyledMenuSectionGroup
} from './styles'

export const MenuSection = <T extends object>({ item, state, onAction }: MenuSectionProps<T>) => {

    const { itemProps, headingProps, groupProps } = useMenuSection({
        heading: item.rendered,
        'aria-label': item['aria-label']
    })

    const { separatorProps } = useSeparator({
        elementType: 'li'
    })
    
    return (
        <Fragment>
            {item.key !== state.collection.getFirstKey() && (
                <MenuSeparator {...separatorProps} /> 
            )}
            <StyledMenuSection {...itemProps}>
                {item.rendered && (
                    <StyledMenuSectionHeading {...headingProps}>
                        {item.rendered}
                    </StyledMenuSectionHeading>
                )}
                <StyledMenuSectionGroup {...groupProps}>
                    {[...item.childNodes].map((node) => (
                        <MenuItem 
                            key={node.key} 
                            item={node} 
                            state={state} 
                            onAction={onAction} 
                        />
                    ))}
                </StyledMenuSectionGroup>
            </StyledMenuSection>
        </Fragment>
    )
    
}


MenuSection.displayName = 'MenuSection'