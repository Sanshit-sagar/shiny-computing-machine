import React, { ReactNode } from 'react'
import { useAtomValue } from 'jotai/utils'
import { styled } from 'stitches.config'

import { SidebarInstance } from '@/components/Sidebar/examples'

import { Navbar, NavItem, DropdownMenu } from '@/components/Navbar'
import { LightningBoltIcon, CaretDownIcon } from '@radix-ui/react-icons'

import { activeThemeClassAtom } from '@/atoms/darkMode'
import { cssReset } from '../styles/globalStyles'
   
interface PersistentLayoutProps {
    children: ReactNode; 
}

const StyledLayoutContainer = styled('div', {
    height: '100vh', 
    width: '100%',
    bc: '$black1',  

    d: 'flex', 
    fd: 'row', 
    jc: 'space-between',
    ai: 'stretch', 
    gap: '0px'
})

const StyledDemos = styled('div', {

})


const PersistentLayout = ({ children }: PersistentLayoutProps) => {   
    cssReset()

    const activeThemeClass = useAtomValue(activeThemeClassAtom)
   
    return ( 
        <StyledLayoutContainer>
            <Navbar>
                <NavItem icon={<LightningBoltIcon />} />
                <NavItem icon="🔥" />
                <NavItem icon="🔥" />
            
                <NavItem icon={<CaretDownIcon />}>
                    <DropdownMenu />
                </NavItem>
            </Navbar>

            <SidebarInstance />
            <StyledDemos className={activeThemeClass}> 
                {children} 
            </StyledDemos>
        </StyledLayoutContainer>
    )
}


export default PersistentLayout