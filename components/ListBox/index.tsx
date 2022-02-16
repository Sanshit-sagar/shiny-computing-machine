import { useRef } from 'react' 
import { useListBox } from 'react-aria'

import { StyledList } from './styles'
import { ListBoxProps } from './interfaces'

import Option from './Option'
import ListBoxSection from './Section'


const ListBox = (props: ListBoxProps) => {
    const ref = useRef<HTMLUListElement>(null)
    
    const { listBoxRef = ref, state } = props
    const { listBoxProps } = useListBox(props, state, listBoxRef)

    return (
        <StyledList {...listBoxProps} ref={listBoxRef}>
            {[...state.collection].map((item) => item.type === 'section' ? (
                <ListBoxSection key={item.key} section={item} state={state} />
            ): (
                <Option key={item.key} item={item} state={state} /> 
            ))}
        </StyledList>
    )
}

ListBox.displayName = 'ListBox'
export default ListBox