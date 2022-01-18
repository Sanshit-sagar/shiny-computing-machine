import React from 'react'
import dynamic from 'next/dynamic'

const DynamicLiveCodeBlock = dynamic(() => import('./Code'))
const DynamicCodeBlock = dynamic(() => import('./ReactLive'))

import { PrePropsType } from './types'
import { preToCodeBlock } from './utils'

const CodeBlock = (preProps: PrePropsType) => {
    const props = preToCodeBlock(preProps)

    if(props) {
        return props.live || props.render ? (
            <DynamicLiveCodeBlock {...props} />
        ) : (
            <DynamicCodeBlock {...props} />
        )
    }
    return null
}

export default CodeBlock