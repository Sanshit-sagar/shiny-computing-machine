
import Overlay from '@/components/Popover'
import Paragraph from '@/components/Text/Text'
import { Button } from '@/components/Buttons/DefaultButton'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'


export const PopoverWithCard = () => (
    <Overlay.Root
        placement="left"
        offset={5}
        crossOffset={20}
        isDismissable={false}
        isKeyboardDismissDisabled={false}
        shouldFlip={false}
        shouldUpdatePosition={true}
    >
        <Overlay.Trigger>
            <HamburgerMenuIcon /> 
        </Overlay.Trigger>  

        <Overlay.Dialog>
            <Overlay.Heading> gandhis flip flop </Overlay.Heading>
            <Overlay.Description> doo doo </Overlay.Description> 
            <Paragraph css={{ color: '$white', p: '$2' }}> 
                Eiusmod deserunt sunt sint incididunt. 
                Incididunt magna est veniam irure enim velit consequat magna nulla nostrud. 
                Labore magna voluptate ullamco elit quis cillum ea veniam esse.
            </Paragraph>
        </Overlay.Dialog>
    </Overlay.Root>
)