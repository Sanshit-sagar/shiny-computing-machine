import { useAtomValue } from 'jotai/utils'
import { activeThemeClassAtom } from '@/components/DarkMode'

type InteractiveComponent = 'Bg' | 'Solid' | 'Base' | 'Border';
type StateType = '' | 'Active' | 'Hover' | 'Subtle';
type VariantType = 'accent' | 'disabled' | 'success' | 'warning' | 'danger';

type InteractiveComponentTheme = 
                | `${VariantType}${InteractiveComponent}${StateType}` 
                | `${VariantType}FocusRing`; 
type InteractiveTextTheme =  
                | `${VariantType}${'Text'}` 
                | `${VariantType}${'Text'}Contrast` 
                | `${VariantType}Line`;

export type ThemedAlias = InteractiveTextTheme | InteractiveComponentTheme;
export type ThemeClass = Partial<{
    [key in ThemedAlias]: string;
}>;
export type ColorsSubset = 'all' | VariantType | VariantType[] | undefined; 

interface UseColorProps {
    subset: ColorsSubset;
}

export const useColors = ({ subset = 'accent' }: UseColorProps): ThemeClass => {
    let activeThemeColors = useAtomValue(activeThemeClassAtom)
   
    const extract = (alias: ThemedAlias) => {
        try {
            return activeThemeColors.colors.alias.value; 
        } catch(error) {
            return '';
        }
    } 
    
    let accentTheme: ThemeClass = {
        accentBase: extract('accentBase'),
        accentBgSubtle: extract('accentBgSubtle'),
        accentBg: extract('accentBg'),
        accentBgHover: extract('accentBgHover'),
        accentBgActive: extract('accentBgActive'),
        accentLine: extract('accentLine'),
        accentSolid: extract('accentSolid'),
        accentSolidHover: extract('accentSolidHover'),
        accentSolidActive:  extract('accentSolidActive'),
        accentText: extract('accentText'),
        accentTextContrast: extract('accentTextContrast'),
        accentFocusRing: extract('accentFocusRing')
    };
    
    return accentTheme;
}