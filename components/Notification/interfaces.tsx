export type SpringConfig = { 
    tension: number; 
    friction: number; 
    precision: number; 
};

export type AddFunction = (msg: string) => void; 

export type NotificationHubProps = {
    config?: SpringConfig; 
    timeout?: number;
    children: (add: AddFunction) => void; 
};

export interface Item {
    key: number
    msg: string
};
