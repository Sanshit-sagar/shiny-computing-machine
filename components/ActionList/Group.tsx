import React from 'react' 

import { CSS } from 'stitches.config'
import { useSSRSafeId } from '@react-aria/ssr'

import { Box } from '@/components/Box'

import { ListContext } from './List'
import type { ListProps } from './List' 

import { AriaRole } from './types'
import { StyledHeader, StyledGroup } from './Styled'

interface GroupProps {
    variant?: 'subtle' | 'filled'; 
    title?: string;
    auxiliaryText?: string
    role?: AriaRole;  
    css: CSS;  
    selectionVariant?: ListProps['selectionVariant'] | false
}


type ContextProps = Pick<GroupProps, 'selectionVariant'>
const GroupContext = createContext<ContextProps>({

})

const Group = ({ 
    role,
    title,
    variant = 'subtle',
    auxiliaryText,
    selectionVariant,
    css = {},
    ...props
}: GroupProps) => {

    const labelId = useSSRSafeId()
    const { role: listRole } = useContext(GroupContext)

    return (
        <StyledGroup role="none" {...props} css={{ ...css }}>
            {title && (
                <Header 
                    title={title} 
                    variant={variant} 
                    auxiliaryText={auxiliaryText} 
                    labelId={labelId} 
                />
            )}
            <GroupContext.Provider value={{ selectionVariant }}>
                <Box 
                    as="ul" 
                    aria-labelledby={title ? labelId : undefined} 
                    role={role || (listRole && `group`)} 
                    css={{ paddingInlineStart: 0 }}
                >
                    {props.children}
                </Box>
            </GroupContext.Provider>
        </StyledGroup> 
    )
}

type HeaderProps = Pick<GroupProps, 'variant' | 'title' | 'auxiliaryText'> & {
    labelId: string;
}

const Header = ({ variant, title, auxiliaryText, labelId, ...props }) => {
    const { variant: listVariant } = useContext(ListContext)

    return (
        <StyledHeader role="presentation" aria-hidden="true" {...props}>
            <span id={labelId}> {title} </span> 
            {auxiliaryText && (
                <span> {auxiliaryText} </span> 
            )}
        </StyledHeader> 
    )
}

export {
    Header,
    Group
}

export {
    HeaderProps,
    GroupProps,
    GroupContext
}