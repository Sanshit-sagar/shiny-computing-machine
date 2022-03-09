import { ReactNode, ElementType, ComponentPropsWithRef } from 'react' 
import { styled, CSS } from 'stitches.config' 

type TruncateElement = ElementType<typeof DEFAULT_TAG>
type TruncateProps = ComponentPropsWithRef<typeof DEFAULT_TAG> & {
    title: string; 
    inline: boolean;
    expandable: boolean;
    maxWidth: number; 
    css?: CSS;
    children?: ReactNode;
}

const StyledTruncate = styled('div', {
    '--max-width': '125px',

    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 'var(--max-width)',

    fontSize: '10px',
    fontFamily: '$jetbrains',
    lineHeight: '14px',
    verticalAlign: 'top',
    textAlign: 'start',

    variants: {
        inline: {
            true: {
                display: 'inline-block',
                verticalAlign: 'top'
            },
            false: {
                display: 'inherit',
                verticalAlign: 'initial'
            }
        },
        expandable: {
            true: {
                '&:hover': {
                    maxWidth: '10000px'
                }
            },
            false: null
        }
    },
    defaultVariants: {
        inline: false, 
        expandable: false 
    }
})

const Truncate = ({ inline = false, expandable = false, maxWidth = 125, title, css, children, ...rest }) => {

    return (
        <StyledTruncate inline={inline} exapndable={expandable} css={{ '--max-width': `${maxWidth}px`, ...css }}>
            {children}
        </StyledTruncate>
    )
}

Truncate.displayName = 'Truncate'

export type {
    TruncateProps
}

export {
    Truncate
}