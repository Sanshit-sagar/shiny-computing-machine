import { styled } from '../../stitches.config'

export const StyledSeparator = styled('div', {
    border: 'none',
    flexShrink: 0,
    bc: '$accentSolid',
    cursor: 'default',
    
    

    variants: {
        size: {
            'small': {
                '&[orientation="horizontal"]': {
                    height: '0.25rem',
                    width: '$3',
                    mx: '$1',
                    my: '$2'
                },
                '&[orientation="vertical"]': {
                    width: '0.25rem',
                    height: '$3',
                    my: '$1',
                    mx: '$2',
                },
            },
            'half': {
                '&[orientation="horizontal"]': {
                    height: '0.50rem',
                    width: 'calc(50% - $2)',
                    mx: '$1',
                    my: '$2'
                },
                '&[orientation="vertical"]': {
                    width:  '0.50rem',
                    height: 'calc(50% - $2)',
                    my: '$1',
                    mx: '$2'
                },
            },
            'full': {
                '&[orientation="horizontal"]': {
                    height: '0.05rem',
                    width: 'calc(100% - $3)',
                    mx: '$2',
                    my: '$3'
                },

                '&[orientation="vertical"]': {
                    width:  '0.05rem',
                    height: 'calc(100% - $3)',
                    my: '$2',
                    mx: '$3'
                },
            }
        },
    },
    defaultVariants: {
        size: 'full',
    }
}); 














