import React from 'react'

import { styled } from 'stitches.config'
import { Flex } from '@/components/Flex'
import { Card } from '@/components/Card'

export const HeaderWrapper = styled(Flex, {
    width: '100%', 
    height: 60,
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'space-between', 
    fw: 'nowrap', 
    p: 0, 
    m: 0,
    mt: '$3'
}); 

export const HeaderRow = styled('div', {
    display: 'flex', 
    fd: 'row', 
    jc: 'space-between', 
    ai: 'flex-start',
    width: '100%', 
    px: '1em', 
    pt: '0.15em', 
    pb: 0,
    margin: 0, 
    border: 'none', 
    outline: 'none'
})

export const AnimatedHeading = styled('h1', {
    width: '100%',
    position: 'relative',
    display: 'inline-flex',
    jc: 'flex-start', 
    ai: 'center',
    gap: '$2',
    color: '$accentSolid',
    fontSize: 36,
    fontWeight: 900,
    mt: 0,
    pl: '$2',
    '&:after': {
        content: '',
        position: 'absolute',
        width: 175,
        transform: 'scaleX(0)',
        height: '1.5px',
        bottom: 0,
        left: 0,
        backgroundColor: '$accentText',
        transformOrigin: 'bottom right',
        transition: 'transform 0.325s ease-out'
    },
    '&:hover': {
        '&:after': {
            'transform': 'scaleX(1)',
            transformOrigin: 'bottom left'
        }
    }
})

const StyledHeader = ({ children }) => (
    <HeaderWrapper>
        <HeaderRow>
            <AnimatedHeading>
                {children}
            </AnimatedHeading>
        </HeaderRow>
    </HeaderWrapper>
)

type ShowcaseProps = {
    ceiling: React.ReactNode;
    content: React.ReactNode;
    floor?: React.ReactNode;
    lwall?: React.ReactNode;
    rwall?: React.ReactNode;
    corner?: React.ReactNode;
}

export const StyledContainer = styled(Flex, {
    height: '97.5vh',  
    width: '100%',
    mx: '1.25vh',
    my: '1.25vh'
})

const GridParent = styled('div', {
    height: '100%',
    width: '100%',
    bc: '$panelBgSubtle',
    mt: 0,
    display: 'grid',
    gap: '$3',

    gridTemplateColumns: '100px auto 400px',
    gridTemplateRows: '60px auto 60px',
    border: '2px solid $accentBorder',
    br: '$2',
    bblr: '$6',
    btrr: '$6'
})

const GridCeiling = styled('div', {
    gridColumnStart: '1', 
    gridColumnEnd: '3', 
    gridRowStart: '1', 
    gridRowEnd: '2',
    p: '$2',
    justifySelf: 'start',
    alignSelf: 'start'
})

const GridContent = styled('div', {
    gridColumnStart: '2', 
    gridColumnEnd: '3', 
    gridRowStart: '2', 
    gridRowEnd: '3',

    justifySelf: 'center',
    alignSelf: 'center',
    p: '$2'
})

const GridCorner =styled('div', {
    gridColumnStart: '3',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '2',
    p: 0,
    pr: 0,
    justifySelf: 'end',
    alignSelf: 'start'
})

const GridFloor = styled('div', {
    gridColumnStart: '1', 
    gridColumnEnd: '3', 
    gridRowStart: '3',
    gridRowEnd: '4',
    justifySelf: 'end',
    alignSelf: 'end',
    py: '$2'
})

const GridLWall = styled('div', {
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '2',
    gridRowEnd: '4',
    p: '$2',
    m: 0,
    justifySelf: 'start',
    alignSelf: 'end'
})

const GridRWall = styled('div', {
    gridColumnStart: '3', 
    gridColumnEnd: '4', 
    gridRowStart: '2', 
    gridRowEnd: '4',
    px: 0,
    pt: 0,
    pb: '$5',
    justifySelf: 'center',
    alignSelf: 'end'
})

export const Showcase = ({ ceiling, content, floor, lwall, rwall, corner }: ShowcaseProps) => (
    <GridParent>
        <GridCeiling> {ceiling} </GridCeiling>
        <GridContent> {content} </GridContent>
        <GridFloor>   {floor}   </GridFloor>
        <GridCorner>  {corner}  </GridCorner>
        <GridLWall>   {lwall}   </GridLWall>
        <GridRWall>   {rwall}   </GridRWall>
    </GridParent>
)

const ExtendedContainer = ({ children, className }) => (
    <StyledContainer className={className}>
        {children}
    </StyledContainer>
)

export const Header = StyledHeader
export const Container = ExtendedContainer