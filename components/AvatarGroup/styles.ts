import React from 'react'
import { styled } from '../../stitches.config'


export const StyledAvatar = styled('div', {
  
    variants: {
        'size': {
            '1': { size: '10px' },
            '2': { size: '20px' },
            '3': { size: '30px' },
            '4': { size: '40px' },
            '5': { size: '50px' },
            '6': { size: '60px' },
            '7': { size: '70px' },
            '8': { size: '80px' },
            '9': { size: '90px' },
            '10': { size: '100px' },
            '11': { size: '110px' },
            '12': { size: '120px' },
            '13': { size: '130px' },
            '14': { size: '140px' },
            '15': { size: '150px' },
            '16': { size: '160px' },
            '17': { size: '170px' },
            '18': { size: '180px' },
            '19': { size: '190px' },
            '20': { size: '200px' },
        },
        'gradient': {
            'stripe': { linearGradient: 'to right, #1fa2ff, #12d8fa, #a6ffcb' },
            'flare': { linearGradient: 'to right, #f12711, #f5af19'},
            'default': { linearGradient: '19deg, #21D4FD 0%, #B721FF 100%' },
            'sublime-light': { linearGradient: 'to right, #fc5c7d, #6a82fb'},
            'blurry-beach': { linearGradient: 'to right, #d53369, #cbad6d' },
            'bighead': { linearGradient: 'to right, #c94b4b, #4b134f' },
            'vanusa': { linearGradient: 'to right, #da4453, #89216b' },
            'velvet-sun': { linearGradient: 'to right, #e1eec3, #f05053'},
            'argon': { linearGradient: 'to right, #03001e, #7303c0, #ec38bc, #fdeff9' },
            'celestial': { linearGradient: 'to right, #c33764, #1d2671' },
            'relay': { linearGradient: 'to right, #3a1c71, #d76d77, #ffaf7b' },
            'crystal-clear': { linearGradient: 'to right, #159957, #155799' },
            'ibiza-sunset': { linearGradient: 'to right, #ee0979, #ff6a00' },
            'fresh-turboscent': { linearGradient: 'to right, #f1f2b5, #135058' },
            'cheer-up-emo-kid': { linearGradient: 'to right, #556270, #ff6b6b' },
            'starfall': { linearGradient: 'to right, #f0c27b, #4b1248' },
            'nelson': { linearGradient: 'to right, #f2709c, #ff9472' },
            'forever-lost': { linearGradient: 'to right, #5d4157, #a8caba' },
            'influenza': { linearGradient: 'to right, #c04848, #480048' },
            'jshine': { linearGradient: 'to right, #12c2e9, #c471ed, #f64f59' },
            'calm-darya': { linearGradient: 'to right, #5f2c82, #49a09d' },
            'titanium': { linearGradient: 'to right, #283048, #859398' },
            'pinky': { linearGradient: 'to right, #dd5e89, #f7bb97' },
            'purple-paradise': { linearGradient: 'to right, #1d2b64, #f8cdda' },
            'horizon': { linearGradient: 'to right, #003973, #e5e5be' },
            'noon-to-dusk': { linearGradient: 'to right, #ff6e7f, #bfe9ff' },
        },
        'radius': {
            'none': { br: 0 },
            'small':{ br: '$1' },
            'medium':{ br: '$5' },
            'large': { br: '$9' },
            'round': { br: '$round' }
        }
    },
    defaultVariants: {
        size: '15',
        gradient: 'fresh-turboscent',
        radius: 'round'
    }
})


export type AvatarProps = React.ComponentProps<typeof StyledAvatar>
