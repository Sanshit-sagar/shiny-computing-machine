import { useRef, useMemo, useEffect } from 'react' 
import { CountUpHookProps, CountUpApi, UpdateFn } from './types'
import { CountUp as CountUpJs } from 'countup.js'

import { useEventCallback } from '@/hooks/useEventCallback'
import { createCountUpInstance } from './createCountUp'

const defaultProps = {
    decimal: '.',
    delay: null,
    prefix: '',
    suffix: '',
    duration: 2,
    start: 0,
    startOnMount: true,
    enableReinitialize: true
}

export const useCountUp = (props: CountUpHookProps): CountUpApi => {
    const {
      ref,
      startOnMount,
      enableReinitialize,
      delay,
      onEnd,
      onStart,
      onPauseResume,
      onReset,
      onUpdate,
      ...instanceProps
    } = useMemo(() => ({ ...defaultProps, ...props }), [props]);
  
    const countUpRef = useRef<CountUpJs>();
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const isInitializedRef = useRef(false);
  
    const createInstance = useEventCallback(() => {
      return createCountUpInstance(
        typeof ref === 'string' ? ref : ref.current!,
        instanceProps,
      );
    });
  
    const getCountUp = useEventCallback((recreate?: boolean) => {
      const countUp = countUpRef.current;
      if (countUp && !recreate) {
        return countUp;
      }
      const newCountUp = createInstance();
      countUpRef.current = newCountUp;
      return newCountUp;
    });
  
    const start = useEventCallback(() => {
      const run = () =>
        getCountUp(true)?.start(() => {
          onEnd?.({ pauseResume, reset, start: restart, update });
        });
  
      if (delay && delay > 0) {
        timerRef.current = setTimeout(run, delay * 1000);
      } else {
        run();
      }
  
      onStart?.({ pauseResume, reset, update });
    });
  
    const pauseResume = useEventCallback(() => {
        if(getCountUp()) {
            getCountUp().pauseResume()
        }
  
      onPauseResume?.({ reset, start: restart, update });
    });
  
    const reset = useEventCallback(() => {
      timerRef.current && clearTimeout(timerRef.current);
  
      if(getCountUp()) {
        getCountUp()?.reset();
      }
  
      onReset?.({ pauseResume, start: restart, update });
    });
  
    const update: UpdateFn = useEventCallback((newEnd) => {
      getCountUp()?.update(newEnd);
  
      onUpdate?.({ pauseResume, reset, start: restart });
    });
  
    const restart = useEventCallback(() => {
      reset();
      start();
    });
  
    const maybeInitialize = useEventCallback((shouldReset?: boolean) => {
      if (startOnMount) {
        if (shouldReset) {
          reset();
        }
        start();
      }
    });
  
    useEffect(() => {
      if (!isInitializedRef.current) {
        isInitializedRef.current = true;
  
        maybeInitialize();
      } else if (enableReinitialize) {
        maybeInitialize(true);
      }
    }, [
      enableReinitialize,
      isInitializedRef,
      maybeInitialize,
      delay,
      props.start,
      props.suffix,
      props.prefix,
      props.duration,
      props.separator,
      props.decimals,
      props.decimal,
      props.formattingFn,
    ]);
  
    useEffect(() => {
      return () => {
        reset();
      };
    }, [reset]);
  
    return { start: restart, pauseResume, reset, update, getCountUp };
  };
  