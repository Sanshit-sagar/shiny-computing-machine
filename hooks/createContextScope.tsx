import React, { useMemo, ReactNode, Context } from 'react'

type Undefinable<T> = T | undefined

type Scope<C = any> = Undefinable<{ 
    [key: string]: Context<C>[] 
}>
type ScopeHook = (scope: Scope) => { 
    [_scopeKey: string]: Scope 
}
type CreateScope = {
    scopeName: string;
    (): ScopeHook;
}

function composeContextScopes(...scopes: CreateScope[]) {
    const baseScope = scopes[0]
    
    if (scopes.length === 1) return baseScope

    const createScope: CreateScope = () => {
        const scopeHooks = scopes.map((createScope) => ({
            useScope: createScope(),
            scopeName: createScope.scopeName,
        }))

        return function useComposedScopes(overrideScopes) {

            const nextScopes = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
                const scopeProps = useScope(overrideScopes)
                const currentScope = scopeProps[`__scope${scopeName}`]

                return {
                    ...nextScopes,
                    ...currentScope
                }
            }, {})

            return useMemo(() => ({
                [`__scope${baseScope.scopeName}`]: nextScopes
            }), [nextScopes])
        }
    }

    createScope.scopeName = baseScope.scopeName
    return createScope    
}


type ProviderProps<T> = T & { 
    scope: Scope<T>; 
    children: ReactNode 
}

function createContextScope(scopeName: string, createContextScopeDeps: CreateScope[] = []) {
    let defaultContexts: any[] = []

    function createContext<ContextValueType extends object | null>(
        rootComponentName: string, 
        defaultContext?: ContextValueType
    )  {

        const BaseContext = React.createContext<ContextValueType | undefined>(defaultContext)
        const index = defaultContexts.length
        
        defaultContexts = [...defaultContexts, defaultContext]

        function Provider({ scope, children, ...context }: ProviderProps<ContextValueType>) {
            const Ctx = scope?.[scopeName][index] || BaseContext

            const value = useMemo(() => context, Object.values(context))

            return <Ctx.Provider value={value as ContextValueType}> {children}</Ctx.Provider>
        }

        function useContext(consumerName: string, scope: Scope<Undefinable<ContextValueType>>) {
            const Ctx = scope?.[scopeName][index] || BaseContext
            const ctx = React.useContext(Ctx)

            if(ctx) return ctx
            if(defaultContext !== undefined) return defaultContext

            throw new Error(`${consumerName} is trying to consume from outside  ${rootComponentName}`)
        }

        Provider.displayName = `${rootComponentName}Provider`
        return [Provider, useContext] as const
    }

    const createScope: CreateScope = () => {
        const scopeContexts = defaultContexts.map((defaultContext) => {
          return React.createContext(defaultContext);
        })

        return function useScope(scope: Scope) {
          const contexts = scope?.[scopeName] || scopeContexts
          
          return useMemo(
            () => ({ 
                [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } 
            }),[scope, contexts])
        }
    }

    createScope.scopeName = scopeName

    return [
        createContext, 
        composeContextScopes(createScope, ...createContextScopeDeps)
    ] as const
}

export {
    createContextScope
}

export type {
    Scope,
    CreateScope
}