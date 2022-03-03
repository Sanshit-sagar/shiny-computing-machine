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
    bc: '$accentBase',  

    d: 'flex', 
    fd: 'column', 
    jc: 'flex-start',
    ai: 'stretch', 
    gap: '0px'
})

const StyledDemos = styled('div', {
    
})

const StyledBody = styled('div', {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 0
})



const HeaderNavbar = () => {
    return (
        <Navbar>
            <NavItem icon={<LightningBoltIcon />} />

            <NavItem icon={<CaretDownIcon />}>
                <DropdownMenu />
            </NavItem>
        </Navbar>
    )
}


const PersistentLayout = ({ children }: PersistentLayoutProps) => {   
    cssReset()

    const activeThemeClass = useAtomValue(activeThemeClassAtom)
   
    return ( 
    
        <StyledLayoutContainer className={activeThemeClass}>
            <StyledBody>
                <SidebarInstance />
                <StyledDemos> {children} </StyledDemos>
            </StyledBody>
        </StyledLayoutContainer>
    )
}


export default PersistentLayout