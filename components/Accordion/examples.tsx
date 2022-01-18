
import { ExampleBase } from '@/components/ExampleBase'
import { SliderIcon } from '@radix-ui/react-icons'
import { accordionData2 } from './data'

import { 
    RegularControlledAccorion,
    PolymorphicControlledAccordion 
} from './AccordionVariants'

export const AccordionInstance = () => <RegularControlledAccorion items={accordionData2} />
const RCAccordionInstance = () => <RegularControlledAccorion items={accordionData2} />
const PCAccordionInstance = () => <PolymorphicControlledAccordion items={accordionData2} />

const ExampleAccordion = () => {

    return (
        <ExampleBase
            heading={'Accordion'}
            description={''}
            icon={<SliderIcon />}
            component={<RCAccordionInstance />}
            controls={[]}
        />
    );
}

export default ExampleAccordion