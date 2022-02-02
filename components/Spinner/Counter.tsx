import { useEffect } from 'react' 
import { styled, keyframes } from 'stitches.config'
import { useIsSSR } from '@react-aria/ssr'

const left = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(180deg)'
    }
})
const right = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(180deg)'
    }
})

const StyledCirclular = styled('div', {
    height: '100px',
    width: '100px',
    position: 'relative'
})

const StyledInner = styled('div', {
    position: 'absolute',
    zIndex: '6',
    top: '50%',
    left: '50%',
    height: '80px',
    width: '80px',
    margin: '-40px 0 0 -40px',
    background: '$white1',
    borderRadius: '100%'
})

const StyledBar = styled('div', {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: '100%',
    clip: 'rect(0px, 100px, 100px, 50px)',
    margin: 0,
    padding: 0,

    variants: {
        direction: {
            'left': {

            },
            'right': {
                zIndex: '3',
                transform: 'rotate(180deg)'
            }
        }
    },
    defaultVariants: {
        direction: 'right'
    }
})

const StyledProgress = styled('div', {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: '100%',
    clip: 'rect(0px, 50px, 100px, 0px)',
    background: '$accentLine',
    margin: 0, 
    padding: 0,

    variants: {
        direction: {
            'left': {
                zIndex: '1',
                animation: `${left} 4s linear both`
            },
            'right': {
                animation: `${right} 4s linear both`,
                animationDelay: '4s'
            }
        }
    },
    defaultVariants: {
        direction: 'right'
    }
})

const StyledPercentage = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '10',
    fontSize: '13px',
    fontFamily: '$jetbrains',
    fontVariant: 'tabular',
    fontVariantNumeric: 'tabular-nums',
    fontWeight: 300,
    color: '$accentTextContrast'
})

export const Counter = () => {
    const isSSR = useIsSSR()

    useEffect(() => {
        if(isSSR) return

        const numb = document.querySelector(".number")

        let counter = 0
        window.setInterval(() => {
            if(counter === 100) {
                counter = 0
            } else {
                counter += 1
                numb.textContent = `${counter}%`
            }
        }, 80)

        return () => window.clearInterval()
    }, [isSSR])

    return isSSR ? null : (
        <StyledCirclular> 
            <StyledInner> </StyledInner>
            <StyledPercentage className="number">  </StyledPercentage>
            <span>
                <StyledBar direction="left"> 
                    <StyledProgress direction="left" /> 
                </StyledBar>
                <StyledBar direction="right"> 
                    <StyledProgress direction="right" /> 
                </StyledBar>
            </span>
        </StyledCirclular> 
    )
}