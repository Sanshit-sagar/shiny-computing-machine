import { VariantProps } from 'stitches.config'
import { StyledAvatar } from './styles'

type AvatarImageProps = Required<{
    src: string; 
    alt: string; 
}>
type AvatarVariantPropsBase = Omit<VariantProps<typeof StyledAvatar>, 'relation'> & AvatarImageProps

interface RoundedAvatarVariant extends AvatarVariantPropsBase {
    rounded: true; 
    squared?: false | never; 
}
interface SquaredAvatarVariant extends AvatarVariantPropsBase {
    rounded?: false | never;
    squared: true; 
}



type AvatarProps = RoundedAvatarVariant | SquaredAvatarVariant


export type {
    AvatarProps
}