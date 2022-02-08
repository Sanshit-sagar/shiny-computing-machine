import React, { ReactNode } from 'react'

import {
    Tags,
    TagListWrapper,
    TagInputGroup,
    TagInputField,
    TagInputLeftSlot,
    TagInputRightSlot,
    TagTitle,
    Container
} from './styles'

import { 
    Cross2Icon, 
    Pencil1Icon,
    MagnifyingGlassIcon
} from '@radix-ui/react-icons'

import { Tag } from '../Tag'
import { TagState } from '../Tag/interfaces'

import { icons } from './constants'
import { ScrollArea } from '@/components/ScrollArea'

interface TagItemProps { 
    icon: ReactNode; 
    children: ReactNode; 
    handleDelete: () => void; 
}

const TagItem = ({ icon, children, handleDelete }: TagItemProps) => {
    const initTagState: TagState = {
        isClickable: true,
        isDeletable: true,
        isEditable: false,
        isDisabled: false,
        isLoading: false,
        size: 'sm',
        leftIcon: icon,
        rightIcon: undefined,
        children: 'Sample Tag',
        handleDelete: () => handleDelete()
    };

    return (
        <Tag {...initTagState}> 
            {children} 
        </Tag>
    ); 
}


export const TagInput = ({ tags }) => {
    const [tagData, setTagData] = React.useState(tags)

    const removeTagData = (toDel: number) => {
        setTagData([...tagData.filter((_, index) => index !== toDel)]);
    };

    const addTagData = (event) => {
        if (event.target.value !== '') {
            setTagData([...tagData, event.target.value]);
            event.target.value = '';
        }
    }

    const clearAllData = (event) => {
        setTagData(['oxygen']) 
    }

    return (
        <Container>
            <TagListWrapper>
                <ScrollArea>
                    <Tags>
                        {tagData.map((tag: string, index: number) => (
                            <TagItem 
                                key={index} 
                                icon={icons[index % icons.length]}
                                handleDelete={() => removeTagData(index)}
                            >
                                <TagTitle>{tag}</TagTitle>
                            </TagItem>
                        ))}
                    </Tags>
                </ScrollArea>
            </TagListWrapper>

            <TagInputGroup>
                <TagInputLeftSlot>
                    <MagnifyingGlassIcon />
                </TagInputLeftSlot>

                <TagInputField
                    type="text"
                    onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
                    placeholder="Press enter to add a tag"
                />
            
                 <TagInputRightSlot  onClick={clearAllData}>
                    <Cross2Icon /> 
                </TagInputRightSlot>
            </TagInputGroup>
        </Container>
    )
}

