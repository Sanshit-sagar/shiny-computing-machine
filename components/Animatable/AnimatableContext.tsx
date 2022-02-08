import { createContextScope } from '@/hooks/createContextScope'

import { DEFAULT_NAME } from './constants'
import { IAnimatableContext } from './types'

const [createAnimateableContext, createAnimateableScope] = createContextScope(DEFAULT_NAME)
const [AnimateableProvider, useAnimateableContext] = createAnimateableContext<IAnimatableContext>(DEFAULT_NAME)

export {
    AnimateableProvider,
    createAnimateableScope,
    useAnimateableContext,
    createAnimateableContext
}