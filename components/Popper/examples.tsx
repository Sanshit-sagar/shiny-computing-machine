
import { StyledPopover, StyledPopoverMessage } from './styles'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { H4 } from '@/components/Text/Heading'

import { TwitterHoverCardClone } from '@/components/HoverCard/examples'

export const PopperInstance = () => {

    return (
        <StyledPopover>
            <StyledPopoverMessage placement="right-top">
                <TwitterHoverCardClone />
            </StyledPopoverMessage>
        </StyledPopover>
    )
}