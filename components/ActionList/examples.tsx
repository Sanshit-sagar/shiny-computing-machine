import { useState, HTMLAttributes, ReactNode } from 'react' 
import { VariantProps } from 'stitches.config'
import {
    StyledContainer,
    StyledMenu,
    StyledMenuList,
    StyledMenuItem,
    StyledMenuSubList,
    StyledMenuButton 
} from './styles'

import { 
    
    CircleIcon, 
    ChevronRightIcon, 
    TrashIcon,
    Share1Icon, 
    IdCardIcon,
    CheckIcon,
    PlayIcon,
    StopIcon, 
    ExclamationTriangleIcon,
    CopyIcon,
    LockClosedIcon,
    ExternalLinkIcon, 
    DownloadIcon, 
    MoveIcon
} from '@radix-ui/react-icons'

type MenuVariantProps = VariantProps<typeof StyledMenuButton>

interface ContextMenuItemProps extends HTMLAttributes<HTMLButtonElement> { 
    name: string; 
    leftIcon: ReactNode | HTMLOrSVGElement; 
    rightIcon?: ReactNode | HTMLOrSVGElement;
    style?: MenuVariantProps['style'];
}

const ContextMenuItem = ({ 
    name, 
    leftIcon, 
    rightIcon = null, 
    style = 'black', 
    ...rest 
}: ContextMenuItemProps) => (

    <StyledMenuItem>
        <StyledMenuButton style={style} {...rest}>
           <> {leftIcon} </>
           <> {name} </>
           {rightIcon && (
               <> {rightIcon} </>
           )}
        </StyledMenuButton>
    </StyledMenuItem>
)


export const ContextMenuInstance = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const toggleVisibility = () => setIsVisible(!isVisible)

    return (
        <StyledContainer>
            <StyledMenu>
                <StyledMenuList>
                   <ContextMenuItem name="Share" leftIcon={<Share1Icon />} /> 
                   <ContextMenuItem name="Rename" leftIcon={<IdCardIcon />} />
                </StyledMenuList>

                <StyledMenuList>
                    <StyledMenuItem>
                        <ContextMenuItem 
                            name="No Status" 
                            onClick={toggleVisibility} 
                            leftIcon={<CircleIcon />} 
                            rightIcon={<ChevronRightIcon />} 
                        /> 
                        <StyledMenuSubList visible={isVisible}>
                            <ContextMenuItem name="Needs Review" leftIcon={<ExclamationTriangleIcon />} style="orange" /> 
                            <ContextMenuItem name="In Progress" leftIcon={<PlayIcon />} style="purple"  />
                            <ContextMenuItem name="Approved" leftIcon={<CheckIcon />} style="green" /> 
                            <ContextMenuItem name="No Status" leftIcon={<StopIcon />} style="checked" />
                        </StyledMenuSubList>
                    </StyledMenuItem>
              
                   
                    <ContextMenuItem name="Copy Link Address" leftIcon={<ExclamationTriangleIcon />} /> 
                    <ContextMenuItem name="Move to" leftIcon={<MoveIcon />}   />
                    <ContextMenuItem name="Copy to" leftIcon={<CopyIcon />} /> 
                    <ContextMenuItem name="Make Private" leftIcon={<LockClosedIcon />} />
                    <ContextMenuItem name="Download" leftIcon={<DownloadIcon />} />
                </StyledMenuList>

                <StyledMenuList>
                    <ContextMenuItem name="Trash" leftIcon={<TrashIcon />} style="delete" /> 
                </StyledMenuList>
            </StyledMenu>
        </StyledContainer>
    )
}

