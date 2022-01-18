import React, { useRef, MutableRefObject } from 'react'

import { FocusRing, FocusScope } from '@react-aria/focus'
import { mergeProps } from '@react-aria/utils'

import { ValidationState } from '@/interfaces/Shared'
import { Cross2Icon, CheckIcon } from '@radix-ui/react-icons'

interface InputProps {
    children: React.ReactNode;
    inputRef?: MutableRefObject<HTMLInputElement>;
    fieldProps: any;
    autoFocus: boolean;
    isDisabled: boolean;
    validationState: ValidationState;
}

const ValidationIcon = ({ validationState  }: { validationState?: ValidationState }) => ( 
      validationState === 'valid'    ? <CheckIcon  data-testid="valid-icon" /> 
    : validationState === 'invalid'  ? <Cross2Icon data-testid="invalid-icon" />
    : null
);

export const Input = ({
    children,
    inputRef,
    fieldProps,
    autoFocus = false,
    isDisabled = false,
    validationState = 'valid'
}: InputProps) => {
    
    if(!inputRef) {
        const defaultRef: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(); 
        inputRef = defaultRef; 
    }

    return (
        <div {...mergeProps(fieldProps)} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: '1px' }}>
             <FocusRing isTextInput within>
                <div role="presentation" ref={inputRef} style={{ display:'flex', border: '1px solid black', backgroundColor: 'white', color: 'purple', fontSize: '14px', lineHeight: 1, fontWeight: 400, padding: '2em' }}>
                    <FocusScope autoFocus={false}>
                    {children}
                    </FocusScope>
                </div>
             </FocusRing>
             <ValidationIcon validationState={validationState} />
        </div>
    );
}


// isLoading, 
// isDisabled,
// isRequired,
// isReadOnly,
//  classNames