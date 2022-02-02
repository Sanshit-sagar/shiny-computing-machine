import type { AsyncReturnType } from '@/hooks/useAsync'
import type { Scope } from '@/hooks/createContextScope'

export type ScopedProps<P> = P & { __scopeAsync?: Scope; }

export type IAsyncContext = AsyncReturnType
