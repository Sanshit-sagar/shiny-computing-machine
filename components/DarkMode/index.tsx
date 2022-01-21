import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { darkModeAtom, updateModeAtom, updateThemeAtom, activeThemeNameAtom } from '@/atoms/darkMode'

import PButton from '@/components/Button'
import { 
    MoonIcon, 
    SunIcon, 
    HomeIcon 
} from '@radix-ui/react-icons'


export const DarkMode = () => {
    const themeName = useAtomValue(activeThemeNameAtom)
    const updateTheme = useUpdateAtom(updateThemeAtom)
    const updateMode = useUpdateAtom(updateModeAtom)
    const isDark = useAtomValue(darkModeAtom)

    return (
        <PButton.Root radius="3">
            <PButton.Prefix variant="outlined" elementType={'a'} href={'/'}>
                <HomeIcon />
            </PButton.Prefix>
            <PButton.Base variant="outlined" onPress={updateTheme}>
                {themeName}
            </PButton.Base>
            <PButton.Suffix variant="outlined" onPress={updateMode}>
                {isDark ? <MoonIcon /> : <SunIcon />}
            </PButton.Suffix>
        </PButton.Root>
    )
}