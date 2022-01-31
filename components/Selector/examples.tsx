import Select from '@/components/Selector'

export const SelectorInstance = () => (
    <Select.Root value="1" onChange={(value) => alert(`selected ${value}`)}>
        <Select.Option value="1"> Option 1 </Select.Option>
        <Select.Option value="2"> Option 2 </Select.Option>
    </Select.Root>
)