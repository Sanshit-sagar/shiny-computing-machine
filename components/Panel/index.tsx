import React from 'react'
import { styled, StitchesVariants } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'

const StyledPanel = styled('div', {
  backgroundColor: 'red',
  border: '1px solid red',
  borderRadius: '$1',
  boxShadow: '$shadowLight 0px 10px 38px -10px, $shadowDark 0px 10px 20px -15px',
});

type PanelProps = Radix.ComponentPropsWithoutRef<typeof StyledPanel>;
type PanelVariants = StitchesVariants<typeof StyledPanel> & { children: React.ReactNode; }

export const Panel = React.forwardRef<
    React.ElementRef<typeof StyledPanel>,
    PanelProps 
>((props, forwardedRef) => (
    <StyledPanel {...props} ref={forwardedRef}>
        {props.children}
    </StyledPanel>
)); 
