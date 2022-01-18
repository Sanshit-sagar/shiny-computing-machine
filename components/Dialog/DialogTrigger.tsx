import React, { ReactChild, cloneElement } from 'react'

import { useDialogContext } from './utils'
import { DialogTriggerProps } from './types'

import { PressEvent } from '@/interfaces/Event'
import { flattenChildren } from '@/utils/flattenChildren'

const DialogTrigger = ({ element: Component = 'div', children, css, ...props }: DialogTriggerProps) => {
    const { state } = useDialogContext()
    const flattenedChildren = flattenChildren(children)

    return (
        <Component {...props}>
            {flattenedChildren.map((child: ReactChild, index: number) => {
                if(index === 0) return cloneElement(child, {
                    onPress: (_event: PressEvent) => state.open()
                })
            })}
        </Component>
    )
}


DialogTrigger.displayName = 'DialogTrigger'
export default DialogTrigger