import React, { ReactNode } from 'react'
import { useAtomValue } from 'jotai/utils'

import { Flex } from '@/components/Flex'
import { ScrollArea } from '@/components/ScrollArea'

import { activeThemeClassAtom } from '@/atoms/darkMode'
import { cssReset } from '../styles/globalStyles'
   
interface PersistentLayoutProps {
    children: ReactNode; 
}

const PersistentLayout = ({ children }: PersistentLayoutProps) => {   
    cssReset()

    const activeThemeClass = useAtomValue(activeThemeClassAtom)
   
    return ( 
        <Flex className={activeThemeClass} css={{ height: '120vh', bc: '$accentBase', mt: -60, mx: 0, mb: 0, p: 0 }}>
            {children}
        </Flex>
    )
}


export default PersistentLayout

/**
 * 
 *  .dark .sidebar a:hover,
 .dark .sidebar button:hover{
     border: 0.1px solid;
     border-color: ${activeThemeClass.colors.light1};
     background-color:  ${activeThemeClass.colors.panelBase};
     color: ${activeThemeClass.colors.panelTextContrast};
 }
 .nextra-container nav {
     box-shadow: none; 
     border: none;
     outline: none;
     width: calc(100% - 270px);
     height: fit-content; 
     margin-left: 270px; 
     padding-left: 1.75rem; 
     margin-bottom: 0;
     padding-bottom: 0; 
     background-color: ${activeThemeClass.colors.dark1}; 
 }
 .nextra-container nav a:focus,
 .nextra-container nav a:focus-visible,
 .nextra-container nav summary:focus,
 .nextra-container nav summary:focus-visible{
     -webkit-user-select:none;
     -moz-user-select:none;
     -ms-user-select:none;
     user-select:none;
 }
 .nextra-container nav a:focus-visible,
 .nextra-container nav summary:focus-visible{
     box-shadow: none; 
 }
  .dark .sidebar a,
 .dark .sidebar button {
     color: ${activeThemeClass.colors.light1};
     background-color: ${activeThemeClass.colors.dark1};
 }

*/