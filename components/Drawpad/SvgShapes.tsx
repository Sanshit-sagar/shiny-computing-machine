import * as React from "react";
import { useAtom } from "jotai";
import { shapeAtomListAtom } from "./atoms";
import SvgShape from "./SvgShape";

const SvgShapes = () => {
  const [shapeAtomList] = useAtom(shapeAtomListAtom);
  return (
    <>
      {shapeAtomList.map((shapeAtom) => (
        <SvgShape key={`${shapeAtom}`} shapeAtom={shapeAtom} />
      ))}
    </>
  );
};

export default React.memo(SvgShapes);
