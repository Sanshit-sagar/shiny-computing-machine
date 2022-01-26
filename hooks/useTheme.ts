
import { useAtomValue } from 'jotai/utils'
import { activeThemeClassAtom } from '@/atoms/darkMode'

export const useTheme = () => {
    const activeTheme = useAtomValue(activeThemeClassAtom)
    return activeTheme 
}

