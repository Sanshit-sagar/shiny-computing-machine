import { useState } from 'react'
import { styled } from '../../stitches.config'

import { useAtomValue } from 'jotai/utils'
import { activeThemeClassAtom } from '@/atoms/darkMode'

interface StarRatingProps {
    initRating?: Rating;
}

type Rating = 0 | 1 | 2 | 3 | 4 | 5; 

const StarRatingWrapper = styled('div', {
    height: 'fit-content',
    width: 'fit-content',
    padding: '$3',
    margin: 0,
    border: '1px solid $accentBorder',
    br: '$2',

    variants: {
        orientation: {
            'vertical': { 
                display: 'flex',
                jc: 'center',
                ai: 'center',
                gap: '$2',
                fd: 'column' 
            },
            'horizontal': { 
                display: 'flex',
                fd: 'row',
                jc: 'center',
                ai: 'center',
                gap: '$2',
            }
        },
    },
    defaultVariants: {
        orientation: 'vertical'
    }
})

const MarkedStar = ({ starId }) => {
    const theme = useAtomValue(activeThemeClassAtom)

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill={`${theme.colors.accentSolid}`}
            data-star-id={starId} 
            className="star" 
        >
            <path 
                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
            >
            </path>
        </svg>
    );
}

const UnmarkedStar = ({ starId }) => {
    const theme = useAtomValue(activeThemeClassAtom)

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill={`${theme.colors.accentBg}`}
            data-star-id={starId} 
            className="star" 
        >
            <path 
                d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
            >
            </path>
        </svg>
    );
}

const Star = ({ marked, starId }) => {

    return (
        <span data-star-id={starId} className="star" role="button">
            {marked ? <MarkedStar starId={starId} /> : <UnmarkedStar starId={starId}  /> }
        </span>
    )
}

export const StarRating = ({ initRating = 0 }: StarRatingProps) => {

    const [rating, setRating] = useState<Rating>(initRating)
    const [selection, setSelection] = useState<number>(0)

    const hoverOver = (event) => {
        let attributeValue = 0
        if(event && event.target && event.target.getAttribute('data-star-id')) {
            attributeValue = event.target.getAttribute('data-star-id')
        }
        setSelection(attributeValue)
    }

    return (
        <StarRatingWrapper
            onMouseOut={() => hoverOver(null)}
            onClick={(event) => {
                setRating(event.target.getAttribute('data-star-id') || rating)
            }}
            onMouseOver={hoverOver}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
        >
            {Array.from({ length: 5 }, (v,i) => (
                <Star
                    starId={i+1}
                    key={`star_${i + 1}`}
                    marked={selection ? selection >= i + 1 : rating >= i + 1}
                />
            ))}
        </StarRatingWrapper>

    )
}