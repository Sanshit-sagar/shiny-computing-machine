import { MutableRefObject, RefObject } from 'react' 
import { useLayoutEffect } from './useLayoutEffect' 

interface ContextValue<T> {
  ref?: MutableRefObject<T>
}

export const useSyncRef = <T extends object>(
    context: ContextValue<T>, 
    ref: RefObject<T>
): void => {

    useLayoutEffect(() => {
        if (context && context.ref && ref) {
          context.ref.current = ref.current

          return () => {
            context.ref.current = null;
          }
        }
    }, [context, ref])
}


