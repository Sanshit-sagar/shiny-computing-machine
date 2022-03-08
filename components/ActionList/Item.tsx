import React, { useContext, forwardRef, ReactNode, Fragment } from 'react' 
import { CSS } from 'stitches.config' 

import { useId } from '@react-aria/utils'
import { useSSRSafeId} from '@react-aria/ssr'

import { ListContext } from './List'
import { GroupContext } from './Group'
import { ActionListContainerContext } from './ActionListContext'

import { createSlots } from '@/hooks/createSlots'

const DEFAULT_TAG = 'li'

type ItemElement = ElementType<typeof DEFAULT_TAG> 
export type ItemProps = {
    id: string;
    role?: AriaRole;
    onSelect: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    selected?: boolean;
    variant?: 'default' | 'danger';
    disabled?: boolean;
    children: ReactNode; 
}
export interface ItemContext extends Pick<ItemProps, 'variant' | 'disabled'> {
    inlineDescriptionId: string;
    blockDescriptionId: string; 
}

interface ConditionBoxProps extends ComponentProps<typeof Box> {
    if: boolean;
    css: CSS;
}

const { Slots, Slot } = createSlots([ 'LeadingVisual', 'InlineDescription', 'BlockDescription', 'TrailingVisual'])


const noop = (_event) => {}

const Item = forwardRef<ItemElement, ItemProps>(({
    id = useId()
    role,
    variant = 'default',
    disabled = false,
    selected = undefined,
    onSelect = noop,
    css
}, forwardedRef) => {

    const { variant: listVariant, showDividers, selectionVariant: listSelectionVariant } = useContext(ListContext)
    const { selectionVariant: groupSelectionVariant } = useContext(GroupContext)
    const { container, afterSelect, selectionAttribute } = useContext(ActionListContainerContext)


    const labelId = useSSRSafeId(id)
    const inlineDescriptionId = useSSRSafeId(id && `${id}--inline--description`)
    const blockDescriptionId = useSSRSafeId(id && `${id}--block--description`)

    const ItemWrapper = Fragment

    return (
        <Slots context={{ variant, disabled, inlineDescriptionId, blockDescriptionId }}>
            {(slots) => (
                <StyledListItem
                    ref={forwardedRef}
                    role={}
                    tabIndex={}
                    aria-labelledby={}
                    aria-describedby={}
                    aria-disabled={}
                    css={css}
                >

                </StyledListItem>
            )}
        </Slots>
    )
})
Item.displayName = 'Item'

const ConditionBox = ({ if: condition, css, ...rest }: ConditionBoxProps) => {
    return (condition) ? (
        <Box {...rest} css={css}> {children} </Box>
    ) : (
        <Fragment> {children} </Fragment> 
    )
}
ConditionBox.displayName = 'ConditionBox'