import dynamic from 'next/dynamic'

import Divider from './Divider'
import { Card } from '@/components/Card/Card'

const DynamicSplitPane = dynamic(() => import('./SplitPane'))
const DynamicSplitPaneTop = dynamic(() => import('./PositionedPanes/SplitPaneTop'))
const DynamicSplitPaneLeft = dynamic(() => import('./PositionedPanes/SplitPaneLeft'))
const DynamicSplitPaneRight = dynamic(() => import('./PositionedPanes/SplitPaneRight'))
const DynamicSplitPaneBottom = dynamic(() => import('./PositionedPanes/SplitPaneBottom'))

const SplitView = () => {

    return (
        <DynamicSplitPane outer={true} element={Card} css={{ height: 500, width: 800 }}>
            <DynamicSplitPaneLeft>
                <DynamicSplitPaneTop> ~/LEFT/TOP </DynamicSplitPaneTop>
                <Divider orientation="horizontal" />
                <DynamicSplitPaneBottom>  ~/LEFT/BOTTOM </DynamicSplitPaneBottom>
            </DynamicSplitPaneLeft>
            <Divider orientation="vertical" />
            <DynamicSplitPaneRight> ~/RIGHT </DynamicSplitPaneRight>
        </DynamicSplitPane>
    )
}

SplitView.displayName = "SplitView"
export default SplitView