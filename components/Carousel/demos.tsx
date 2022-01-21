import * as React from 'react'

import { styled, VariantProps } from 'stitches.config'
import { CarouselContainer, CarouselChild } from './index'

interface SingleCarouselProps {
    size: number;
    interval: number;
}

interface MultipleCarouselProps extends SingleCarouselProps {
    slidesPresented?: number;
}

interface DemoCarouselProps extends MultipleCarouselProps {}
export type CarouselState = DemoCarouselProps

const Slide = styled('div', {
    height: '300px',
    width: '300px',
    border: '3px solid $accentBorder',
    br: '$4',
    d: 'flex',
    fd: 'column',
    jc: 'center',
    ai: 'center',
    p: 0,

    variants: {
        'gradient': {
            'stripe': { linearGradient: 'to right, #1fa2ff, #12d8fa, #a6ffcb' },
            'flare': { linearGradient: 'to right, #f12711, #f5af19'},
            'default': { linearGradient: '19deg, #21D4FD 0%, #B721FF 100%' },
            'sublime-light': { linearGradient: 'to right, #fc5c7d, #6a82fb'},
            'blurry-beach': { linearGradient: 'to right, #d53369, #cbad6d' },
            'bighead': { linearGradient: 'to right, #c94b4b, #4b134f' },
            'vanusa': { linearGradient: 'to right, #da4453, #89216b' },
            'velvet-sun': { linearGradient: 'to right, #e1eec3, #f05053'},
            'argon': { linearGradient: 'to right, #03001e, #7303c0, #ec38bc, #fdeff9' },
            'celestial': { linearGradient: 'to right, #c33764, #1d2671' },
            'relay': { linearGradient: 'to right, #3a1c71, #d76d77, #ffaf7b' },
            'crystal-clear': { linearGradient: 'to right, #159957, #155799' },
            'ibiza-sunset': { linearGradient: 'to right, #ee0979, #ff6a00' },
            'fresh-turboscent': { linearGradient: 'to right, #f1f2b5, #135058' },
            'cheer-up-emo-kid': { linearGradient: 'to right, #556270, #ff6b6b' },
            'starfall': { linearGradient: 'to right, #f0c27b, #4b1248' },
            'nelson': { linearGradient: 'to right, #f2709c, #ff9472' },
            'forever-lost': { linearGradient: 'to right, #5d4157, #a8caba' },
            'influenza': { linearGradient: 'to right, #c04848, #480048' },
            'jshine': { linearGradient: 'to right, #12c2e9, #c471ed, #f64f59' },
            'calm-darya': { linearGradient: 'to right, #5f2c82, #49a09d' },
            'titanium': { linearGradient: 'to right, #283048, #859398' },
            'pinky': { linearGradient: 'to right, #dd5e89, #f7bb97' },
            'purple-paradise': { linearGradient: 'to right, #1d2b64, #f8cdda' },
            'horizon': { linearGradient: 'to right, #003973, #e5e5be' },
            'noon-to-dusk': { linearGradient: 'to right, #ff6e7f, #bfe9ff' },
        },
    },
    defaultVariant: {
        gradient: 'default'
    }
});

type SlideGradient =  VariantProps<typeof Slide>[keyof Pick<VariantProps<typeof Slide>, 'gradient'>]

const variantSet: SlideGradient[] = [
    'stripe', 'flare', 'default', 'sublime-light', 'blurry-beach', 'bighead',
    'vanusa', 'velvet-sun', 'argon', 'celestial', 'relay', 'crystal-clear',
    'ibiza-sunset', 'fresh-turboscent', 'cheer-up-emo-kid', 'starfall',
    'nelson', 'forever-lost', 'influenza', 'jshine', 'calm-darya', 'titanium',
    'pinky', 'purple-paradise', 'horizon', 'noon-to-dusk'
]

const getRandomGradients = (size: number): SlideGradient[] => (
    [...Array(size)].map(() => (
        variantSet[Math.floor(Math.random()*variantSet.length)]
    ))
);

const RandomSlideSet = ({ size }: { size: number }) => (
    <> {[...getRandomGradients(size)].map((gradient: SlideGradient, index: number) => (
        <CarouselChild key={`carousel-slide-${index}`}>
            <Slide gradient={gradient} />
        </CarouselChild>
    ))} </>
);


export const Multiple = ({ size = 5, interval = 3000, slidesPresented = 3 }: MultipleCarouselProps) => (
    <CarouselContainer interval={interval} slidesPresented={slidesPresented}>
       {[...getRandomGradients(size * slidesPresented)].map((gradient: SlideGradient, index: number) => (
            <CarouselChild key={`carousel-slide-${index}`}>
                <Slide gradient={gradient} />
            </CarouselChild>
        ))} 
    </CarouselContainer>
)

export const Standard = ({ size = 3, interval = 5000 }: SingleCarouselProps) => (
    <CarouselContainer interval={interval}>
        {[...getRandomGradients(size)].map((gradient: SlideGradient, index: number) => (
            <CarouselChild key={`carousel-slide-${index}`}>
                <Slide gradient={gradient} />
            </CarouselChild>
        ))} 
    </CarouselContainer>
);

enum CarouselType {
    STANDARD = 'STANDARD',
    MULTIPLE = 'MULTIPLE'
}

export const discriminator = (props): CarouselType => (
       !props.slidesPresented 
    || props.slidesPresented <= 1 
    ||  Object.keys(props)?.filter((val) => val === 'slidesPresented')?.length > 0
    ? CarouselType.STANDARD 
    : CarouselType.MULTIPLE
);

export const CarouselDemo = (props: SingleCarouselProps | MultipleCarouselProps) => {
    return discriminator(props) === CarouselType.STANDARD 
        ? <Standard {...props} /> 
        : <Multiple {...props} />
}