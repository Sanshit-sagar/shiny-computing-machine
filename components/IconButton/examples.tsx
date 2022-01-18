import StateFactory from '@/utils/StateFactory'
import { ExampleBase } from '@/components/ExampleBase'
import { IconButton, IconButtonProps } from '@/components/IconButton'
import { PushableButton } from './PushableButton'

import { ButtonIcon } from '@radix-ui/react-icons'

const init = () => {
    const initIconButtonState: IconButtonProps = {
        copied: false,
        content: "This is the copied string",
        onChange: (checked: boolean) => {}
    }
    return initIconButtonState
}

const IconButtonInstance = (props: IconButtonProps) =>  <IconButton {...props} /> 
const PushableButtonInstance = () => <PushableButton> Auto </PushableButton>

const ExampleIconButton = () => {
    const { state, update } = StateFactory<IconButtonProps>(init)

    const mutableState = {
        ...state,
        onChange: (copied: boolean) => update('copied', copied)
    }

    return (
        <ExampleBase
            heading={'Icon Button'}
            description={''}
            icon={<ButtonIcon />}
            component={
                <>
                    <IconButtonInstance {...mutableState} />
                    <PushableButtonInstance />
                </>
            }
            controls={[]}
            state={state}
        />
    )
}

export default ExampleIconButton