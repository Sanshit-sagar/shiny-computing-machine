import type { ISwitchContext } from './types'

import { DEFAULT_NAME } from './constants'
import { createContextScope } from '@/hooks/createContextScope'

const [createSwitchContext, createSwitchScope] = createContextScope(DEFAULT_NAME)
const [SwitchProvider, useSwitchContext] = createSwitchContext<ISwitchContext>(DEFAULT_NAME)

export {
    SwitchProvider,
    useSwitchContext,
    createSwitchScope,
    createSwitchContext
}