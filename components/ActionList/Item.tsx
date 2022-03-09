import React, { useContext, useCallback, forwardRef, ReactNode, Fragment, ElementType } from 'react' 
import { CSS } from 'stitches.config' 

import { useSSRSafeId } from '@react-aria/ssr'
import { createSlots } from '@/hooks/createSlots'

import { ListContext, ListProps } from './List'
import { GroupContext, GroupProps } from './Group'
import { ActionListContainerContext } from './ActionListContext'

import { Box } from '@/components/Box'
import { Selection } from './Selection'
import { ConditionBox } from './ConditionBox'

import { AriaRole } from './types' 
import { StyledListItem, StyledDividerContainer, StyledContent } from './Styled'

const DEFAULT_TAG = 'li'

type ItemRenderer = ({ children }: { children: ReactNode; }) => JSX.Element;
type ItemElement = ElementType<typeof DEFAULT_TAG> 
type ItemProps = {
    id?: string;
    role?: AriaRole;
    onSelect?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    selected?: boolean;
    variant?: 'default' | 'danger';
    disabled?: boolean;
    children?: ReactNode; 
    _PrivateItemWrapper?: ReactNode | ItemRenderer;
    css?: CSS; 
}

interface ItemContext extends Pick<ItemProps, 'variant' | 'disabled'> {
    inlineDescriptionId: string;
    blockDescriptionId: string; 
}

const { Slots, Slot } = createSlots([ 
    'LeadingVisual', 
    'InlineDescription', 
    'BlockDescription', 
    'TrailingVisual'
])

const Item = forwardRef<ItemElement, ItemProps>(({
    id,
    role,
    variant = 'default',
    disabled = false,
    selected = undefined,
    onSelect = (_event) => {},
    css = {},
    _PrivateItemWrapper,
    ...props
}, forwardedRef) => {

    const { variant: listVariant, showDividers, selectionVariant: listSelectionVariant } = useContext(ListContext)
    const { selectionVariant: groupSelectionVariant } = useContext(GroupContext)
    const { container, afterSelect, selectionAttribute } = useContext(ActionListContainerContext)

    const labelId = useSSRSafeId(id)
    const inlineDescriptionId = useSSRSafeId(id && `${id}--inline--description`)
    const blockDescriptionId = useSSRSafeId(id && `${id}--block--description`)

    const ItemWrapper = _PrivateItemWrapper || Fragment

    const clickHandler = useCallback((event) => {
        if(disabled) return

        if(!event.defaultPrevented) {
            event.preventDefault()                                  // TODO: REMOVE THIS? 

            if (typeof onSelect === 'function') onSelect(event)
            if (typeof afterSelect === 'function') afterSelect()
        }
    }, [onSelect, disabled, afterSelect])

    const keyPressHandler = useCallback((event) => {
        if (disabled) return

        if (!event.defaultPrevented && [' ', 'Enter'].includes(event.key)) {
            event.preventDefault()                                  // TODO: REMOVE THIS? 

            if (typeof onSelect === 'function') onSelect(event)
            if (typeof afterSelect === 'function') afterSelect()
        }
    }, [onSelect, disabled, afterSelect])

    let selectionVariant: ListProps['selectionVariant'] | GroupProps['selectionVariant']
    if (typeof groupSelectionVariant !== 'undefined') {
        selectionVariant = groupSelectionVariant
    } else {
        selectionVariant = listSelectionVariant
    }

    let itemRole: ItemRole['role']
    if(container === 'ActionMenu' || container === 'DropdownMenu') {
        if (selectionVariant === 'single') {
            itemRole = 'menuitemradio'
        } else if(selectionVariant === 'multiple') {
            itemRole = 'menuitemcheckbox'
        } else {
            itemRole = 'menuitem'
        }
    }

    return (
        <Slots context={{ variant, disabled, inlineDescriptionId, blockDescriptionId }}>
            {(slots) => (
                <StyledListItem
                    ref={forwardedRef}
                    role={role || itemRole}
                    tabIndex={disabled ? undefined : 0}
                    onClick={clickHandler}
                    onKeyPress={keyPressHandler}
                    aria-labelledby={`${labelId} ${slots.InlineDescription ? inlineDescriptionId : ''}`}
                    aria-describedby={slots.BlockDescription ? blockDescriptionId : undefined}
                    aria-disabled={disabled ? true : undefined}
                    variant={variant}
                    css={css}
                >
                    <ItemWrapper> 
                        <Selection selected={selected} />

                        {slots.LeadingVisual}
                        
                        <StyledDividerContainer
                            data-component="ActionList.Item--DividerContainer"
                            css={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: 0 }}
                        >
                            <ConditionBox 
                                if={Boolean(slots.TrailingVisual)} 
                                css={{ display: 'flex', flexGrow: 1 }}
                            >
                                <ConditionBox 
                                    if={Boolean(slots.InlineDescription)}
                                    css={{ display: 'flex',  flexGrow: 1, alignItems: 'baseline', minWidth: 0 }}
                                >
                                    <StyledContent as="span" id={labelId} inline={Boolean(slots.InlineDescription)}>
                                        {props.children}
                                    </StyledContent> 
                                    {slots.InlineDescription}
                                </ConditionBox>
                                {slots.TrailingVisual}
                            </ConditionBox>
                            {slots.BlockDescription}
                        </StyledDividerContainer> 
                    </ItemWrapper>
                </StyledListItem>
            )}
        </Slots>
    )
})

Item.displayName = 'Item'


export {
    Item,
    Slot,
    Slots
}

export type {
    ItemProps,
    ItemContext,    
    ItemElement,
    ItemRenderer
}