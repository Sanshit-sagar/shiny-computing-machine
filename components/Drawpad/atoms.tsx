import { atom, PrimitiveAtom } from "jotai";
import { curveToBezier } from "./bezier-points/curve-to-bezier"
import { pointsOnBezierCurves } from "./bezier-points/index"

export const modeAtom = atom<"pen" | "select">("pen")
export const dimensionAtom = atom({ width: 0, height: 0 })
export const offsetAtom = atom({ x: 0, y: 0 });
export const zoomAtom = atom(1);

export type ShapeAtom = PrimitiveAtom<{
  path: string;
  color: string;
  x: number;
  y: number;
}>;

const createShapeAtom = (path: string): ShapeAtom => {
    const shapeAtom = atom({ path, color: "black", x: 0, y: 0 });
    return shapeAtom
}

export const shapeAtomSelectedAtom = atom<ShapeAtom | null>(null);

export const selectAtom = atom(
  (get) => get(shapeAtomSelectedAtom),
  (get, set, shapeAtom: ShapeAtom | null) => {
    const mode = get(modeAtom);
    if (mode === "select") {
      set(shapeAtomSelectedAtom, shapeAtom);
    }
  }
);

export const shapeAtomListAtom = atom<ShapeAtom[]>([]);

export const dotsAtom = atom<[number, number][]>([]);

export const addDotAtom = atom(
  null,
  (get, set, [x, y]: readonly [number, number]) => {
    const offset = get(offsetAtom);
    const zoom = get(zoomAtom);
    const dots = get(dotsAtom);
    set(dotsAtom, [...dots, [x / zoom + offset.x, y / zoom + offset.y]]);
  }
);

export const commitDotsAtom = atom(null, (get, set) => {
  const dots = get(dotsAtom);
  if (dots.length > 2) {
    let bcurve = curveToBezier(dots);
    const reducedPoints = pointsOnBezierCurves(bcurve, 0.5, 3);
    if (reducedPoints.length > 2) {
      bcurve = curveToBezier(reducedPoints);
    }
    let path = `M${bcurve[0][0]} ${bcurve[0][1]}`;
    let i = 1;
    while (i + 2 < bcurve.length) {
      path += ` C${bcurve[i][0]} ${bcurve[i][1]},`;
      path += `${bcurve[i + 1][0]} ${bcurve[i + 1][1]},`;
      path += `${bcurve[i + 2][0]} ${bcurve[i + 2][1]}`;
      i += 3;
    }
    set(shapeAtomListAtom, [...get(shapeAtomListAtom), createShapeAtom(path)]);
  }
  set(dotsAtom, []);
});

const dragStartAtom = atom<{ x: number; y: number; dragged?: boolean } | null>(
  null
);

export const dragAtom = atom(
  null,
  (get, set, pos: readonly [number, number] | "end") => {
    const mode = get(modeAtom);
    if (mode === "pen") {
      if (pos === "end") {
        set(commitDotsAtom, null);
      } else {
        set(addDotAtom, pos);
      }
    } else if (mode === "select") {
      const selected = get(shapeAtomSelectedAtom);
      const zoom = get(zoomAtom);
      const dragStart = get(dragStartAtom);
      if (selected) {
        const { x, y } = get(selected);
        if (pos === "end") {
          if (!dragStart?.dragged) {
            set(shapeAtomSelectedAtom, null);
          }
          set(dragStartAtom, null);
        } else if (dragStart) {
          set(selected, (prev) => ({
            ...prev,
            x: dragStart.x + pos[0] / zoom,
            y: dragStart.y + pos[1] / zoom
          }));
          set(dragStartAtom, {
            ...dragStart,
            dragged: true
          });
        } else {
          set(dragStartAtom, {
            x: x - pos[0] / zoom,
            y: y - pos[1] / zoom
          });
        }
      } else {
        const offset = get(offsetAtom);
        if (pos === "end") {
          set(dragStartAtom, null);
        } else if (dragStart) {
          set(offsetAtom, {
            x: dragStart.x - pos[0] / zoom,
            y: dragStart.y - pos[1] / zoom
          });
        } else {
          set(dragStartAtom, {
            x: offset.x + pos[0] / zoom,
            y: offset.y + pos[1] / zoom
          });
        }
      }
    }
  }
);

export const toolbarAtom = atom(
  (get) => {
    const mode = get(modeAtom);
    const selected = get(shapeAtomSelectedAtom);
    return [
      {  id: "pen",     text: "\ue150", active: mode === "pen" },
      {  id: "select",  text: "\uf1e2", active: mode === "select" },
      {  id: "zoomIn",  text: "\ue8ff" }, 
      {  id: "zoomOut", text: "\ue900" },
      {  id: "save",    text: "\ue161" },
      ...(selected
        ? [
            { id: "palette", text: "\ue40a" },
            { id: "delete", text: "\ue872" }
          ]
        : [])
    ];
  },
  (get, set, id) => {
    if (id === "pen" || id === "select") {
      set(modeAtom, id);
      set(shapeAtomSelectedAtom, null);
    } else if (id === "zoomIn" || id === "zoomOut") {
      const dimension = get(dimensionAtom);
      const zoom = get(zoomAtom);
      const nextZoom = id === "zoomIn" ? zoom * 1.2 : zoom / 1.2;
      set(zoomAtom, nextZoom);
      set(offsetAtom, (prev) => ({
        x: prev.x + (dimension.width * (1 / zoom - 1 / nextZoom)) / 2,
        y: prev.y + (dimension.height * (1 / zoom - 1 / nextZoom)) / 2
      }));
    } else if (id === "palette") {
      const selected = get(shapeAtomSelectedAtom);
      if (selected) {
        set(selected, (prev) => ({
          ...prev,
          color:
            prev.color === "black"
              ? "green"
              : prev.color === "green"
              ? "blue"
              : prev.color === "blue"
              ? "red"
              : "black"
        }));
      }
    } else if (id === "delete") {
      const selected = get(shapeAtomSelectedAtom);
      set(shapeAtomSelectedAtom, null);
      set(shapeAtomListAtom, (prev) =>
        prev.filter((item) => item !== selected)
      );
    }
  }
);
