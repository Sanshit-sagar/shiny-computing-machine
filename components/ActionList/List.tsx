import { ElementType, createContext, useContext } from 'react'
import { CSS } from 'stitches.config' 

import { ForwardRefComponent } from '@radix-ui/react-polymorphic'

import { AriaRole } from './types'
import { StyledListBox } from './styles'
import { ActionListContainerContext} from './ActionListContainerContext'

interface ListProps {
    variant?: 'inset' | 'full';
    selectionVariant?: 'single' | 'multiple';
    showDividers?: boolean; 
    role?: AriaRole;
    css?: CSS; 
}

const DEFAULT_TAG = 'ul'

type ListContextProps = Pick<ListProps,  'variant' | 'selectionVariant' | 'showDividers' | 'role'>
type ListElement = ElementType<typeof DEFAULT_TAG> 

const ListContext = createContext<ListContextProps>({})

const List = forwardedRef<ListElement, ListProps>(({
    variant = 'inset',
    selectionVariant,
    showDividers = false,
    role,
    css = {},
    ...props
}, forwardedRef): JSX.Element => {

    const { listRole, listLabelledBy, selectionVariant: containerSelectionVariant } = useContext(ActionListContainerContext)
    
    return (
        <StyledListBox role={role || listRole} aria-labelledby={listLabelledBy} {...props} css={css} ref={forwardedRef}>
            <ListContext.Provider 
                value={{ 
                    variant, 
                    selectionVariant: selectionVariant || containerSelectionVariant, 
                    showDividers,
                    role: role || listRole
                }}
            >
                {props.children} 
            </ListContext.Provder> 
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