import { StitchesVariants, CSS } from '../../stitches.config'
import { StyledBlankState } from './styles'

export type BlankStateCSSProps = { css?: CSS };
export type StyledBlankStateProps = StitchesVariants<typeof StyledBlankState>;
export type BlankStateOwnProps = BlankStateCSSProps & StyledBlankStateProps; 

export type BlankStateDescriptors = {
    title: string; 
    subtitle: string; 
    action?: {
        onClick: () => void; 
        label?: string;
    };
}

export type InitBlankStateProps = BlankStateDescriptors & {
    dashed: boolean;
    bordered: boolean; 
    transparent: boolean;
    isDisabled: boolean;
    isLoading: boolean; 
};

export type BlankStateState = Omit<InitBlankStateProps, keyof BlankStateDescriptors> & {
    children: React.ReactNode;
    isHovered: boolean;
    isPressed: boolean;
    isFocused: boolean;
    isDisabled: boolean;
    isLoading: boolean; 
};
