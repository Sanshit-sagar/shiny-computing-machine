import React from 'react'

import { Card } from '@/components/CCard'
import { DarkMode } from '@/components/DarkMode'
import { Accordion } from '@/components/Accordion'
import { ThemePicker } from '@/components/ThemePicker'

import Menu from './Controllers/Menu'
import Slider from './Controllers/Slider'
import Switch from './Controllers/Switch'
import MultiToggle from './Controllers/MultiToggle'
import { ThemeSelectionMenu } from './Controllers/Menu'
import {
    Field, 
    MenuFieldGroup, 
    SettingsCard 
} from './styles'

import type { ControlItemProps } from './Controllers/index'
import { useInteractions } from '@/hooks/useInteractions'

import { 
    MixIcon,
    SwitchIcon,
    BlendingModeIcon,
    DropdownMenuIcon,
    MixerHorizontalIcon,
} from '@radix-ui/react-icons'

type ControlPanelProps = { 
    controls: ControlItemProps[]; 
    isMember: (val: ControlItemProps) => boolean;
}
type ControlPanelSectionProps = {
    control: ControlItemProps;
    isMember: (val: ControlItemProps) => boolean;
}

export const SettingsPanel = () => (
    <SettingsCard>
        
        <DarkMode />
    </SettingsCard>
)

const isMenuType = (ctrl: ControlItemProps) => ctrl.type === 'menu'
const isSwitchType = (ctrl: ControlItemProps) => ctrl.type === 'switch'
const isSliderType = (ctrl: ControlItemProps) => ctrl.type === 'slider' 
const isMToggleType = (ctrl: ControlItemProps) => ctrl.type === 'multi-toggle'

const ControlItemHandler = ({ control }: ControlPanelSectionProps) => {
    if(control.type === 'menu') 
        return <Menu {...control} /> 
    if(control.type === 'switch') 
        return <Switch {...control} />
    if(control.type === 'slider') 
        return <Slider {...control} label={control.name}  />
    if(control.type === 'multi-toggle') 
        return <MultiToggle {...control} /> 
    return null
}

export const ControlPanelSection = ({ controls, isMember }: ControlPanelProps) => {
    const { interactionProps, isHovered, isFocused, isPressed } = useInteractions({ 
        isDisabled: false
    }) 

    return (
        <MenuFieldGroup>
            {controls
                .filter((ctrl) => isMember(ctrl))
                .map((control: ControlItemProps, index: number) => (
                    <Field 
                        {...interactionProps}
                        key={`field-item-${index}`}
                        name={control.type !== 'slider' ? control.name : ''} 
                        description={control.description}
                        icon={control.icon || <MixIcon />}
                        active={isHovered || isFocused || isPressed}
                    >       
                        <ControlItemHandler 
                            control={control} 
                            isMember={isMember} 
                        />
                    </Field>
                )
            )}
        </MenuFieldGroup>
    )
}

export const ControlPanel = ({ controls, state }) => {
    if(!controls?.length) return null

    const themeAccordionPanel = {
        icon: <BlendingModeIcon />,
        title: 'Themeing',
        content: <ThemePicker />
    }

    const switchAccordionPanel = {
        icon: <SwitchIcon />,
        title: 'Switchable',
        content: <ControlPanelSection controls={controls} isMember={isSwitchType} />
    }

    const sliderAccordionPanel = {
        icon: <MixerHorizontalIcon />,
        title: 'Adjustable',
        content: <ControlPanelSection controls={controls} isMember={isSliderType} />
    }

    const multiToggleAccordionPanel = {
        icon: <MixIcon />,
        title: 'Toggleable',
        content: <ControlPanelSection controls={controls} isMember={isMToggleType} />
    }
    
    const menuToggleAccordionPanel = {
        icon: <DropdownMenuIcon />,
        title: 'Selectable',
        content: <ControlPanelSection controls={controls} isMember={isMenuType} />
    }

    const accordionPanelItems = [{
        ...themeAccordionPanel, 
    }, {
        ...switchAccordionPanel,
    }, {
        ...sliderAccordionPanel,
    }, {
        ...menuToggleAccordionPanel, 
    }, {
        ...multiToggleAccordionPanel
    }]

    return (
        <Card css={{ width: '350px', br: '$2', borderColor: 'transparent', p: 0 }}>
            <Accordion items={accordionPanelItems} />
        </Card>
    )
}