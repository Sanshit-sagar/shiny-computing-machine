import React, { Fragment, forwardRef, ElementRef } from 'react'

import {
    ControlItemProps,
    ExtendedIconProps,
    ExtendedTitleProps,
    ExtendedDescriptionProps
} from './interfaces'

import {
    Container,
    Details,
    Heading,
    ControlIcon,
    Title as StyledTitle,
    Description as StyledDescription
} from './styles'

import { useInteractions } from '@/hooks/useInteractions'

const ellipses = (text: string, len: number) => (text && text?.length >len) ? `${text.substring(0,len)}` : `${text}`;

const Title = forwardRef<
    ElementRef<typeof StyledTitle>,
    ExtendedTitleProps
>(({ text, isDisabled, isHovered, isFocused, isRequired, ...otherProps }, forwardedRef) => (
    <StyledTitle 
        {...otherProps}
        ref={forwardedRef}
        css={{
            color: isDisabled ? '$disabledText' : '$accentText',
            textDecoration: isDisabled ? 'line-through' : 'underline',
            textDecorationColor: '$accentBase',
            textTransform: 'uppercase'
        }}
    >
        {ellipses(text,20)} 
    </StyledTitle> 
));

const Description = forwardRef<
    ElementRef<typeof StyledDescription>,
    ExtendedDescriptionProps
>(({ text, isDisabled, isHovered, isFocused, isRequired, ...otherProps }, forwardedRef) => (
    <StyledDescription 
        {...otherProps}
        ref={forwardedRef}
        css={{ 
            color: isDisabled ? '$disabledText' : '$accentText',
            opacity: isHovered || isFocused ? 1 : 0.5
        }}
    >
        {ellipses(text,50)}
    </StyledDescription> 
));

const Icon =  forwardRef<
    ElementRef<typeof ControlIcon>,
    ExtendedIconProps
>(({ icon, isDisabled, isHovered, isFocused, isRequired, ...otherProps }, forwardedRef) => (
    <ControlIcon
        {...otherProps}
        ref={forwardedRef}
        css={{
            color: isDisabled ? '$disabledTextContrast' : '$accentTextContrast'
        }}
    >
        {icon}
    </ControlIcon>
));

export const ControlItem = ({ 
    icon,
    title, 
    description,
    isDisabled,
    isRequired,
    controlItem
}: ControlItemProps) => {
   
    const { interactionProps, isHovered, isFocused } = useInteractions({
        isDisabled
    })

    return (
        <Container {...interactionProps}>

            <Details>
                <Heading>
                    <Icon
                        icon={icon}
                        isDisabled={isDisabled}
                        isRequired={isRequired}
                        isHovered={isHovered}
                        isFocused={isFocused} 
                        text={''}                    
                    />
                    <Title 
                        text={title} 
                        isDisabled={isDisabled}
                        isRequired={isRequired}
                        isHovered={isHovered}
                        isFocused={isFocused}
                    />
                </Heading>
                <Description 
                    text={description} 
                    isRequired={isRequired}
                    isDisabled={isDisabled}
                    isHovered={isHovered}
                    isFocused={isFocused}
                />
            </Details>

            <Fragment> {controlItem} </Fragment> 
        </Container>
    );
}
