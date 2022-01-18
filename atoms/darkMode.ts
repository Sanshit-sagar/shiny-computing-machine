import { Atom, atom } from 'jotai'
import { ThemeDatum } from '@/interfaces/Themes'
import { darkThemes, lightThemes } from '@/themes/classes'

export const modeAtom = atom('dark')
export const darkModeAtom = atom(
    (get) => get(modeAtom)==='dark' ? true : false
)

export const activeThemeIndexAtom = atom(0)
export const themesAtom: Atom<ThemeDatum[]> = atom(
    (get) =>  get(modeAtom) === 'dark' ? [...darkThemes] : [...lightThemes]
)

export const activeThemeNameAtom = atom(
    (get) => get(themesAtom)[get(activeThemeIndexAtom)].name.split(' ')[0]
)

export const activeThemeClassAtom = atom(
    (get) => get(themesAtom)[get(activeThemeIndexAtom)].className
)
export const setModeAtom = atom(
    null,
    (_get, set, update) => set(modeAtom, update)
)

export const updateModeAtom = atom(
    null,
    (get, set) => set(modeAtom, get(modeAtom) === 'dark' ? 'light' : 'dark')
)

export const activeThemeIdAtom = atom(
    (get) => get(themesAtom)[Number(get(activeThemeIndexAtom))].id
)

export const updateThemeAtom = atom(
    null,
    (get, set) => {
        const len = get(themesAtom).length
        const prev = get(activeThemeIndexAtom) 
        if(prev === 0) set(updateModeAtom)
        set(activeThemeIndexAtom, (get(activeThemeIndexAtom) + 1) % len)
    }
)

export const assignThemeAtom = atom(
    null,
    (get, set, update: number) => {
        set(activeThemeIndexAtom, update)
    }
)
