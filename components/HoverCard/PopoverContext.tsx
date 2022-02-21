import type { IPopoverContext } from './types'

import { DEFAULT_NAME } from './constants'
import { createContextScope } from '@/hooks/createContextScope'

const [createPopoverContext, createPopoverScope] = createContextScope(DEFAULT_NAME)
const [PopoverProvider, usePopoverContext] = createPopoverContext<IPopoverContext>(DEFAULT_NAME)

export {
    PopoverProvider,
    usePopoverContext,
    createPopoverScope,
    createPopoverContext
}