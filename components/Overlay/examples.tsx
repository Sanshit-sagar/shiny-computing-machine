
import { ActionMenu } from '@/components/ActionMenu' 
import { ActionList } from '@/components/ActionList'


const ActionMenuInstance = () => (
    <ActionMenu>
        <ActionMenu.Button> Menu </ActionMenu.Button>
        <ActionMenu.Overlay>
            <ActionList>
                <ActionList.Item> New File </ActionList.Item>
                <ActionList.Item> Copy Link </ActionList.Item> 
                <ActionList.Item> Edit File </ActionList.Item> 
                <ActionList.Divider />
                <ActionList.Item variant="danger"> Delete File </ActionList.Item>
            </ActionList>
        </ActionMenu.Overlay>
    </ActionMenu>
)