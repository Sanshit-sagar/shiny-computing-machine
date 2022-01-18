

export interface AlertProps {
    trigger: string;
    title: string; 
    description?: string | undefined; 
    content: string;
    cancelText: string | undefined;
    confirmText: string | undefined;
    handleCancel: () => void; 
    handleConfirm: () => void;
}

export type ActionType = 'cancel' | 'confirm'