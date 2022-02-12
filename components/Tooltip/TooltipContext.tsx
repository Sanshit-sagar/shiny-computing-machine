import type { ITooltipContext } from './types'

import { DEFAULT_NAME } from './constants'
import { createContextScope } from '@/hooks/createContextScope'

const [createTooltipContext, createTooltipScope] = createContextScope(DEFAULT_NAME)
const [TooltipProvider, useTooltipContext] = createTooltipContext<ITooltipContext>(DEFAULT_NAME)

export {
    TooltipProvider,
    useTooltipContext,
    createTooltipScope,
    createTooltipContext
}