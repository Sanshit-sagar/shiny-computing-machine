import type { IAvatarContext } from './types'

import { DEFAULT_NAME } from './constants'
import { createContextScope } from '@/hooks/createContextScope'

const [createAvatarContext, createAvatarScope] = createContextScope(DEFAULT_NAME)
const [AvatarProvider, useAvatarContext] = createAvatarContext<IAvatarContext>(DEFAULT_NAME)

export {
    AvatarProvider,
    useAvatarContext,
    createAvatarScope,
    createAvatarContext
}