import { useRef } from 'react'
import { CSS } from 'stitches.config'

import { useLocale } from '@react-aria/i18n' 
import { useListBoxSection } from '@react-aria/listbox'

import SidebarItem from './SidebarItem'
import { StyledHeader, StyledSectionItems, SectionHeading } from './styles'
import { SidebarSectionProps } from '@/hooks/collections/Sidebar'

const SidebarSection = <T extends object>({ item, state }) => {

    
    const { headingProps, groupProps } = useListBoxSection({
        heading: item.rendered,
        'aria-label': item['aria-label']
    })

    const { direction } = useLocale() 

    const headerRef = useRef<HTMLDivElement>() 

    return (
        <>
            <StyledHeader role="presentation" ref={headerRef}>
                {item.rendered && (
                     <SectionHeading {...headingProps}> 
                         {item.rendered} 
                     </SectionHeading>
                )}
            </StyledHeader>

            <StyledSectionItems>
                {[...item.childNodes].map((node) => {
                    let item = (
                        <SidebarItem
                            key={node.key}
                            item={node}
                        />
                    )

                    if(node.wrapper) {
                        item = node.wrapper(item)
                    }
                    
                    return item
                })}
            </StyledSectionItems>
        </>
    )
}

SidebarSection.displayName = 'SidebarSection'
export default SidebarSection


