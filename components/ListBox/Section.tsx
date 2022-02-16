import { useListBoxSection } from "@react-aria/listbox"

import {
    StyledSection,
    StyledSectionHeading,
    StyledSectionList
} from './styles'

import Option from './Option'
import { SectionProps } from './interfaces'


const ListBoxSection = ({ section, state }: SectionProps) => {

    const { itemProps, headingProps, groupProps } = useListBoxSection({ 
        heading: section.rendered, 
        "aria-label": section["aria-label"] 
    })

    return (
        <StyledSection {...itemProps}>
            {section.rendered && (
                <StyledSectionHeading {...headingProps}>
                    {section.rendered}
                </StyledSectionHeading>
            )}

            <StyledSectionList {...groupProps}>
                {[...section.childNodes].map((node) => (
                    <Option key={node.key} item={node} state={state} />
                ))}
            </StyledSectionList>
        </StyledSection>
    )
}

ListBoxSection.displayName = 'ListBoxSection'
export default ListBoxSection