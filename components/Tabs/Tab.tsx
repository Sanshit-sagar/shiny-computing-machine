import { useRef, Key, ReactNode } from 'react' 
import { useTab } from '@react-aria/tabs'

import { StyledTab } from './styles'
import { useTabContext } from './utils'

type TabProps = {
  index: number;
  itemKey: string | number | Key; 
  children: ReactNode; 
}

function Tab<T extends object>({ index, itemKey, children }: TabProps) {

    const { state } = useTabContext<T>() 

    const ref = useRef<HTMLDivElement>()
    const { tabProps } = useTab({ key: itemKey }, state, ref)

    return (
      <StyledTab
        {...tabProps}
        ref={ref}
        isSelected={state.selectedKey === itemKey}
        isDisabled={state.disabledKeys.has(itemKey)}
        onClick={(_event) => state.setSelectedKey(itemKey)}
      >
        {children} 
      </StyledTab>
    )
}

export default Tab