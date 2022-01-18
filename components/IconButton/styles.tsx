import React from 'react'
import { styled, CSS, VariantProps } from '../../stitches.config'

export type IconButtonVariants = VariantProps<typeof StyledIconButton>
export type IconButtonCssProps = { css?: CSS }
export type IconButtonProps = IconButtonVariants & IconButtonCssProps

export const ClippyIcon = (props) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="square"
        {...props}
      >
        <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
        <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
);
  
export const CheckIcon = (props) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none" 
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
        strokeLinejoin="square"
        {...props}
    >
        <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
)

CheckIcon.toString = () => '.check-icon';

export const StyledIconButton = styled('button', {
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',

    position: 'relative',
    height: 30,
    width: 30,
    padding: '$4',

    outline: 'none',
  
    border: '1px solid',
    borderRadius: '$2',
    borderStyle: 'outset',

    display: 'flex',
    fd: 'row',
    jc: 'center',
    ai: 'center',
    gap: 0,

    willChange: 'transform, opacity',
    transform: 'transition',
    transition: 'background 0.2s, transform 0.2s, color 0.2s, box-shadow 0.3s',
    $$shadowColor: '$colors$accentBgActive',

    '&:hover': {
        transition: 'transform 300ms',
        transform: 'translateY(-.25em)',
    },
    '&:focus': {
        '&:not(:focus-visible)': {
            outline: '0',
        },
    },
    '&:focus-visible': {
        outline: '2px solid $accentFocusRing',
    },

    '& svg': {
        position: "absolute",
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        color: '$accentSolid',
        strokeDasharray: 50,
        transition: "all 300ms ease-in-out"
    },
    
    variants: {
        copied: {
            true: {
                cursor: 'default',
                [`& ${CheckIcon}`]: {
                    strokeDashoffset: 0,
                    visibility: 'visible'
                }
            },
            false: {
                cursor: 'pointer',
                [`& ${CheckIcon}`]: {
                    strokeDashoffset: -50,
                    visibility: 'hidden'
                }
            }
        },
        theme: {
            'classic': {
                bc: '$panelBase',
                color: '$panelSolid',
                borderColor: '$panelBorder',
                '&:hover': {
                    $$classicBoxShadow: '$colors$panelText',
                    boxShadow: '0 1px 2px 1px $$classicBoxShadow'
                },
                '& svg': {
                    color: '$panelSolid'
                },
                [`& ${CheckIcon}`]: {
                    color: '$successSolid'
                }
            },
            'accent': {
                bc: '$accentBg',
                color: '$accentText',
                borderColor: '$accentBorder',
                '&:hover': {
                    $$accentBoxShadow: '$colors$accentLine',
                    boxShadow: '0 1px 2px 1px $$accentBoxShadow'
                },
            }
        }
    },
    compoundVariants: [
        {
            theme: 'classic',
            copied: true,
            css: {
                color: '$successSolid',
                $$successShadowColor: '$colors$successSolid',
                boxShadow: '0 1px 2px 1px $$successShadowColor'
            }
        }, {
            theme: 'accent',
            copied: true,
            css: {
                color: '$accentSolid',
                $$accentShadowColor: '$colors$accentSolid',
                boxShadow: '0 1px 2px 1px $$accentShadowColor'
            }
        }
    ],
    defaultVariants: {
        copied: false,
        theme: 'accent'
    }
})
