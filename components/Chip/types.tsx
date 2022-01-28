import { ReactNode, ElementType } from 'react'
import { PressEvent } from '@/interfaces/Interactions'

export type ChipProps = {
    prefix?: ReactNode | HTMLOrSVGElement;
    suffix?: ReactNode | HTMLOrSVGElement;
    children: ReactNode;
}

export type ChipPrefixProps = {
    children?: ReactNode; 
}

export type ChipSuffixProps = {
    children?: ReactNode; 
    element: ElementType<any>;
    onClick?: (event: PressEvent) => void;
}

export type IChipContext = Omit<ChipProps, 'children'>