import React, { HTMLAttributes } from 'react' 
import { styled, CSS, VariantProps } from 'stitches.config'
import { Flex } from '@/components/Flex'

export const wrapperStyles: CSS = {
    appearance: 'none',
    userSelect: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    border: '0',

    height: 'calc(32px + 0.1em)',
    width: 'calc(84px + 0.1em)',

    opacity: 1,
    margin: 0,
    padding: 0,
}

export const sharedStyles: CSS = {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    outline: 'none', 
}

const StyledSharpCornersShape = styled(Flex, {
    ...sharedStyles,
    br: 0,
})

const StyledRoundedCornersShape = styled(Flex, {
    ...sharedStyles,

    variants: {
        size: {
            0: {
                br: '$1'
            },
            1: {
                br: '$2'
            },
            2: {
                br: '$3'
            },
            3: {
                br: '$4'
            }
        }
    },
    defaultVariants: {
        size: '0'
    }
})

const StyledEllipticalShape = styled(Flex, {
    ...sharedStyles, 
    
    variants: {
        size: {
            0: {
                br: '$6'
            },
            1: {
                br: '$7'
            },
            2: {
                br: '$9'
            },
            3: {
                br: 'calc(25px + $9)'
            }
        }
    },
    defaultVariants: {
        size: '0'
    }
})

const StyledAlternatingCornersShape = styled(Flex, {
    ...sharedStyles,

    variants: {
        reversed: { 
            true: { bblr: '$5', btrr: '$5', bbrr: '$2', btlr: '$2' },
            false: { bblr: '$2', btrr: '$2', bbrr: '$5', btlr: '$5' } 
        }
    },
    defaultVariants: {
        reversed: true
    }
})

type ShapeProps<T> = T & HTMLAttributes<HTMLElement>
type AltCornersShapeProps<T> = ShapeProps<T> & VariantProps<typeof StyledAlternatingCornersShape>

const SharpCorners = <T extends object>(props: ShapeProps<T>) => <StyledSharpCornersShape {...props} /> 
const RoundedCorners = <T extends object>(props: ShapeProps<T>) => <StyledRoundedCornersShape {...props} /> 
const EllipticalCorners = <T extends object>(props: ShapeProps<T>) => <StyledEllipticalShape {...props} /> 
const AlternatingCorners = <T extends object>({ reversed, ...props }: AltCornersShapeProps<T>) => (
    <StyledAlternatingCornersShape reversed={!reversed} {...props} /> 
)
const PolygonalCorners = <T extends object>(props: ShapeProps<T>) => (
    <Flex css={{ $$dropShadowColor: '$colors$accentLine', filter: `drop-shadow(0 0 4px $$dropShadowColor)` }}>
        <StyledPolygonWrapper>
            <StyledPolygon {...props} />
        </StyledPolygonWrapper>
    </Flex>
)

SharpCorners.displayName = 'SharpCorners'
RoundedCorners.displayName = 'RoundedCorners'
EllipticalCorners.displayName = 'EllipticalCorners'
AlternatingCorners.displayName = 'AlternatingCorners'
PolygonalCorners.displayName = 'PolygonalCorners'

const Corners = {
    'Sharp': SharpCorners,
    'Rounded': RoundedCorners,
    'Elliptical': EllipticalCorners,
    'Alternating': AlternatingCorners,
    'Polygonal': PolygonalCorners
}

export default Corners












