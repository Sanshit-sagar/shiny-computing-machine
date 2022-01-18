import React, { ReactNode } from 'react'
import { styled } from '../../stitches.config'

import * as Radix from '@radix-ui/react-primitive'
import { Cross2Icon } from '@radix-ui/react-icons'

import { Flex } from '@/components/Flex'
import { Text } from '@/components/Text/Text'
import { Tooltip } from '@/components/Tooltip'
import { Spinner } from '@/components/Spinner'

import { mergeProps } from '@react-aria/utils'
import { useHover, useFocusWithin } from '@react-aria/interactions'

import { stylesFactory } from '../../utils/StylesFactory'

import { DecoratedLabel } from '@/components/Shared'

const StyledTag = styled('button', {
    all: 'unset',
    flex: '0 0 auto',
    padding: '1px',
    margin: '1px',
    border: '1px solid',
    borderRadius: '$1',
    display: 'inline-flex',
    fontSize: '$1',
    alignItems: 'center',
    justifyContent: 'center',
    pl: '$2',
    pr: '$2',
});

type TagProps = React.ComponentProps<typeof StyledTag> & { 
    isClickable: boolean;
    isDeletable: boolean;
    isEditable: boolean;
    isDisabled: boolean;
    isLoading: boolean; 
    size: 'sm' | 'md' | 'lg';
    leftIcon?: ReactNode | null;
    rightIcon?: ReactNode | null;
    children: ReactNode | string;
    handleDelete: () => void; 
};

const TagDeletor = ({ 
    visible,
    enabled, 
    handleDelete 
}: { 
    visible: boolean;
    enabled: boolean; 
    handleDelete: () => void; 
}) => {
    if(!visible) return null; 
  
    return (
        <Tooltip content={'Delete?'}>
            <button onClick={(_e) => handleDelete()}>
                <Text css={{ '&:hover': {  color: 'red' } }}>
                    <Cross2Icon />
                </Text>
            </button>
        </Tooltip>
    ); 
}

const ExtendedTag = React.forwardRef<
    React.ElementRef<typeof StyledTag>,
    Radix.ComponentPropsWithoutRef<typeof StyledTag> & TagProps
>(({ 
    children, 
    isClickable, 
    isDeletable, 
    isEditable, 
    isDisabled, 
    isLoading,
    size, 
    leftIcon, 
    rightIcon,
    handleDelete,
    ...props
}, forwardedRef) => {
    const [isFocusWithin, setIsFocusWithin] = React.useState<boolean>(false);

    const { hoverProps, isHovered } = useHover({
        onHoverStart: (e) => console.log('hover start'),
        onHoverEnd: (e) => console.log('hover done'),
    }); 

    const { focusWithinProps } = useFocusWithin({
        onFocusWithin: (e) => console.log('focus'),
        onBlurWithin: (e) => console.log('blur'),
        onFocusWithinChange: (isFocusWithin: boolean) => setIsFocusWithin(isFocusWithin)
    });
    let disabled = isDisabled

    return (
        <StyledTag 
            {...mergeProps(hoverProps,focusWithinProps)} 
            ref={forwardedRef} 
            css={{ 
                ...stylesFactory({ isHovered, isFocusWithin, disabled, isLoading, })
            }}
        >
            <Flex css={{ fd: 'row', jc: 'space-around', ai: 'center', gap: '$1' }}>
                <>  {leftIcon} </>
                <>   {isLoading ? (
                        <Spinner 
                            size={'3'} 
                            radius={'15'} 
                            speed={'4'} 
                            hideLabel={true} 
                        />
                     ) 
                :  <> {children} </>
                } </>
                <>  {rightIcon} </> 
                <TagDeletor 
                    visible={isDeletable} 
                    enabled={!isDisabled && !isClickable} 
                    handleDelete={handleDelete} 
                />
            </Flex>
        </StyledTag>
    )
}); 

export const Tag = ExtendedTag