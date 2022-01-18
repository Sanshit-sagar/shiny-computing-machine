import React, { Key, Fragment } from 'react'

import { styled } from '../../../stitches.config'

import { Node } from '@react-types/shared'
import { TreeState } from '@react-stately/tree'
import { useMenuSection } from '@react-aria/menu'
import { useSeparator } from '@react-aria/separator'

import { MenuItem } from './MenuItem' 

interface MenuSectionProps<T> {
    item: Node<T>,
    state: TreeState<T>,
    onAction?: (key: Key) => void
}

const Separator = styled('li', {
    listStyle: 'none',
    bc: '$accentSolid',
    height: '1px',
    mx: '$2',
    my: '$1'
})

const Section = styled('li', {
    listStyle: 'none',
    bc: 'transparent',
    p: 0,
    m: 0
})

const SectionItems = styled('ul', {
    listStyle: 'none',
    bc: 'transparent',
    p: 0,
    m: 0,
    mt: '$1'
})

const SectionHeading = styled('span', {
    color: '$accentTextContrast',
    textTransform: 'uppercase',
    fontFamily: '$plexsans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '$2',
    pl: '$2'
})

export function MenuSection<T>(props: MenuSectionProps<T>) {
    let { item, state, onAction } = props
    let { itemProps, headingProps, groupProps } = useMenuSection({
      heading: item.rendered,
      'aria-label': item['aria-label']
    })

    let { separatorProps } = useSeparator({
        elementType: 'li'
    })

    return (
        <Fragment>
            {item.key !== state.collection.getFirstKey() &&
                <Separator {...separatorProps} />
            }

            <Section {...itemProps}>
                {item.rendered &&
                    <SectionHeading {...headingProps}> 
                        {item.rendered} 
                    </SectionHeading>
                }

                <SectionItems {...groupProps}>
                    {[...item.childNodes].map((node) => {
                        let item = (
                            <MenuItem
                                key={node.key}
                                item={node}
                                state={state}
                                onAction={onAction}
                            />
                        );

                        if(node.wrapper) {
                            item = node.wrapper(item)
                        }

                        return item;
                    })}
                </SectionItems>
            </Section>
        </Fragment>
    )
}