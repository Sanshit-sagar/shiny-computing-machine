import { useContext } from 'react' 
import { ISliderContext } from './interfaces'
import SliderContext from './SliderContext'

export function adjustSlider(
    value: number, 
    min: number,
    max: number, 
    isDisabled?: boolean, 
    isHovered?: boolean, 
    isActive?: boolean
) {
    const val = value * 100
  
    const fillLeft = '$colors$accentBg'
    const fillLeftHovered = '$colors$accentBgHover'
    const fillLeftActive = '$colors$accentBgActive'
    const fillLeftDisabled = '$colors$disabledSolid'
    const fillRight = '$colors$disabledLine'
  
    return `linear-gradient(to right, ${
            isDisabled ? fillLeftDisabled 
        :   isHovered  ? fillLeftHovered
        :   isActive   ? fillLeftActive
        :   fillLeft
    } ${value}%, ${fillRight} ${value}%)`
}

type Nullable<T> = T | null | undefined

export const useSliderContext = (): Nullable<ISliderContext> => {
    const sliderContext = useContext<Nullable<ISliderContext>>(SliderContext)

    if(!sliderContext)
        throw new Error(`Illegal access from outside scope of SliderContext`)

    return sliderContext
}