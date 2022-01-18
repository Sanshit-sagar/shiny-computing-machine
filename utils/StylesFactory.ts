 
type StyleFactoryBase = {
    isHovered: boolean;
    isLoading?: boolean;
    isPressed?: boolean;
    isFocusWithin: boolean;
    disabled: boolean; 
    isDisabled?: boolean; 
    checked?: boolean; 
};

export const stylesFactory = (props: StyleFactoryBase) => {
   let {
        isHovered, 
        isLoading = false,
        isPressed = false, 
        isFocusWithin,
        disabled = false,
        isDisabled = false,
        checked = false
    } = props 

    let isFocused = isFocusWithin
    let outOfService = (disabled  || isDisabled)
    
    return {
        backgroundColor: (
             outOfService   ?   isHovered      ?   '$disabledSolidHover'  : '$disabledSolid'
           : checked        ?   isHovered      ?   '$disabledSolidHover'  : '$disabledSolid'
           : isLoading      ?   '$accentBgActive' 
           : checked        ?   '$successBgActive'
           : isHovered      ?   '$accentBgHover' 
           : isPressed      ?   '$accentBgActive' 
           :                    '$accentBg'
        ),
        border: '1px solid',
        borderColor: (
              outOfService  ? isHovered ? '$successBorderHover' :'$successBorder'
            : checked       ? isHovered ? '$successBorderHover' :'$successBorder'
            : isLoading     ? '$accentFocusRing'
            : isFocused     ? '$accentFocusRing'
            : isHovered     ? '$accentBorderHover' 
            : isPressed     ? '$accentBorderActive' 
            :                 '$accentBorder'
        ),
        color: (
              outOfService  ? isHovered ? '$disabledTextContrast' : '$disabledText' 
            : checked       ? isHovered ? '$successTextContrast' : '$successText' 
            : isLoading     ? 'accentTextContrast' 
            : isHovered     ? '$accentTextContrast' 
            : isFocused     ? '$accentTextContrast' 
                            : '$accentText'),
        cursor: outOfService ? 'not-allowed' : isLoading ? 'progress' : 'pointer'
    };
}