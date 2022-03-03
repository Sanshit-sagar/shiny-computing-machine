import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { darkModeAtom, updateModeAtom, updateThemeAtom, activeThemeNameAtom } from '@/atoms/darkMode'

import { 
    MoonIcon, 
    SunIcon 
} from '@radix-ui/react-icons'
import { Flex } from '@/components/Flex' 


export const DarkMode = () => {
    const themeName = useAtomValue(activeThemeNameAtom)
    const updateTheme = useUpdateAtom(updateThemeAtom)
    const updateMode = useUpdateAtom(updateModeAtom)
    const isDark = useAtomValue(darkModeAtom)

    return (
        <Flex>
            <button onClick={updateTheme}>
                {themeName}
            </button>
            <button onClick={updateMode}>
                {isDark ? <MoonIcon /> : <SunIcon />}
            </button>
        </Flex>
    )
}