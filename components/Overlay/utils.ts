

type Point = { 
    x: number; 
    y: number; 
}

const getSlideAnimationStartingVector = (anchorSide: AnchorSide): Point => {
    if (anchorSide?.endsWith('bottom')) {
        return {x: 0, y: -1}
      } else if (anchorSide?.endsWith('top')) {
        return {x: 0, y: 1}
      } else if (anchorSide?.endsWith('right')) {
        return {x: -1, y: 0}
      } else if (anchorSide?.endsWith('left')) {
        return {x: 1, y: 0}
    }

    return { x: 0, y: 0 }
}

export {
    getSlideAnimationStartingVector
}

export type {
    Point
}