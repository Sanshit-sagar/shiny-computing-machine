import Image from 'next/image'

const URI = `https://avatar.uimaterial.com`;

const idToAPIKeyMap = {
    'transparent-light': 'Gzw9O79KCMe6WrHGq1m3',
    'transparent-dark': 'paOoNAsrUu9gzCFKJnj5',
    'black-light': 'Nt0gtAjgJBcfHcTu6qNY',
    'turquoise-dark': 'jWf7BOw3V7AH0KFT1AfC'
}

interface UiMaterialProps {
    name: string;
    size: string | number; 
    setId?: keyof typeof idToAPIKeyMap;
}

export const Avatar = ({ 
    name, 
    size,
    setId = 'transparent-light'
}: UiMaterialProps) => {
    const src = `${URI}/?setId=${idToAPIKeyMap[setId]}&name=${name}&size=${size}`;

    return (
        <Image
            src={src}
            alt={`${name}Avatar(${size}x${size}px)`}
            height={size}
            width={size}
        /> 
    );
}
