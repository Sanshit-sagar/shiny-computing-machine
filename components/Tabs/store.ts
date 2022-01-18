import { ITabsState as TabsState, TabsAction } from './interfaces'

type NewTabsState<T> =  Omit<TabsState<T>, 'dispatch'>

export const tabsReducer =<T extends object>(state: NewTabsState<T>, action: TabsAction<T>): NewTabsState<T> => {
    switch (action.type) {
        case 'next':
            // const nextKey = state.state.collection.getKeyAfter(state.state.selectedKey)
            // state.state.setSelectedKey(nextKey)
            // alert(`Current key is ${state.state.selectedKey}, next is ${nextKey}`)
            return {
                ...state,
                // activeIndex: 2
            };
        case 'prev':
            return {
                ...state,
                activeIndex: (Number(state.activeIndex) - 1) % state.tabsCount
            };
        case 'jump': {
            return {
                ...state,
                activeIndex: action.jumpToIndex,
            }
        }
        case 'toggle': {
            return {
                ...state,
                [action.key]: action.value
            }
        }
        default:
            return state
    }
}