import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { darkModeAtom, updateModeAtom, updateThemeAtom, activeThemeNameAtom } from '@/atoms/darkMode'

import PButton from '@/components/Button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'


export const DarkMode = () => {
    const themeName = useAtomValue(activeThemeNameAtom)
    const updateTheme = useUpdateAtom(updateThemeAtom)
    const updateMode = useUpdateAtom(updateModeAtom)
    const isDark = useAtomValue(darkModeAtom)

    return (
        <PButton.Root radius="y=x-n">
            <PButton.Prefix variant="secondary">
                hi
            </PButton.Prefix>
            <PButton.Base variant="primary" onPress={updateTheme}>
                {themeName}
            </PButton.Base>
            <PButton.Suffix variant="outlined" onPress={updateMode}>
                {isDark ? <MoonIcon /> : <SunIcon />}
            </PButton.Suffix>
        </PButton.Root>
    )
}