import Image from 'next/image'
import { Box } from '@/components/Box'

import NotFound from '@/public/undrawn/black/404.svg';
import ShareLink from '@/public/undrawn/black/share-link.svg'
import Polaroid from '@/public/undrawn/black/polaroid.svg';
import Font from '@/public/undrawn/black/font.svg'
import Uploading from '@/public/undrawn/black/uploading.svg';

const imageMap = {
    "404": NotFound,
    "share": ShareLink,
    "polaroid": Polaroid,
    "font": Font,
    "uploading": Uploading
};

type ImageSize = 32 | 64 | 128 | 256 | 512 | 1024;

interface UndrawnImageProps {
    name: keyof typeof imageMap; 
    size?: ImageSize | `${ImageSize}`;
}


const UndrawnImage = ({ name, size }: UndrawnImageProps) => (
    <Image 
        src={imageMap[name]}
        alt="404"
        height={256}
        width={256}
    /> 
)

export const Undrawn = ({ name, size = 256 }: UndrawnImageProps) => {
    if(!name) return null;

    return (
        <Box css={{ height: 256, width: 256, bc: '$accentBg', display: 'flex', padding: 0, margin: '$1' }}>
            <UndrawnImage name={name} size={size} /> 
        </Box>
    );
}