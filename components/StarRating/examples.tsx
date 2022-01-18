import { ExampleBase } from '@/components/ExampleBase'
import { StarRating } from './index'
import { StarIcon } from '@radix-ui/react-icons'

export const StarRatingInstance = () => {

    return <StarRating /> 
}

const ExampleStarRating = () => {

    return (
        <ExampleBase
            heading={'Star Rating'}
            description={''}
            icon={<StarIcon />}
            component={<StarRatingInstance />}
            controls={[]}
        />
    )
}

export default ExampleStarRating