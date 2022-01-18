import { 
    BadgeIcon, 
    LockClosedIcon,
    BlendingModeIcon
} from '@radix-ui/react-icons'

import { Badge } from './index'
import { ExampleBase } from  '../ExampleBase'

import type { BadgeVariants, BadgeProps } from './styles'
import StateFactory from '../../utils/StateFactory'

import { gradientsArr } from './data'
import type { Gradients } from './data'

const init = (): BadgeVariants => {
    let initBadgeProps: BadgeVariants = {
        gradient: 'cheer-up-emo-kid',
        radius: '5'
    };
    return initBadgeProps
}

const BadgeInstance = ({ props }: { props: BadgeVariants }) => (
    <Badge {...props}>
        Approved {props.gradient}
    </Badge>

); 

const camelize = (str: string) => (
    str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
);
type GradientItem = { id: Gradients, label: string, textValue: Gradients, description?: string };

const gradientItems: GradientItem[] = gradientsArr.map((gradientId: Gradients) => {
    return {
        id: gradientId,
        label: camelize(gradientId),
        textValue: gradientId,
        description: `Linear gradient: ${gradientId}`
    }
});

// [
//     { id: 'nelson', label: 'Nelson', textValue: 'nelson', description: 'theme1' },
//     { id: 'cheer-up-emo-kid', label: 'Cheer up emo kid', textValue: 'cheer-up-emo-kid', description: 'theme2' },
//     { id: 'ibiza-sunset', label: 'Ibiz Sunset', textValue: 'ibiza-sunset', description: 'theme3' },
//     { id: 'default', label: 'Default', textValue: 'default', description: 'theme4' },
// ];

const intentSections = [{
    title: 'Intent',
    index: 0,
    items: [...gradientItems.map((intentItem) => {
        return {
            id: intentItem.id,
            label: intentItem.label,
            description: intentItem.description,
            textValue: intentItem.textValue,
            avatar: 'https://unsplash.com/photos/qjs2R1lMMcw'
        }
    })]
}];


const ExampleBadge = () => {
    const { state, update } = StateFactory<BadgeVariants>(init)

    const controls = [{
        icon: <LockClosedIcon />,
        type: 'switch', 
        id: 'isDisabled', 
        value: state.isDisabled, 
        onChange: (val: boolean) => update('isDisabled', val)
    }, { 
        type: 'select',
        id: 'intentSelector',
        label: 'Intent',
        icon: <BlendingModeIcon />,
        items: [...intentSections],
        description: '',
        errorMessage: '',
        isLoading: false,
        isDisabled: false,
        defaultOpen: false,
        disallowEmptySelection: true,
        focusStrategy: 'first',
        selectedKey: intentSections[0].items[0].label,
        onSelectionChange:  (selection) => update('gradient', gradientItems[selection].id)
    }];

    return (
        <ExampleBase
            icon={<BadgeIcon />}
            heading={'Badge'}
            description={'Badge description here'}
            component={<BadgeInstance props={state} />}
            controls={controls}
        /> 
    )
}

export default ExampleBadge

