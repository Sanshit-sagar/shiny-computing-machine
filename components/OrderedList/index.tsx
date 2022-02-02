import { styled } from 'stitches.config'

const StyledOrderedListItem = styled('li', {
    willChange: 'color',
    transition: 'all 0.4s ease',

    '&::before': {
        content: 'counter(muffins, upperRoman) "."',
        fontVariantNumeric: 'tabular-nums',
        fontStyle: 'bold',
        fontFamily: '$jetbrains',
        fontSize: '$4',
        mr: '$1',
        color: '$accentText'
    },

    fontVariant: 'tabular',
    fontFamily: '$plexsans',
    fontStyle: 'normal',
    color: '$accentTextContrast',

    '&:hover': {
        color: '$accentText'
    }
})

const StyledOrderedList = styled('ol', {
    appearance: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',

    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'flex-start',
    gap: '$1',

    [`& ${StyledOrderedListItem}`]: {
        counterIncrement: 'muffins'
    },

    listStyle: 'none',
    counterReset: 'muffins',

})

type OrderedListProps = {

}

const OrderedList = (props: OrderedListProps) => (
    <StyledOrderedList>
        <StyledOrderedListItem> Stop </StyledOrderedListItem>
        <StyledOrderedListItem> Drop </StyledOrderedListItem>
        <StyledOrderedListItem> Roll </StyledOrderedListItem>
    </StyledOrderedList>
)

export default OrderedList