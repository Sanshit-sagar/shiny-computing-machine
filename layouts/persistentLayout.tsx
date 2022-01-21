import React, { ReactNode } from 'react'
import { useAtomValue } from 'jotai/utils'
import { styled } from 'stitches.config'

import { SidebarInstance } from '@/components/Sidebar/examples'

import { activeThemeClassAtom } from '@/atoms/darkMode'
import { cssReset } from '../styles/globalStyles'
   
interface PersistentLayoutProps {
    children: ReactNode; 
}

const StyledLayoutContainer = styled('div', {
    height: '100vh', 
    width: '100%',
    bc: '$accentBase',  

    d: 'flex', 
    fd: 'row', 
    jc: 'flex-start',
    ai: 'flex-start', 
    gap: 0 
})

const PersistentLayout = ({ children }: PersistentLayoutProps) => {   
    cssReset()

    const activeThemeClass = useAtomValue(activeThemeClassAtom)
   
    return ( 
        <StyledLayoutContainer className={activeThemeClass}>
            <SidebarInstance />
            {children}
        </StyledLayoutContainer>
    )
}


export default PersistentLayout