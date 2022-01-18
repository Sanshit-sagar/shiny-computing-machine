import React, { ReactNode, useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";

import { dimensionAtom, offsetAtom, zoomAtom, dragAtom } from "./atoms";

import SvgShapes from "./SvgShapes";
import SvgDots from "./SvgDots";
import SvgToolbar from "./SvgToolbar";

type Props = {
    width: number;
    height: number;
    Shapes?: ReactNode;
    Dots?: ReactNode;
    Toolbar?: ReactNode;
}

const SvgCanvas: React.FC<Props> = ({
    width,
    height,
    Shapes = <SvgShapes />,
    Dots = <SvgDots />,
    Toolbar = <SvgToolbar />
}) => {
    const [isHovered, setHovered] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false); 

    const [, setDimension] = useAtom(dimensionAtom);

    useEffect(() => {
        setDimension({ width, height })
    }, [setDimension, width, height])

    const [offset] = useAtom(offsetAtom);
    const [zoom] = useAtom(zoomAtom);
    const [, drag] = useAtom(dragAtom);
    const isDown = useRef<null | "mouse" | "touch">(null);
    return (
        <svg
            viewBox={`${offset.x} ${offset.y} ${width / zoom} ${height / zoom}`}
            onMouseDown={(e) => {
                if (e.button === 0 && !isDown.current) {
                    isDown.current = "mouse";
                    drag([e.clientX - 300, e.clientY-175]);
                }
            }}
            onMouseUp={(e) => {
                if (isDown.current === "mouse") {
                    isDown.current = null;
                    drag("end");
                }
            }}
            onMouseMove={(e) => {
                if (isDown.current === "mouse") {
                    drag([e.clientX - 300, e.clientY - 175])
                }
            }}
            onTouchStart={(e) => {
                if (e.touches.length === 1 && !isDown.current) {
                    isDown.current = "touch";
                    drag([e.touches[0].clientX - 300, e.touches[0].clientY - 175]);
                }
            }}
            onTouchEnd={(e) => {
                if (isDown.current === "touch") {
                    isDown.current = null;
                    drag("end");
                }
            }}
            onTouchMove={(e) => {
                if (isDown.current === "touch") {
                    drag([e.touches[0].clientX - 300, e.touches[0].clientY - 175]);
                }
            }}
        >
            {Shapes}
            {Dots}
            <g
                id="toolbar"
                onMouseDown={(e) => {
                    e.stopPropagation();
                }}
                onTouchStart={(e) => {
                    e.stopPropagation();
                }}
                transform={
                    `translate(${offset.x + 10 / zoom} ${offset.y + 10 / zoom}) scale(${1 / zoom})`
                }
            >
                {Toolbar}
            </g>
    </svg>
  );
};

export default SvgCanvas;
