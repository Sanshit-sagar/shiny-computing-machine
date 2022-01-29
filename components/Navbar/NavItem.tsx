import { useState, ReactNode } from 'react' 
import {
    StyledListItem,
    StyledIconButton
} from './styles'

type NavItemProps = {
    icon: ReactNode | HTMLOrSVGElement;
    children?: ReactNode;
}

export const NavItem = ({ icon, children }: NavItemProps) => {
    const [open, setOpen] = useState(false)

    const toggle = (_event) => setOpen(!open)

    return (
        <StyledListItem>
            <StyledIconButton href="#" onClick={toggle}> 
                {icon} 
            </StyledIconButton>
            {open && children}
        </StyledListItem>
    )
}

NavItem.displayName = 'NavItem'
