import { MultiToggleProps, ToggleItem, MultiToggle as MultiToggleController } from '@/components/MultiToggle'

export interface MultiToggleFieldProps extends MultiToggleProps {
    type: 'multi-toggle';
}


const MultiToggle = (props: MultiToggleFieldProps) => {

    return <MultiToggleController {...props}  />
}


export default MultiToggle