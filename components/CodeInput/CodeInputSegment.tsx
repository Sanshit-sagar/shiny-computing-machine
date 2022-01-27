import { getSegmentArray } from './utils'
import { RenderSegmentFn } from './types'
import { useCodeInputContext } from './CodeInputContext'

type CodeInputSegmentProps = {
    children: RenderSegmentFn; 
}

const CodeInputSegment = ({ children, ...rest }: CodeInputSegmentProps) => {
   
    const { length, selection } = useCodeInputContext() 
    const _selection = selection!

    const segmentArray = getSegmentArray(length, _selection)

    return (
        <> 
            {segmentArray.map(({ state, position }, index: number) => (
                children({ index, state, position, selection: _selection })
            ))}
        </>
    )
}

CodeInputSegment.displayName = 'CodeInputSegment'
export default CodeInputSegment