
import { useState, HTMLAttributes } from 'react' 
import { useFocus, useFocusVisible, useFocusWithin } from '@react-aria/interactions'

interface FocusVisibleProps {
    autoFocus?: boolean;
    isTextInput?: boolean;
}
interface FocusProps {
    isDisabled?: boolean;
}
interface FocusWithinProps extends FocusProps {} 

interface FocusManagerProps extends FocusVisibleProps, FocusProps {
    mode?: 'visible' | 'within' | 'target'; 
}; 

interface ManageableFocus {
    isFocused: boolean;
    focusProps: HTMLAttributes<HTMLElement>; 
}

const FOCUS_DISABLED: ManageableFocus = { 
    isFocused: false, 
    focusProps: {} 
};


const useFocusVisibleWrapper = ({ autoFocus = false, isTextInput = true }: FocusVisibleProps): ManageableFocus => {
    const { isFocusVisible } = useFocusVisible({ autoFocus, isTextInput })
    return { isFocused: isFocusVisible, focusProps: {} };
}

const useFocusWithinWrapper = ({ isDisabled }: FocusWithinProps): ManageableFocus => {
    const [isFocusWithin, setFocusWithin] = useState(false)
    
    const { focusWithinProps } = useFocusWithin({
        isDisabled,
        onFocusWithinChange: (isFocusWithin: boolean) => setFocusWithin(isFocusWithin)
    })
  
    return { isFocused: isFocusWithin, focusProps: focusWithinProps };
}

const useFocusWrapper = ({ isDisabled }: FocusProps): ManageableFocus => {
    const [isFocused, setFocused] = useState<boolean>(false)

    let { focusProps } = useFocus({
        isDisabled,
        onFocusChange: (isFocused) => setFocused(isFocused)
    });
    
    return { isFocused, focusProps }
}

export const useFocusManager = ({ 
    mode = 'within',  isDisabled = false,  autoFocus = false,  isTextInput = true 
}: FocusManagerProps): ManageableFocus => {

    switch(mode) {
        case 'visible': {
            return isDisabled ? FOCUS_DISABLED : useFocusVisibleWrapper({ autoFocus, isTextInput })
        };
        case 'within': {
            return useFocusWithinWrapper({ isDisabled })
        }
        case 'target': {
            return useFocusWrapper({ isDisabled })
        }
        default: {
            return FOCUS_DISABLED
        }
    }
}