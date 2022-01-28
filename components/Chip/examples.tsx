import Chip from '@/components/Chip'
import { EarbudsIcon, CrossIcon } from '@/components/Icons'
import { Float } from '@/components/Animated'

export const ChipInstance = () => {

    return (
        <Float duration="1000ms">
            <Chip.Root> 

                <Chip.Prefix>
                    <EarbudsIcon />
                </Chip.Prefix>

                Music 

                <Chip.Separator /> 

                <Chip.Suffix element={'button'} onClick={(_event) => alert('hihi')}>
                    <CrossIcon /> 
                </Chip.Suffix>
            </Chip.Root>
        </Float>
    )
}