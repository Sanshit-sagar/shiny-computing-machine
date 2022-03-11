
import { ActionMenu } from '@/components/Overlay/ActionMenu' 
import ActionList from '@/components/ActionList'
import { Button } from '@/components/Button'
import { 
    GearIcon,
    TableIcon, 
    LayoutIcon, 
    ListBulletIcon, 
    ActivityLogIcon,
    MagnifyingGlassIcon
} from '@radix-ui/react-icons'


const SimpleActionMenu = () => (
    <ActionMenu>
        <ActionMenu.Button> Open Menu </ActionMenu.Button>

        <ActionMenu.Overlay>
            <ActionList showDividers css={{ width: '300px' }}>

                <ActionList.Group title="Live Query">
                    <ActionList.Item> 
                        <ActionList.LeadingVisual>
                            <MagnifyingGlassIcon />
                        </ActionList.LeadingVisual>
                        repo:github/memex,github/github
                    </ActionList.Item>
                </ActionList.Group>      

                <ActionList.Divider /> 

                <ActionList.Group title="Layout">
                    <ActionList.Item> 
                        <ActionList.LeadingVisual>
                            <TableIcon />
                        </ActionList.LeadingVisual>
                        Table
                        <ActionList.Description variant="block">
                            Information-dense table optimized for operations across teams
                        </ActionList.Description> 
                    </ActionList.Item> 

                    <ActionList.Item> 
                        <ActionList.LeadingVisual>
                            <LayoutIcon />
                        </ActionList.LeadingVisual>
                        Kanban Board
                        <ActionList.Description variant="block">
                            Kanban-style board focused on visual states
                        </ActionList.Description> 
                    </ActionList.Item> 
                </ActionList.Group>

                <ActionList.Divider />

                <ActionList.Item>
                    <ActionList.LeadingVisual>
                        <ActivityLogIcon />
                    </ActionList.LeadingVisual>
                    Save sort and filters to current view
                </ActionList.Item>

                <ActionList.Item>
                    <ActionList.LeadingVisual>
                        <ListBulletIcon />
                    </ActionList.LeadingVisual>
                    Save sort and filters to new view
                </ActionList.Item>
                
                <ActionList.Divider />

                <ActionList.Item variant="info"> 
                    <ActionList.LeadingVisual> 
                        <GearIcon />
                    </ActionList.LeadingVisual>
                    View Settings
                </ActionList.Item>
            
            </ActionList>
        </ActionMenu.Overlay>
    </ActionMenu>
)

const ActionMenuInstance = () => <SimpleActionMenu />

export {
    ActionMenuInstance
}