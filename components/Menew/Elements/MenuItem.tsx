import React, { Key, useRef } from 'react'
import { styled } from '../../../stitches.config'

import { Node } from '@react-types/shared'
import { FocusRing } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'

import { useMenuItem } from '@react-aria/menu'
import { TreeState } from '@react-stately/tree'
import { useHover } from '@react-aria/interactions'

import { CheckIcon } from '@radix-ui/react-icons'

import { SlotProvider, ClearSlots } from '@/utils/SlotProvider'
import { useMenuContext } from './MenuContext'
import { Text } from '@/components/Text/Text' 

interface MenuItemProps<T> {
    item: Node<T>,
    state: TreeState<T>,
    isVirtualized?: boolean,
    onAction?: (key: Key) => void
} 

const ItemWrapper = styled('li', {
    listStyle: 'none',

    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    p: '$3 $2',
    m: 0,
    
    bc: '$accentBg',
    color: '$accentText',

    fontSize: '$2',
    fontFamily: '$raleway',
    fontStyle: 'normal',
    fontWeight: 300,
    textTransform: 'capitalize',

    outline: 'none', 
    border: 'none',
    borderLeft: '3.5px solid transparent',

    '&:hover': {
        bc: '$accentSolidHover',
        color: '$accentTextContrast'
    },
    '&:focus': {
        bc: '$accentSolidActive',
    },
    variants: {
        selected: {
            true: {
                borderLeftColor: '$accentTextContrast',
            },
            false: null
        }
    },
    defaultVariants: {
        selected: false
    }
})

export function MenuItem<T>(props: MenuItemProps<T>) {

    const { item, state, isVirtualized, onAction } = props
    const { onClose, closeOnSelect } = useMenuContext()
    const { rendered, key } = item

    const isSelected = state.selectionManager.isSelected(key)
    const isDisabled = state.disabledKeys.has(key)

    const ref = useRef<HTMLLIElement>()

    const { menuItemProps, labelProps, descriptionProps, keyboardShortcutProps } = useMenuItem({
        isSelected,
        isDisabled,
        key,
        onClose,
        closeOnSelect,
        isVirtualized,
        onAction,
        'aria-label': item['aria-label']
    }, state, ref);

    const { hoverProps, isHovered } = useHover({ isDisabled })

    const contents = typeof rendered === 'string' ? <Text> {rendered} </Text> : rendered

    return (
        <FocusRing>
            <ItemWrapper 
                {...mergeProps(menuItemProps, hoverProps)} 
                selected={isSelected} 
                ref={ref}
            >
                <ClearSlots>
                    <SlotProvider
                        slots={{
                            text: labelProps,
                            end: descriptionProps,
                            icon: {},
                            description: descriptionProps,
                            keyboard: keyboardShortcutProps
                        }}
                    >   
                        {contents}
                        {/* {isSelected && <CheckIcon />} */}
                    </SlotProvider>
                </ClearSlots>
            </ItemWrapper>
        </FocusRing>
    )
}