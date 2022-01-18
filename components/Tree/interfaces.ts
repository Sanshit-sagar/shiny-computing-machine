

export interface ITreeProps {
    icon?: React.ReactNode | Element; 
    children?: React.ReactNode | string; 
    defaultOpen?: boolean
    name: string | JSX.Element;
};

export type TreeProps = React.HTMLAttributes<HTMLDivElement> & ITreeProps; 