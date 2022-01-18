import { ExampleBase } from '@/components/ExampleBase'
import PaletteGenerator from './Widgets/PaletteGenerator'
import { FontStyleIcon } from '@radix-ui/react-icons'

const ExampleMDXWidgets = () => {

    return (
        <ExampleBase
            heading={'MDX Widgets'}
            description={''}
            component={<PaletteGenerator />}
            icon={<FontStyleIcon />}
            controls={[]}
        />
    )
}

export default ExampleMDXWidgets