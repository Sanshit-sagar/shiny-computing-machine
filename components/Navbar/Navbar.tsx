import { ReactNode } from 'react' 
import { StyledNavbar, StyledNavbarList } from './styles'

type NavbarProps = { 
    children: ReactNode; 
}

export const Navbar = ({ children }: NavbarProps) => (
    <StyledNavbar>
        <StyledNavbarList> {children} </StyledNavbarList>
    </StyledNavbar>
)

Navbar.displayName = 'Navbar'
