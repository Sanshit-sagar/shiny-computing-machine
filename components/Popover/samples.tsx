
import Overlay from './Overlay'
import CalendarInstance from '@/components/Calendar/dynExamples'
import { OverlayProps } from './interfaces'
import  Paragraph from '@/components/Text/Text'
import { Card } from '@/components/Card'
import PButton from '@/components/Button'
import { BackpackIcon } from '@radix-ui/react-icons'

export const PopoverWithCard = () => (
    <Overlay.Root
        placement="top"
        offset={5}
        crossOffset={0}
        isDismissable={true}
        isKeyboardDismissDisabled={false}
        shouldFlip={false}
        shouldUpdatePosition={true}
    >
        <Overlay.Trigger> where's the lamb sauce </Overlay.Trigger>
        <Overlay.Dialog element={Card.Wrapper}>
            <Overlay.Heading element={Card.Header}> gandhis flip flop </Overlay.Heading>
            <Overlay.Description> doo doo </Overlay.Description> 
            <Paragraph css={{ color: '$white', p: '$2' }}> 
                Eiusmod deserunt sunt sint incididunt. 
                Incididunt magna est veniam irure enim velit consequat magna nulla nostrud. 
                Labore magna voluptate ullamco elit quis cillum ea veniam esse.
            </Paragraph>
        </Overlay.Dialog>
    </Overlay.Root>
)

export const PopoverWithCalendar = () => {
    const state = {
        isDisabled: false,
        isReadOnly: false,
        autoFocus: false,
        padding: '9'
    }

    const overlayState = {
        title: 'Select a range',
        placement: 'bottom end',
        offset: 10,
        crossOffset: 0,
        isDismissable: true,
        isKeyboardDismissDisabled: false,
        shouldCloseOnBlur: false,
        shouldFlip: true, 
        shouldUpdatePosition: true
    } as OverlayProps

    return (
        <Overlay.Root {...overlayState}>
            <Overlay.Trigger> 
                hihihihi
                <BackpackIcon /> 
            </Overlay.Trigger>
            <Overlay.Dialog border={true} background={true} padding={true}>
                {/* <Overlay.Heading css={{ color: '$successSolid' }}>  */}
                    {/* Select your dates  */}
                {/* </Overlay.Heading>  */}
                {/* <Overlay.Description>  */}
                    {/* Choose your start and end dates  */}
                {/* </Overlay.Description> */}
                <CalendarInstance useRange={true} state={state} />
            </Overlay.Dialog>
        </Overlay.Root> 
    )
}       
