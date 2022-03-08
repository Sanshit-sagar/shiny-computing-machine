import React, { useContext, forwardRef, ReactNode, Fragment } from 'react' 
import { CSS } from 'stitches.config' 

import { useSSRSafeId } from '@react-aria/ssr'

import { ListContext } from './List'
import { GroupContext } from './Group'
import { ActionListContainerContext } from './ActionListContext'

import { ConditionBox } from './ConditionBox'
import { StyledListItem, StyledDividerContainer } from './styles'
import { createSlots } from '@/hooks/createSlots'

const DEFAULT_TAG = 'li'

type ItemRenderer = ({ children }: { children: ReactNode; }) => JSX.Element;
type ItemElement = ElementType<typeof DEFAULT_TAG> 
type ItemProps = {
    id?: string;
    role?: AriaRole;
    onSelect: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    selected?: boolean;
    variant?: 'default' | 'danger';
    disabled?: boolean;
    children?: ReactNode; 
    _PrivateItemWrapper: ReactNode | ItemRenderer;
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
    css = {}
}, forwardedRef) => {

    const { variant: listVariant, showDividers, selectionVariant: listSelectionVariant } = useContext(ListContext)
    const { selectionVariant: groupSelectionVariant } = useContext(GroupContext)
    const { container, afterSelect, selectionAttribute } = useContext(ActionListContainerContext)

    const labelId = useSSRSafeId(id)
    const inlineDescriptionId = useSSRSafeId(id && `${id}--inline--description`)
    const blockDescriptionId = useSSRSafeId(id && `${id}--block--description`)

    const ItemWrapper = Fragment

    const clickHandler = useCallback((event) => {
        if(disabled) return

        if(!event.preventDefault) {
            if (typeof onSelect === 'function') onSelect(event)
            if (typeof afterSelect === 'function') afterSelect()
        }
    }, [onSelect, disabled, afterSelect])

    const keyPressHandler = useCallback((event) => {
        if (disabled) return

        if (!event.defaultPrevented && [' ', 'Enter'].includes(event.key)) {
            if (typeof onSelect === 'function') onSelect(event)
            if (typeof afterSelect === 'function') afterSelect()
        }
    }, [onSelect, disabled, afterSelect])


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

    let selectionVariant: ListProps['selectionVariant'] | GroupProps['selectionVariant']
    if (typeof groupSelectionVariant !== 'undefined') {
        selectionVariant = groupSelectionVariant
    } else {
        selectionVariant = listSelectionVariant
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
                    ref={forwardedRef}
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
                                    if={Boolean(slots.InlineDescription) 
                                    css={{ display: 'flex',  flexGrow: 1, alignItems: 'baseline', minWidth: 0 }}
                                >
                                    <Box 
                                        as="span" 
                                        id={labelId} 
                                        css={{ flexGrow: slots.InlineDescription ? 0 : 1 }}
                                    >
                                        {props.children}
                                    </Box> 
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