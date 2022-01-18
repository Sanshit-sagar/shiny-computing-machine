import { EnvelopeClosedIcon, LockClosedIcon, GlobeIcon } from '@radix-ui/react-icons';
import { ReactNode } from 'react'
import { StyledPrefix } from './styles'
import { useTextInputContext } from './utils'

type InputPrefixProps = {
    children?: ReactNode;
}

const styledPrefixMap = {
    'email': <EnvelopeClosedIcon />,
    'password': <LockClosedIcon />,
    'url': <GlobeIcon />
}

const InputPrefix = ({ children }: InputPrefixProps) => {
    const { type, validationState, ...props } = useTextInputContext()

    if(!type && !children) 
        return null
    
    return (
        <StyledPrefix validationState={validationState || 'none'}>
            {children || styledPrefixMap[type]} 
        </StyledPrefix> 
    )
}

InputPrefix.defaultName = 'InputPrefix'
export default InputPrefix