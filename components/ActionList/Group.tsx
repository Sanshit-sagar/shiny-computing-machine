import { ReactNode, ReactElement, createContext, useContext } from 'react' 

import { CSS } from 'stitches.config'
import { useSSRSafeId } from '@react-aria/ssr'

import { AriaRole } from './types'
import { ListContext } from './List'
import type { ListProps } from './List' 
import { 
    StyledGroup,
    StyledHeader,
    StyledHeaderLabel 
} from './Styled'

import { Box } from '@/components/Box'

type GroupRenderer = (ReactElement | ReactElement[])[]

interface GroupProps {
    variant?: 'subtle' | 'filled'; 
    title?: string;
    auxiliaryText?: string
    role?: AriaRole;  
    css: CSS;  
    selectionVariant?: ListProps['selectionVariant'] | false;
    children?: GroupRenderer | ReactNode;
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
            <StyledHeaderLabel id={labelId}> {title} </StyledHeaderLabel> 
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