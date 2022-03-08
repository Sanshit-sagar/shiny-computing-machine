import { SeparatorIcon } from './styles'
import { 
    SlashIcon,
    ArrowRightIcon, 
    CaretRightIcon,  
    ChevronRightIcon,
    TriangleRightIcon, 
    ThickArrowRightIcon
} from '@radix-ui/react-icons'
import { Separators } from './interfaces'
import type { Separator } from './interfaces'


const iconMap = {
    'CHEVRON': <ChevronRightIcon />,
    'ARROW': <ArrowRightIcon />,
    'TRIANGLE': <TriangleRightIcon />,
    'CARET': <CaretRightIcon />,
    'THICK_ARROW': <ThickArrowRightIcon />,
    'SLASH': <SlashIcon />
}

type BreadcrumbIconProps = {
    isCurrent: boolean;
    icon: Separator; 
}

const BreadcrumbsIcon = ({ 
    isCurrent = false, 
    icon = Separators.THICK_ARROW 
}: BreadcrumbIconProps) => {

    return (
        <SeparatorIcon isCurrent={isCurrent}>
           {iconMap[icon]} 
        </SeparatorIcon>
    )
}

export default BreadcrumbsIcon