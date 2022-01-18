import React, { useRef, ReactNode } from 'react'
import { styled } from '../../stitches.config'

import * as Radix from '@radix-ui/react-primitive'

import { useAtomValue } from 'jotai/utils'

import SvgCanvas from './SvgCanvas'
import SvgToolbar, { SvgToolbarProps as ToolbarState } from './SvgToolbar'

import { useDimensions } from '../../hooks/useDimensions'
import { modeAtom, zoomAtom } from './atoms'

const initToolbarState: ToolbarState = {
    top: 0,
    left: 0,
    size: 35,
    radius: '0.25rem',
    margin: '5px',
    orientation: 'vertical',
    direction: 'ltr',
    position: 'tl'
}

const ToolbarInstance = (state: ToolbarState) => (
    <SvgToolbar {...state} />
);

const CanvasContainer = styled('div', {
    height: '100%',
    width: '100%',
    br: '$2',
    color: '$accentText',
    bc: '$accentSolid',
    cursor: 'crosshair'
});

type ExtendedCanvasProps = Radix.ComponentPropsWithoutRef<typeof CanvasContainer> & { 
    mode: 'pen' | 'select'; 
    children: ReactNode; 
    ref: React.MutableRefObject<any>; 
};

const ExtendedCanvas = React.forwardRef<
    React.ElementRef<typeof CanvasContainer>,
    ExtendedCanvasProps
>(({ mode, ref, children, ...otherProps }, forwardedRef) => (
    
    <CanvasContainer
        {...otherProps}
        ref={ref}
        css={{
            cursor: mode === 'pen' ? 'crosshair' : 'grab'
        }}
    >
        {children}
    </CanvasContainer>
)); 

export const Canvas = () => {
    const parentRef = useRef(null)
    const mode = useAtomValue(modeAtom)
    const { height, width, top, left } = useDimensions(parentRef)

    return (
        <CanvasContainer 
            ref={parentRef}
        >
            <SvgCanvas 
                height={height} 
                width={width} 
            />
        </CanvasContainer>
    );
}