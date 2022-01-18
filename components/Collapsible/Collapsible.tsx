import React from 'react'
import { styled } from 'stitches.config'

import { 
    ChevronUpIcon,
    ChevronDownIcon 
} from '@radix-ui/react-icons'

type CollapsibleProps = {
    defaultOpen: boolean;
    title: string;
    children: React.ReactNode;
}

const StyledContainer = styled('div', {
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',
    gap: '$3',
    width: '400px',
    height: 'fit-content',
    m: 0,
    p: 0
})

const StyledTrigger = styled('div', {
    p: '$3',
    d: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'flex-start',
    gap: 0,
    bc: '$accentBg'
})

const StyledTitle = styled('h3', {
    p: 0,
    m: 0,
    fontSize: '$4',
    fontFamily: '$jetbrains',
    color: '$accentText',
})

const StyledButton = styled('button', {
    border: '1px solid $accentBorder',
})

const StyledContent = styled('div', {
    bc: '$accentBase',
    overflow: 'hidden',
    transition: 'height 0.2s ease-in-out'                             
})

export const Collapsible = ({ defaultOpen, title, children }: CollapsibleProps) => {

    const [isOpen, setIsOpen] = React.useState(defaultOpen)
    const [height, setHeight] = React.useState<number | undefined>(defaultOpen ? undefined : 0)

    const ref = React.useRef<HTMLDivElement>(null);

    const toggle = () => setIsOpen(!isOpen)

    React.useEffect(() => {
        if (!height || !isOpen || !ref.current) {
            return undefined
        }

        const resizeObserver = new ResizeObserver((el) => {
          setHeight(el[0].contentRect.height * 1.25);
        })

        resizeObserver.observe(ref.current)
        return () => {
          resizeObserver.disconnect()
        }
    }, [height, isOpen])

    React.useEffect(() => {
        if (isOpen) {
            setHeight(ref.current?.getBoundingClientRect().height)
        } else {
            setHeight(0)
        }
    }, [isOpen])
    

    return (
        <StyledContainer>
            <StyledTrigger>
                <StyledTitle> {title} </StyledTitle>
                <StyledButton onClick={toggle}>
                    {isOpen ? (
                        <ChevronDownIcon />
                    ) : (
                        <ChevronUpIcon /> 
                    )}
                </StyledButton>
            </StyledTrigger>

            <StyledContent css={{ height }}>
                {isOpen && (
                    <div style={{ padding: '8px' }} ref={ref}> 
                        {children} 
                    </div>
                )}
            </StyledContent>
        </StyledContainer>
    )
}