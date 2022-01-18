import { styled } from '../../stitches.config'
import React from 'react'

const Container = styled('div', {
    display: 'grid',
    placeItems: 'center',
    height: 'fit-content',
    border: '1px solid $accentBorder',
    br: '$2',
    padding: '$1',
    margin: 0,
});

const FloatingStack = styled('div', {
    bc: '$accentBg',
    color: '$accentText',
    height: '400px',
    width: '325px',
    br: '$2',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '10px',
        height: '2px'
    },
    '&::-webkit-scrollbar-button:end:increment': {
        display: 'block',
        bc: '$accentText',
        '&:hover': {
            bc: '$accentBgHover',
            border: '1px solid $accentTextContrast'
        }
    },
    '&::-webkit-scrollbar-button:start:decrement': {
        display: 'block',
        bc: '$accentText',
        '&:hover': {
            bc: '$accentBgHover',
            border: '1px solid $accentTextContrast'
        }
    },
    '&::-webkit-scrollbar-thumb:vertical': {
        width: '5px',
        bc: '$accentBorder',
        '-webkit-border-radius': '3px',
    },
    '&:webkit-scrollbar-track-piece': {
        bc: '$accentBase',
        '-webkit-border-radius': '6px'
    }
}); 

const Dl = styled('dl', {
    margin: '0 0 $4',
    display: 'grid',
    gridTemplateColumns: '2.5em 1fr',
    ai: 'center',
    '&:first-child': {
        mt: '$1'
    }
});

const Dt = styled('dt', {
    position: 'sticky',
    top: '0.5em',
    left: '0.5em',
    fontWeight: 'bold',
    bc: '$accentSolid',
    color: '$accentTextContrast',
    height: '$5',
    width: '$5',
    br: '$3',
    p: '$1 $2',
    gridColumn: 1,
    display: 'inline-flex',
    ai: 'center',
    jc: 'center',
    boxSizing: 'border-box'
});

const Dd = styled('dd', {
    gridColumn: 2,
    margin: 0,
    padding: '$2',
    '&:hover': {
        bc: '$accentBgActive',
        color: '$accentTextContrast'
    },
    '&:first-child': {
        mt: '$1'
    }
}); 


export const StickyList = () => {

    return (
        <Container>
            <FloatingStack>
                <Dl>
                    <Dt>A</Dt>
                    <Dd>Algeria</Dd>
                    <Dd>Angola</Dd>

                    <Dt>B</Dt>
                    <Dd>Benin</Dd>
                    <Dd>Botswana</Dd>
                    <Dd>Burkina Faso</Dd>
                    <Dd>Burundi</Dd>

                    <Dt>C</Dt>
                    <Dd>Cabo Verde</Dd>
                    <Dd>Cameroon</Dd>
                    <Dd>Central African Republic</Dd>
                    <Dd>Chad</Dd>
                    <Dd>Comoros</Dd>
                    <Dd>Congo, Democratic Republic of the</Dd>
                    <Dd>Congo, Republic of the</Dd>
                    <Dd>Cote d'Ivoire</Dd>

                    <Dt>D</Dt>
                    <Dd>Djibouti</Dd>

                    <Dt>E</Dt>
                    <Dd>Egypt</Dd>
                    <Dd>Equatorial Guinea</Dd>
                    <Dd>Eritrea</Dd>
                    <Dd>Eswatini (formerly Swaziland)</Dd>
                    <Dd>Ethiopia</Dd>
                </Dl>
            </FloatingStack>
        </Container>
    );
}