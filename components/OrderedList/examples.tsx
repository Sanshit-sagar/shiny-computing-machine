import { styled } from 'stitches.config'
import { Box } from '@/components/Box'
import OrderedList from './index'

const StyledContainer = styled(Box, {
    padding: '20px',
    height: '200px',
    width: '125px',
    bc: '$white1',
    border: '1px solid $accentBorder',
    br: '$2',
    overflow: 'hidden'
})

export const OrderedListInstance = () => (
    <StyledContainer>
        <OrderedList />
    </StyledContainer>
)
