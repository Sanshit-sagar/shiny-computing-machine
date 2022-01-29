import { useState, ReactNode } from 'react' 


import { 
    IconLeft,
    IconRight,
    StyledMenu,
    StyledMenuItem,
    StyledDropdown
} from './styles' 
import { 
    GearIcon,
    ArrowLeftIcon,  
    ChevronRightIcon 
} from '@radix-ui/react-icons'

import { CSSTransition } from 'react-transition-group'
import { strEnum } from '@/interfaces/Guards'

const DestEnum = strEnum([ 'MAIN', 'SETTINGS' ])
type DestType = keyof typeof DestEnum


type DropdownItemProps = {
    goToMenu?: DestType;
    leftIcon?: ReactNode | HTMLOrSVGElement;
    children?: ReactNode;
    rightIcon?: ReactNode | HTMLOrSVGElement;
}

export const DropdownMenu = () => {    
    const [activeMenu, setActiveMenu] = useState<DestType>(DestEnum.MAIN)
    const [menuHeight, setMenuHeight] = useState<number | null>(null)

    const calcHeight = (el) => {
        const height = el.offsetHeight
        setMenuHeight(height)
    }

    const DropdownItem = ({ goToMenu, leftIcon, children, rightIcon }: DropdownItemProps) => {
        const handleClick = (_event) => goToMenu && setActiveMenu(goToMenu)

        return (
            <StyledMenuItem href="#" onClick={handleClick}>
                <IconLeft> {leftIcon} </IconLeft>
                {children}
                <IconRight> {rightIcon} </IconRight>
            </StyledMenuItem>
        )
    }

    return (
        <StyledDropdown css={{ height: menuHeight }}>

            <CSSTransition
                in={activeMenu === DestEnum.MAIN}
                onEnter={calcHeight}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
            >
                <StyledMenu>
                    <DropdownItem> Foo </DropdownItem>
                    <DropdownItem 
                        goToMenu={DestEnum.SETTINGS} 
                        leftIcon={<GearIcon />} 
                        rightIcon={<ChevronRightIcon />}
                    > 
                        Bar 
                    </DropdownItem>
                </StyledMenu>
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === DestEnum.SETTINGS}
                timeout={500}
                className="menu-secondary"
                unmountOnExit
            >
                <StyledMenu>
                    <DropdownItem 
                        goToMenu={DestEnum.MAIN}
                        leftIcon={<ArrowLeftIcon />}
                    >
                        Go Back 
                    </DropdownItem>
                </StyledMenu>
            </CSSTransition>

        </StyledDropdown>
    )
}



