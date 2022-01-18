import React, { memo } from 'react'
import { useAtom } from 'jotai'
import { selectAtom,ShapeAtom } from './atoms'


const SvgShape: React.FC<{
    shapeAtom: ShapeAtom;
  }> = ({ shapeAtom }) => {
    const [shape] = useAtom(shapeAtom)
    const [selected, select] = useAtom(selectAtom)

    return (
      <g
        transform={`translate(${shape.x} ${shape.y})`}
        onClick={(e) => {
            e.stopPropagation();
            select(shapeAtom);
        }}
      >
        <path
            d={shape.path}
            fill="none"
            stroke="red"
            opacity={selected === shapeAtom ? 0.2 : 0}
            strokeWidth="20"
        />
        <path 
            d={shape.path} 
            fill="none" 
            stroke={'white'} 
            strokeWidth="4" 
        />
      </g>
    );
};
  
export default memo(SvgShape);
  