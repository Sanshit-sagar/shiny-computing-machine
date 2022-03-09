import { ElementType, forwardRef, createContext, useContext } from 'react'
import { CSS } from 'stitches.config' 

import { AriaRole } from './types'
import { StyledListBox } from './Styled'
import { ActionListContainerContext} from './ActionListContext'

type ListProps = {
    variant?: 'inset' | 'full';
    selectionVariant?: 'single' | 'multiple';
    showDividers?: boolean; 
    role?: AriaRole;
    css?: CSS; 
}

const DEFAULT_TAG = 'ul'

type ListContextProps = Pick<ListProps, 'variant' | 'selectionVariant' | 'showDividers' | 'role'>
type ListElement = ElementType<typeof DEFAULT_TAG> 

const ListContext = createContext<ListContextProps>({})

const List = forwardRef<ListElement, ListProps>(({
    variant = 'inset',
    selectionVariant,
    showDividers = false,
    role,
    css = {},
    ...props
}, forwardedRef) => {

    const { 
        listRole, 
        listLabelledBy, 
        selectionVariant: containerSelectionVariant 
    } = useContext(ActionListContainerContext)

    if(!role) role = listRole
    if(!selectionVariant) selectionVariant = containerSelectionVariant
    
    return (
        <StyledListBox role={role || listRole} aria-labelledby={listLabelledBy} {...props} css={css} ref={forwardedRef}>
            <ListContext.Provider value={{ variant, selectionVariant, showDividers, role }}>
                {props.children} 
            </ListContext.Provider>
        </StyledListBox>
    )
})

List.displayName = 'List'

export {
    List,
    ListContext
}

export type {
    ListProps,
    ListElement,
    ListContextProps
}