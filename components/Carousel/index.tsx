import * as React from 'react'
import { styled } from '../../stitches.config'
import { useCarousel, CarouselOptions } from './useCarousel'

const Carousel = styled('div', {
    position: 'relative',
    overflow: 'hidden',
    width: '150px',
    height: '150px',
});

const CarouselIndicators = styled('ol', {
    position: 'absolute',
    right: '0',
    bottom: '0.5em',
    left: 0,
    zIndex: 15,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '',
    listStyle: 'none',
    margin: '0 auto'
});

const CarouselIndicator = styled('li', {
    position: 'relative',
    flex: '0 1 auto',
    width: '1.5em',
    height: '0.3em',
    margin: '0 0.3em',
    background: '$accentBg',
    cursor: 'pointer',
    '&:hover': {
        bc: '$accentTextContrast',
    },
    '&.active': {
        bc: '$accentSolid',
        cursor: 'default',
    }
});

const CarouselContent = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    position: 'relative'
});

const CarouselItem = styled('div', {
    width: '100%'
});

export function makeIndices(start: number, delta: number, num: number) {
    const indices: Array<number> = [];

    while (indices.length < num) {
        indices.push(start);
        start += delta;
    }
    return indices;
}

export interface CarouselContainerProps {
    interval?: number;
    slidesPresented?: number;
    children: React.ReactNode;
}

export interface CarouselChildProps {
    children: React.ReactNode;
}

export const CarouselChild = ({ children }: CarouselChildProps) => (
    <CarouselItem> {children} </CarouselItem>
);

export const CarouselContainer = ({ children, slidesPresented = 1, interval = 5000 }: CarouselContainerProps) => {

    const slides = React.Children.toArray(children)

    const length = slides.length
    const numActive = Math.min(length, slidesPresented)
    const [active, setActive, handlers, style] = useCarousel(length, interval, { slidesPresented: numActive })
    const beforeIndices = makeIndices(slides.length - 1, -1, numActive)
    const afterIndices = makeIndices(0, +1, numActive)

    if(length < 0) return <div> no content given </div>; 

    return (
        <Carousel>
            <CarouselIndicators>
                {slides.map((_, index) => (
                    <CarouselIndicator
                        onClick={() => setActive(index)}
                        key={index}
                        className={`${active === index ? 'active' : ''}`}
                    />
                ))}
            </CarouselIndicators>

            <CarouselContent {...handlers} style={style}>
                {beforeIndices.map(i => (
                    <CarouselChild key={i}> {slides[i]} </CarouselChild>
                ))}
                {slides.map((slide, index) => (
                    <CarouselChild key={index}> {slide} </CarouselChild>
                ))}
                {afterIndices.map(i => (
                    <CarouselChild key={i}> {slides[i]} </CarouselChild>
                ))}
            </CarouselContent>
        </Carousel>
    )
};
