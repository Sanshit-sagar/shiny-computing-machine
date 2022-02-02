import { 
    RefObject,
    ReactNode,
    CSSProperties,
    MutableRefObject, 
    ComponentPropsWithoutRef
} from 'react'
import { 
    CountUp as CountUpJs 
} from 'countup.js'


export interface CountUpApi {
    start: () => void;
    reset: () => void;
    update: (newEnd: string | number) => void;
    pauseResume: () => void;
    getCountUp: (recreate?: boolean) => CountUpJs; 
}

export type UpdateFn = (newEnd: string | number) => void;

type EventHandlerArgs = Omit<CountUpApi, 'getCountUp'>

export interface CallbackProps {
    onStart?: (args: Omit<EventHandlerArgs, 'start'>) => void;
    onEnd?: (args: EventHandlerArgs) => void;
    onReset?: (args: Omit<EventHandlerArgs, 'reset'>) => void;
    onPauseResume?: (args: Omit<EventHandlerArgs, 'pauseResume'>) => void;
    onUpdate?: (args: Omit<EventHandlerArgs, 'update'>) => void; 
}

export interface CountUpHookProps extends CallbackProps, CommonProps {
    ref: string | MutableRefObject<HTMLElement>;
    startOnMount?: boolean; 
    enableReinitialize?: boolean; 
}

export interface CountUpInstanceProps {
    decimal?: string;
    decimals?: number;
    duration?: number;
    easingFn?: (t: number, b: number, c: number, d: number) => number;
    end: number;
    formattingFn?: (n: number) => string;
    prefix?: string;
    separator?: string;
    start?: number;
    suffix?: string;
    useEasing?: boolean;
    numerals?: string[];
}

export interface CommonProps extends CountUpInstanceProps {
    delay?: number | null;
}

export interface RenderCounterProps extends CountUpApi {
    countUpRef: RefObject<HTMLElement>; 
}

export interface CountUpProps extends CommonProps, CallbackProps {
    className?: string;
    redraw?: boolean;
    children?: (props: RenderCounterProps) => ReactNode;
    style?: CSSProperties;
    preserveValue?: boolean;
    containerProps?: ComponentPropsWithoutRef<'span'>;
}