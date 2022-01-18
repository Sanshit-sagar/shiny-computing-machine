

export interface ClickableLabelProps {
    id: string; 
    title: string;
    icon?: React.ReactNode | null; 
    onChange: (value: string) => void;
    checked: boolean;
}

export interface ConcealedRadioProps {
    value: string;
    selection: string; 
}

export interface IToggleItem {
    icon?: React.ReactNode;
    value: string; 
}

export interface IMultiToggleProps {
    selection: string;
    onChange: (value: string) => void; 
    values: IToggleItem[]; 
}