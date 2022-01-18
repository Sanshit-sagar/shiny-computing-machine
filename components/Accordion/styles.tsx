import React, { ReactNode } from 'react'
import { styled } from '../../stitches.config'
import { ScrollArea } from '@/components/ScrollArea'

export const AccordionList = styled('ul', {
    listStyle: 'none',
    m: 0,
    p: 0,
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    zIndex: 100
})

export const AccordionListItem = styled('li', {
    bc: '$accentBg',
    border: '1px solid $accentBorder',
    borderTopColor: 'transparent',
    m: 0,
    p: 0,
    
    $$regularBorderRadius: '$sizes$0',
    $$roundedBorderRadius: '$sizes$1',

    br: '$$regularBorderRadius',

    '&:first-child': {
        borderTopColor: '$accentBorder',
        btlr: '$$roundedBorderRadius',
        btrr: '$$roundedBorderRadius',
    },
    '&:last-child': {
        borderBottomColor: '$accentBorder',
        bblr: '$$roundedBorderRadius',
        bbrr: '$$roundedBorderRadius',
    },
    '&:hover': {
        bc: '$accentBgHover'
    },
    '&:focus': {
        bc: '$accentBgActive',
        color: '$accentTextContrast',
        borderColor: '$accentFocusRing'
    },
    '& .active': {
        transform: 'rotate(+180deg)'
    },
})

export const AccordionButton = styled('button', {
    appearance: 'none',
    us: 'none',
    cursor: 'pointer',

    width: '100%',
    p: 0,
    m: 0,

    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',

    bc: 'transparent',
    border: 'none',
    br: 0,

    willChange: 'transform',
    transition: '0.4s ease-in-out',
    borderBottom: '1px solid $accentBorder',

    variants: {
        withFloor: {
            true:  { borderBottomColor: '$accentBorder' },
            false: { borderBottomColor: 'transparent'   }
        }
    },
    defaultVariants: {
        withFloor: true
    }
})


export const AccordionTitle = styled('h3', {
    width: '100%',
    m: 0,
    py: 0,
    px: '$2',

    color: '$accentText',
    fontSize: '$2',
    fontFamily: '$jetbrains',
    fontWeight: 300,
    fontStyle: 'normal',

    display: 'flex',
    fd: 'row',
    jc: 'flex-start',
    ai: 'center',
    gap: '$3',

    outline: 'none',
    border: 'none'
})

export const AccordionIcon = styled('div', {
    content: '',
    flexShrink: 0,
    width: 'fit-content',
    height: 'fit-content',
    maxWidth: '20px',
    maxHeight: '20px',
    
    ml: 'auto',
    color: '$accentText',
    transition: 'transform 0.4s ease-in-out'
})

export const StyledAccordionPanel = styled('div', {
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    ox: 'hidden',
    oy: 'hidden',
    
    maxHeight: '125px',
    m: 0,

    bc: '$accentBase',
    border: 'none',
    willChange: 'inherit',
    transition: 'inherit',
        
    variants: {
        isOpen: {
            true: {
                '&:last-child': {
                    borderBottom: '1px solid transparent',
                    bblr: '$2',
                    bbrr: '$2'
                }
            }
        }
    },
    defaltVariants: {
        isOpen: false   
    }
})


export const AccordionPanelContent = styled('div', {
    bblr: '$1',
    bbrr: '$1',
    d: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    p: '$2',

    fontSize: '$1',
    fontFamily: '$jetbrains',
    fontStyle:'normal',
    fontWeight: 300,
    fontVariant: 'tabular',
    lineHeight: '$2',
    color: '$accentTextContrast',

    border: 'none',

    textOverflow: 'ellipsis'
});

type PanelProps = React.ComponentProps<typeof StyledAccordionPanel> & {
    height: number;
    isOpen: boolean;
    children: ReactNode; 
}

export const AccordionPanel = React.forwardRef<HTMLDivElement, PanelProps>(
    ({ children, height, isOpen, ...props}, forwardedRef) => {
    // const clampedHeight = '200px'
    return (
        <StyledAccordionPanel 
            {...props} 
            ref={forwardedRef} 
            isOpen={isOpen}
            css={{
                height: isOpen ? height : 0,
             
            }}
        >
            <ScrollArea>
                {children}
            </ScrollArea>
        </StyledAccordionPanel>
    )
})