import React, { ReactNode } from 'react'
import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'
import type { VariantProps } from '@stitches/react'

const StyledBadge = styled('span', {
    display: 'inline-flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: '$1',
    padding: '$1',
    margin: '$1',
    fontSize: '$1',
    fontWeight: 100,
    fontFamily: '$raleway',
    border: '1px solid',

    variants: {
        gradient: {
            'stripe': { linearGradient: 'to right, #1fa2ff, #12d8fa, #a6ffcb' },
            'flare': { linearGradient: 'to right, #f12711, #f5af19'},
            'default': { linearGradient: '19deg, #21D4FD 0%, #B721FF 100%', borderColor: 'blueviolet', color: 'white' },
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
            'none': { linearGradient: 'none' }
        },
        background: {
            'accent': { 
                bc: '$accentSolid', 
                '&:hover': { 
                    bc: '$accentSolidHover' 
                }, 
                '&:active': { 
                    bc: '$accentFocusRing' 
                }
            },
            'none': {
                bc: 'none'
            }
        },
        radius: {
            0: { br: 0},
            1: { br: '$1' },
            2: { br: '$4' },
            3: { br: '$6' },
            4: { br: '$9' },
            5: { br: '999px' }  
        },
        isHovered: {
            true: {
                color: 'white'
            },
            false: null
        },
        isDisabled: {
            true: {
                bc: 'gray',
                color: 'white',
                borderColor: 'black',
            },
            false: null
        }
    },
    defaultVariants: {
        isHovered: false,
        radius: '3',
        gradient: 'none',
        background: 'accent'
    }
})

export type BadgeVariants = VariantProps<typeof StyledBadge>
export type BadgeProps = BadgeVariants & {
    children: React.ReactNode;
}

const ExtendedStyledBadge = React.forwardRef<
    React.ElementRef<typeof StyledBadge>,
    BadgeProps
>(({ children, gradient, radius, isHovered, ...other }, forwardedRef) => {
    
    return (
        <StyledBadge 
            {...other} 
            ref={forwardedRef}
            isHovered={isHovered}
            radius={radius}
            gradient={gradient}
        >
            {children}
        </StyledBadge>
    )
})

export const Badge = ExtendedStyledBadge