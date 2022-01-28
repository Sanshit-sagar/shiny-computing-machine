import { cloneElement, ReactChild } from 'react' 
import { StyledChip } from './styles'
import { ChipProps } from './types'
import { flattenChildren } from '@/utils/flattenChildren'

import ChipContext from './ChipContext'

const ChipRoot = ({ children, prefix, suffix, ...rest }: ChipProps) => {
    const flattenedChildren = flattenChildren(children)
    const childCount = flattenedChildren.length

    // content conditional <==> // childCount > index && childCount >= 1
    const isValidPrefix     = (child: ReactChild, index: number) => index === 0 && childCount > 1
    const isValidContent    = (child: ReactChild, index: number) => index === 0 && childCount === 1 || index === 1 && childCount > 1 
    const isValidSeparator  = (child: ReactChild, index: number) => index === 2 && childCount === 4
    const isValidSuffix     = (child: ReactChild, index: number) => index === 3 && childCount > 1

    return (
        <ChipContext.Provider value={{ prefix, suffix }}>
            <StyledChip> 
                {flattenedChildren.map((child: ReactChild, index: number) => {
                    if(isValidPrefix(child, index)) return cloneElement(child, {

                    })

                    if(isValidContent(child, index)) return <> {child} </>
                    

                    if(isValidSeparator(child, index)) return cloneElement(child, {

                    })

                    if(isValidSuffix(child, index)) return cloneElement(child, {

                    })
                })} 
            </StyledChip>
        </ChipContext.Provider>
    )
}

ChipRoot.displayName = 'ChipRoot'
export default ChipRoot