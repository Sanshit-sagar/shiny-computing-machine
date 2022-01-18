import { ReactNode } from 'react'
import { styled } from '../../stitches.config'

const Shadow = styled('span', {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: '12px',
    background: 'hsl(0deg 0% 0% / 0.25)',
    willChange: 'transform',
    transform: 'translateY(2px)',
    transition: 'transform 0.6s cubic-bezier(0.3, 0.7, 0.4, 1)'
})
Shadow.displayName = 'shadow'
Shadow.toString = () => '.shadow'

const Edge = styled('span', {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    background: `linear-gradient(
        to left,
        hsl(240deg 100% 16%) 0%, 
        hsl(240deg 100% 32%) 8%,  
        hsl(240deg 100% 32%) 92%,
        hsl(240deg 100% 16%) 100%
    )`
})
Edge.displayName = 'edge'
Edge.toString = () => '.edge'

const Front = styled('span', {
    display: 'block',
    position: 'relative',
    padding: '$3 $6',

    br: '12px',
    bc: 'hsl(240deg 100% 47%)',

    willChange: 'transform',
    transform: 'translateY(-4px)',
    translate: 'transform 0.6s cubic-bezier(0.3, 0.7, 0.4, 1)',

    fontFamily: '$mono',
    fontSize: '1.25em',
    fontStyle: 'normal',
    fontWeight: 200,
    color: 'hsl(240def 100% 100%) 100%'
})
Front.displayName = 'front'
Front.toString = () => '.front'


const Pushable = styled('button', {
    WebkitTapHighlightColor: 'transparent',

    appearance: 'none',
    us: 'none',

    position: 'relative',
    border: 'none',
    bc: 'transparent',
    p: 0,
    cursor: 'pointer',
    outlineOffset: '4px',
    transition: 'filter 250ms',
    '&:hover': {
        filter: 'brightness(110%)',
        [`& ${Front}`]: {
            transform: 'translateY(-6px)',
            transition: 'transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5)'
        },
        [`& ${Shadow}`]: {
            transform: 'translateY(4px)',
            transition: 'transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5)'
        }
    },
    '&:active': {
        [`& ${Front}`]: {
            transform: 'translateY(-2px)',
            transition: 'transform 34ms'
        },
        [`& ${Shadow}`]: {
            transform: 'translateY(1px)',
            transition: 'transform 34ms'
        }
    },
    '&:focus:not(:focus-visible)': {
        outline: 'none'
    }
})
Pushable.displayName = 'pushable'
Pushable.toString = () => '.pushable'

interface PushableButtonProps {
    children: ReactNode; 
}

export const PushableButton = ({ children }: PushableButtonProps) => (
    <Pushable className="pushable">
        <Shadow className="shadow" />
        <Edge className="edge" />
        <Front className="front">
            {children}
        </Front> 
    </Pushable>
)
