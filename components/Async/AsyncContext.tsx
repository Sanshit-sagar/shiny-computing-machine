
import { createContextScope } from '@/hooks/createContextScope'

import { DEFAULT_NAME } from './constants' 
import type { IAsyncContext } from './types'

const [createAsyncContext, createAsyncScope] = createContextScope(DEFAULT_NAME)
const [AsyncProvider, useAsyncContext] = createAsyncContext<IAsyncContext>(DEFAULT_NAME)

export {
    AsyncProvider,
    useAsyncContext,
    createAsyncContext,
    createAsyncScope
}
