import React, { Fragment, memo } from 'react'
import { useAtom } from 'jotai'
import { toolbarAtom } from "./atoms";
import {
    Tool,
    DimensionType
} from './interfaces'


export interface ToolbarProps {
    margin?: number;
    radius?: number;
    top?: number;
    left?: number;
    size?: number;
    orientation?: 'horizontal' | 'vertical';
    direction?: 'ltr' | 'rtl';
    position?: 'tl' | 'bl' | 'tr' | 'br' | 'tc' | 'bc'; 
    tools: Tool[];
    dispatch: (id: string) => void; 
};

export type SvgToolbarProps = Exclude<ToolbarProps, 'dispatch' | 'tools'>;

const ToolbarOnCanvas = ({ 
    top = 0, 
    left = 0, 
    margin = 4, 
    radius = 2, 
    size = 35, 
    orientation = 'vertical',
    tools, 
    dispatch 
}: ToolbarProps) => (
    <Fragment>
        <defs>
            <style type="text/css">
            {`
                @font-face {
                    font-family: 'Material Icons';
                    font-style: normal;
                    font-weight: 150;
                    src: url(https://fonts.gstatic.com/s/materialicons/v70/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
                }
            `}
            </style>
        </defs>
        <rect
            x={left}
            y={top}
            rx={radius}
            ry={radius}
            width={size + margin * 2}
            height={margin + (size + margin) * tools.length}
            fill="transparent"
            opacity="1"
        />
        {tools.map((tool, i) => (
          <Fragment key={tool.id}>
            <rect
                x={left + margin}
                y={top + margin + (size + margin) * i}
                rx={radius}
                ry={radius}
                width={35}
                height={35}
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(tool.id);
                }}
                stroke={tool.active ? "silver" : "white"}
                strokeWidth={tool.active ? "1" : "0.1"}
                fill="transparent"
                opacity="1"
            />
            <text
                x={left + margin + size / 2}
                y={top + margin + (size + margin) * i + size / 2}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ pointerEvents: "none" }}
                fontFamily="Material Icons"
                fontSize={size * 0.7}
            >
              {tool.text}
            </text>
          </Fragment>
        ))}
    </Fragment>
);

const SvgToolbar = ({ 
    top = 0,
    left = 0,
    size = 35,
    margin = 4, 
    radius = 2, 
    orientation = 'vertical',
    direction = 'ltr',
    position = 'tl'
}: SvgToolbarProps) => {
   
    const [tools, dispatch] = useAtom(toolbarAtom)

    let props = {
        size,  
        margin, 
        radius, 
        orientation, 
        direction, 
        position 
    };

    return (
        <ToolbarOnCanvas 
            tools={tools} 
            dispatch={dispatch} 
            {...props}
        />
    );
}

export default memo(SvgToolbar);
