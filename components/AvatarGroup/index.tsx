import { Box } from '@/components/Box' 
import { StyledAvatar, AvatarProps } from './styles'

interface AvatarGroupProps extends AvatarProps {
    amount?: number;
}

export const Avatar = (props: AvatarProps) => (
    <StyledAvatar {...props}  />
);

const DEFAULT_AVATAR_SIZE = 200


const rescaleAvatarSize = (defaultSize = 200, index: number): number => {
    if(index > 10) return 10;
    if(index <= 0) return 200;
    return defaultSize - index * 10; 
}

export const AvatarGroup = ({ 
    amount = 5, 
    radius = "round", 
    gradient = "default", 
    size = DEFAULT_AVATAR_SIZE 
}: AvatarGroupProps) => {

    return (
        <Box css={{ bc: 'transparent', border: '1px solid black', height: 400, width: 400 }}>
            {[...Array(amount)].map((value: number, index: number) => (
                <StyledAvatar 
                    key={index}
                    radius={radius}
                    gradient={gradient}
                    size={rescaleAvatarSize(200, index)}
                />  
            ))}
        </Box>
    ); 
}
