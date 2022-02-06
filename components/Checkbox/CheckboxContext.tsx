
import { createContextScope } from '@/hooks/createContextScope'

import { DEFAULT_NAME } from './constants' 
import type { ICheckboxContext } from './types'

const [createCheckboxContext, createCheckboxScope] = createContextScope(DEFAULT_NAME)
const [CheckboxProvider, useCheckboxContext] = createCheckboxContext<ICheckboxContext>(DEFAULT_NAME)

export {
    CheckboxProvider,
    useCheckboxContext,
    createCheckboxContext,
    createCheckboxScope
}

