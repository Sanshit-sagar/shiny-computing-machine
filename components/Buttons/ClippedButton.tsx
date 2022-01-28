import { ReactNode } from 'react'
import { styled, CSS, VariantProps } from 'stitches.config'
import { sharedStyles, InlineFlex } from './styles'

export const wrapperStyles: CSS = {
    appearance: 'none',
    userSelect: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',

    border: '0',
    opacity: 1,
    margin: 0,
    padding: 0,    

    variants: {
        size: {
            0: {
                minWidth: '6.35em',
            },
            1: {
                minWidth: '7.35em',
               
            },
            2: {
                minWidth: '8.35em',
               
            },
            3: {
                minWidth: '9.35em',
             
            }
        },
        variant: {
            primary: {
                bc: '$light1'
            },
            secondary: {
                bc: 'transparent'
            },
            outlined: {
                bc: '$accentBorder'
            }
        }
    },
    defaultVariants: {
        size: '0', 
        variant: 'primary'
    }
}

const OuterClippedButton = styled('button', {
    ...wrapperStyles,
    $$dropShadowColor: '$colors$accentBorder',
    clipPath: `polygon(12.5% 0%, 87.5% 0%, 100% 12.5%, 100% 87.5%, 87.5% 100%, 12.5% 100%, 0% 87.5%, 0% 12.5%)`
})

const InnerClippedButton = styled('button', {
    ...sharedStyles,
    border: 'none',
    backgroundSize: 'cover',
    margin: 'auto',
    clipPath: `polygon(12.5% 0%, 87.5% 0%, 100% 12.5%, 100% 87.5%, 87.5% 100%, 12.5% 100%, 0% 87.5%, 0% 12.5%)`,
    variants: {
        size: {
            0: {
                minWidth: '6.25em',
                $$paddingZero: '0.48em 0.680em',
                $$fontSizeZero: '0.8em'
            },
            1: {
                minWidth: '7.25em',
                $$paddingOne:  '0.68em 0.850em',
                $$fontSizeOne: '1em'
            },
            2: {
                minWidth: '8.25em',
                $$paddingTwo:  '0.75em 1.020em',
                $$fontSizeTwo: '120%'
            },
            3: {
                minWidth: '9.25em',
                $$paddingThree:  '0.92em 1.190em',   
                $$fontSizeThree: '140%'
            }
        },
        variant: {
            primary: {
                bc: '$dark1'
            },
            secondary: {
                bc: '$accentBg'
            },
            outlined: {
                bc: 'transparent'
            }
        }
    },
    defaultVariants: {
        size: '0',
        variant: 'outlined'
    }
})

type ClippedButtonProps = VariantProps<typeof OuterClippedButton> & { 
    children: ReactNode; 
}


const ClippedButton = ({ size, variant, children, ...rest }: ClippedButtonProps) => (
    <OuterClippedButton size={size} variant={variant}>
        <InnerClippedButton size={size} variant={variant}>
            <InlineFlex>
                {children}
            </InlineFlex>
        </InnerClippedButton>
    </OuterClippedButton>
)


ClippedButton.displayName = 'ClippedButton'
export default ClippedButton