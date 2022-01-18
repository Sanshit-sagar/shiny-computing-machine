import { DOMProps } from '@/interfaces/Shared' 
import { Nullable } from '@/interfaces/Guards'


export interface ProgressBarProps extends DOMProps {
    label?: string;
    showValueLabel?: boolean;
    value: number; 
    minValue?: number;
    maxValue?: number; 
}

export interface IProgressBarContext extends Nullable<ProgressBarProps> {
    percentage: number;
    barWidth: `${number}%`; 
    roundedProgress: number;
}
