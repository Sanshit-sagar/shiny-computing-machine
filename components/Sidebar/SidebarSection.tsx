import { useRef, Fragment } from 'react'
import { CSS } from 'stitches.config'

import { useLocale } from '@react-aria/i18n' 
import { useListBoxSection } from '@react-aria/listbox'
import { useVirtualizerItem } from '@react-aria/virtualizer'

import SidebarItem from './SidebarItem'
import { StyledHeader, SectionItems, SectionHeading } from './styles'
import { SidebarSectionProps } from '@/hooks/collections/Sidebar'

const SidebarSection = <T extends object>({ children, reusableView, header }: SidebarSectionProps<T>) => {

    const item = reusableView.content    
    const { headingProps, groupProps } = useListBoxSection({
        heading: item.rendered,
        'aria-label': item['aria-label']
    })

    const { direction } = useLocale() 
    const headerLayoutInfo = header.layoutInfo
    const reusableViewLayoutInfo = reusableView.layoutInfo
    const xProperty = direction === 'rtl' ? 'right' : 'left';

    const headerRef = useRef<HTMLDivElement>() 
    useVirtualizerItem({ 
        reusableView: header, 
        ref: headerRef 
    }) 

    return (
        <>
            <StyledHeader 
                role="presentation" 
                ref={headerRef}
                isSticky={headerLayoutInfo.isSticky}
                allowOverflow={headerLayoutInfo.allowOverflow}
                css={{ 
                    top: headerLayoutInfo.rect.y,
                    [xProperty]: headerLayoutInfo.rect.x,
                    width: headerLayoutInfo.rect.width,
                    height: 25,
                    opacity: headerLayoutInfo.opacity,
                    zIndex: headerLayoutInfo.zIndex,
                    transform: headerLayoutInfo.transform,
                 }}
            >
                 {item.rendered &&
                     <SectionHeading {...headingProps}> 
                         {item.rendered} 
                     </SectionHeading>
                 }
            </StyledHeader>
            <SectionItems 
                {...groupProps}
                css={{
                    top: reusableViewLayoutInfo.rect.y,
                    [xProperty]: reusableViewLayoutInfo.rect.x,
                    width: reusableViewLayoutInfo.rect.width,
                    height: reusableViewLayoutInfo.rect.height,
                    opacity: reusableViewLayoutInfo.opacity,
                    zIndex: reusableViewLayoutInfo.zIndex,
                    transform: reusableViewLayoutInfo.transform,
                    position: reusableViewLayoutInfo.isSticky ? 'sticky' : 'absolute',
                    overflow: reusableViewLayoutInfo.allowOverflow ? 'visible' : 'hidden'
                }}
            >
                    {[...item.childNodes].map((node) => {
                        let item = (
                            <SidebarItem
                                key={node.key}
                                item={node}
                            />
                        );
                        if(node.wrapper) {
                            item = node.wrapper(item)
                        }
                        return item
                    })}
            </SectionItems>
        </>
    )
}

SidebarSection.displayName = 'SidebarSection'
export default SidebarSection


