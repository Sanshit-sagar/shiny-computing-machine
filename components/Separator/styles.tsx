import { styled } from '../../stitches.config'

export const StyledSeparator = styled('div', {
    border: 'none',
    flexShrink: 0,
    bc: '$accentLine',
    cursor: 'default',
    
    variants: {
        size: {
            'small': {
                '&[orientation="horizontal"]': {
                    height: '0.25rem',
                    width: '$3'
                },
                '&[orientation="vertical"]': {
                    width: '0.25rem',
                    height: '$3'
                },
            },
            'half': {
                '&[orientation="horizontal"]': {
                    height: '0.50rem',
                    width: 'calc(50% - $1)'
                },
                '&[orientation="vertical"]': {
                    width:  '0.50rem',
                    height: 'calc(50% - $1)'
                },
            },
            'full': {
                '&[orientation="horizontal"]': {
                    height: '0.05rem',
                    width: '100%'
                },

                '&[orientation="vertical"]': {
                    width:  '0.05rem',
                    height: '100%'
                },
            }
        },
    },
    defaultVariants: {
        size: 'full',
    }
}); 














