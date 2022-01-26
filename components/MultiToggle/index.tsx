import React from 'react'
import { 
    Switch, 
    SwitchLabel, 
    SwitchRadio, 
    SwitchSelection 
} from './styles'
import { 
    IToggleItem, 
    IMultiToggleProps,
    ConcealedRadioProps, 
    ClickableLabelProps
} from './types'
// import { useInteractions } from '@/hooks/useInteractions'

export type ToggleItem = IToggleItem
export type MultiToggleProps = IMultiToggleProps

const titleCase = (str: string): string => (
    str.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
);

const ClickableLabel = ({ id, title, checked, onChange, icon = null }: ClickableLabelProps) => (
    <SwitchLabel 
        className={id}
        defaultChecked={checked}
        onClick={() => onChange(title)} 
    >
        {icon || titleCase(title)}
    </SwitchLabel>
)

const ConcealedRadio = ({ value, selection }: ConcealedRadioProps) => (
    <SwitchRadio 
        type="radio" 
        name="switch" 
        defaultChecked={selection === value} 
    />
)


export const MultiToggle = ({ selection, onChange, values }: MultiToggleProps) => {
   
    const selectionStyle = () => {
        return {
            left: `${values.map((v) => v.value).indexOf(selection) / values.length * 100}%`,
            willChange: 'background, content, opacity',
            transition: 'all 0.4s ease-in-out',
            d: 'inline-flex',
            jc: 'center',
            ai: 'center',
        };
    }

    const filteredSelection = values[values.map((v) => v.value).indexOf(selection)]
    const selectedIcon = filteredSelection.icon
    const selectedText = filteredSelection.value
    const selectedContent = selectedIcon ? selectedIcon : selectedText

    return (
        <Switch>
            {values.map((val: ToggleItem, index: number) => (
                <span key={index}>
                    <ConcealedRadio 
                        value={val.value} 
                        selection={selection} 
                    />
                    <ClickableLabel 
                        id={`item-${index}`} 
                        title={val.value} 
                        icon={val.icon}
                        onChange={onChange} 
                        checked={selection === val.value}
                    />
                    <SwitchSelection css={selectionStyle()}>
                        {selectedContent}
                    </SwitchSelection>
                </span>
            ))}
            
        </Switch>
    );
}