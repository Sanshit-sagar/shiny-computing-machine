import { Fragment } from 'react'
import { useMenuSection } from '@react-aria/menu'
import { useSeparator } from '@react-aria/separator'

import type { MenuSectionProps } from './types'
import { MenuSeparator } from './MenuSeparator' 
import { MenuItem } from './MenuItem'

const MenuSection = <T extends object>({ section, state, onAction }: MenuSectionProps<T>) => {

    const { itemProps, headingProps, groupProps } = useMenuSection({
        heading: section.rendered,
        'aria-label': section['aria-label']
    })

    const { separatorProps } = useSeparator({
        elementType: 'li'
    })
    
    return (
        <Fragment>
            {section.key !== state.collection.getFirstKey() && (
                <MenuSeparator {...separatorProps} /> 
            )}
            <li {...itemProps}>
                {section.rendered && (
                    <span {...headingProps} style={{ fontSize: '1.1em', fontWeight: 'bold', padding: '2px 5px' }}>
                        {section.rendered}
                    </span>
                )}
                <ul {...groupProps} style={{ padding: 0, listStyle: 'none' }}>
                    {[...section.childNodes].map((node) => (
                        <MenuItem 
                            key={node.key} 
                            item={node} 
                            state={state} 
                            onAction={onAction} 
                        />
                    ))}
                </ul>
            </li>
        </Fragment>
    )
    
}