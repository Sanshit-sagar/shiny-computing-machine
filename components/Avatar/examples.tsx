import { ExampleBase } from '@/components/ExampleBase'
import { AvatarIcon } from '@radix-ui/react-icons'

import Avatar from '@/components/Avatar'

const alt = 'Sanshit Sagar'
const src = "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"

export const AvatarWithFallbackOnly = () => (
    <Avatar.Root>
        <Avatar.Fallback> JJ </Avatar.Fallback>
    </Avatar.Root>
)

export const AvatarWithImageAndFallback = () => (
    <Avatar.Root>
        <Avatar.Image 
            src={src} 
            alt={alt}   
        />
        <Avatar.Fallback delayMs={10000}> 
            SS 
        </Avatar.Fallback>
    </Avatar.Root>
)

export const AvatarInstance = () => <AvatarWithImageAndFallback /> 

const ExampleAvatarGroup = () => {

    return (
        <ExampleBase
            heading={'Avatar'}
            description={''}
            icon={<AvatarIcon />}
            component={<AvatarInstance />}
            controls={[]}
        />
    )
}

export default ExampleAvatarGroup