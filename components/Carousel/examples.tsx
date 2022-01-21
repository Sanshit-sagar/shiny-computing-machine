import { useState } from 'react' 
import { ExampleBase } from '@/components/ExampleBase'
import { CarouselDemo, Multiple, Standard } from './demos'
import type { CarouselState } from './demos'

import { StarIcon } from '@radix-ui/react-icons'
import StateFactory from '@/utils/StateFactory'

const carouselState: CarouselState = {
    size: 3,
    interval: 5000,
    slidesPresented: 1
}
const init = (): CarouselState => carouselState; 

export const CarouselInstance = () => {
    const { state } = StateFactory<CarouselState>(init)
    const [prevSp, setPrevSp] = useState<number>(state.slidesPresented)
    const props = { ...state, prevSp }

    return <Standard {...props} /> 
}

const ExampleCarousel = () => {

    return (
        <ExampleBase
            heading={'Carousel'}
            description={''}
            icon={<StarIcon />}
            component={<CarouselInstance />}
            controls={[]}
        />
    )
}

export default ExampleCarousel 