
import { StyledPopover, StyledPopoverMessage } from './styles'

import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { H4 } from '@/components/Text/Heading'

export const PopperInstance = () => {

    return (
        <StyledPopover>
            <StyledPopoverMessage placement="right-top">
                <H4> Popover Heading </H4>
                <Text> Message about this particular piece of UI </Text> 
                <Button> Got it! </Button>
            </StyledPopoverMessage>
        </StyledPopover>
    )
}