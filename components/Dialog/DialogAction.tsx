import { createRef, ReactNode } from 'react'
import { useButton } from '@react-aria/button'

import { useDialogContext } from './utils'
import { DialogActionProps } from './types'
import { StyledActionButton } from './styles' 

const InfoIcon = () => <i className="bi bi-icon"></i>
const CheckIcon = () => <i className="bi bi-check-lg"></i>
const CrossIcon = () => <i className="bi bi-x-lg"></i>

const stylesToVariant = {
    'cancel': { variant: 'secondary', icon: <CrossIcon /> },
    'confirm': { variant: 'primary', icon: <CheckIcon /> },
    'x': { variant: 'primary', icon: <CrossIcon /> },
    'i': { variant: 'info', icon: <InfoIcon /> },
    'success': { variant: 'success', icon: <CheckIcon /> },
    'close': { variant: 'secondary', icon: <CrossIcon /> },
    'submit': { variant: 'info', icon: <CheckIcon /> }
}

type StyledVariantStr = keyof typeof stylesToVariant;

type ActionButtonProps = { 
    variant: StyledVariantStr;
    handleAction: () => void; 
    children: ReactNode; 
}

const ActionButton = ({ variant = 'close', handleAction, children }: ActionButtonProps) => {
    
    const ref = createRef<HTMLButtonElement>()
    const { buttonProps } = useButton({ onPress: () => handleAction() }, ref)

    return (
        <StyledActionButton variant={stylesToVariant[variant]?.variant ?? "primary"} {...buttonProps} ref={ref}>
            {children ? (
                <> {children} </> 
            ) : (
                <> {stylesToVariant[variant]?.icon ?? <InfoIcon />} </>
            )}
        </StyledActionButton>
    )
}

const DialogAction = ({ children, element: Component = 'button', variant = 'confirm' }: DialogActionProps) => {
    const { state, onAction } = useDialogContext()

    const handleConfirm = () => {
        onAction('confirm')
        state.close()
    }
    const handleCancel = () => {
        onAction('cancel')
        state.close() 
    }

    return (
        <ActionButton 
            variant={variant} 
            handleAction={variant==='cancel' ? handleCancel : handleConfirm}
        > 
            {children} 
        </ActionButton>
    )
}

DialogAction.displayName = 'DialogAction'
export default DialogAction