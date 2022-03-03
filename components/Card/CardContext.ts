import type { ICardContext } from './types'

import { DEFAULT_NAME } from './constants'
import { createContextScope } from '@/hooks/createContextScope'

const [createCardContext, createCardScope] = createContextScope(DEFAULT_NAME)
const [CardProvider, useCardContext] = createCardContext<ICardContext>(DEFAULT_NAME)

export {
    CardProvider,
    useCardContext,
    createCardScope,
    createCardContext
}