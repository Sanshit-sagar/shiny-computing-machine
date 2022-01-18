import React, { useState, ChangeEvent, HTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

import { usePrevious } from '../../hooks/usePrevious'
import { useHover } from '@react-aria/interactions'
import { useSpring, a } from '@react-spring/web'
import { useFocusWithin } from 'react-aria'
import useMeasure from 'react-use-measure'

import { 
    PdfFileIcon, 
    DocFileIcon, 
    MdFileIcon, 
    FolderClosedIcon, 
    FolderOpenIcon, 
    FileIcon 
} from './icons'

import {  
    TrashIcon,
    Pencil1Icon,
    ClipboardCopyIcon,
    DotsVerticalIcon
} from '@radix-ui/react-icons'

import {  
    Container,
    TreeFrame, 
    MutableNode,
    ImmutableNode,
    TreeContent,
    TreeHeading,  
    TreeNodeContents,
    toggle
} from './styles'

import { Flex } from '../Flex'

interface TreeNodeProps {
    children?: React.ReactNode; 
    name: string | JSX.Element;
    icon?: React.ReactNode | Element;
    defaultOpen?: boolean; 
    style?: any;
}; 

type ExtendedTreeNodeProps = HTMLAttributes<HTMLDivElement> & TreeNodeProps;

const TreeNodeActions = styled(Flex, {
    fd: 'row', 
    jc: 'flex-end', 
    ai: 'center', 
    gap: '$1'
})

const ActionButton = styled('button', {
    bc: 'transparent',
    color: '$accentTextContrast',
    '&:hover': {
        color: '$accentSolid',
    },
    '&:focus': {
        color: '$accentTextContrast'
    }
});

export const TreeNode = React.memo<ExtendedTreeNodeProps>(({ 
    children, 
    name, 
    style, 
    icon,
    defaultOpen = false 
}: ExtendedTreeNodeProps) => {

    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [ref, { height: viewHeight }] = useMeasure()
    
    let {hoverProps, isHovered} = useHover({
        onHoverStart: (e) => console.log('hovering'),
        onHoverEnd: (e) => console.log('done hovering')
    })

    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [savedValue, setSavedValue] = useState<string | Element>(name)
    const [nodeValue,setNodeValue] = useState<string | Element>(savedValue)

    const [isFocusWithin, setFocusWithin] = useState<boolean>(false)

    let {focusWithinProps} = useFocusWithin({
        onFocusWithin: (e) => console.log('focusing'),
        onBlurWithin: (e) => {
            console.log('blurring')
        
            let prevValue = nodeValue
            setIsEditing(false);
            setSavedValue(nodeValue);
        },
        onFocusWithinChange: (isFocusWithin: boolean) => setFocusWithin(isFocusWithin)
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=> {
        setNodeValue(event.currentTarget.value)
    }

    const { height, opacity, y } = useSpring({
        from: { 
            height: 0, 
            opacity: 0, 
            y: 0 
        },
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
        },
    });
    
    function getExtension(filename: string) {
        let parts = filename.split('.')
        return parts?.length ? parts[parts.length - 1] : '';
    }

   
    const NodeIcon = ({ name, children }) => {
        let ext = getExtension(name)
        const ohpen = () => setOpen(!isOpen)
        const styl = () => {
            return {
                ...toggle,
                opacity: !children ? 0.60 : 1,
                color: 'inherit'
            };
        }

        if(!children) {
            switch(ext) {
                case 'pdf': 
                    return <PdfFileIcon onClick={ohpen} style={{ ...styl() }} />
                case 'doc': 
                    return <DocFileIcon onClick={ohpen} style={{ ...styl() }} />
                case 'md':
                    return <MdFileIcon onClick={ohpen} style={{ ...styl() }} />;
                default:
                    return <FileIcon onClick={ohpen} style={{ ...styl() }} /> 
            }; 
        } else {
            return isOpen 
                ? <FolderOpenIcon onClick={ohpen} style={{ ...styl() }}  /> 
                : <FolderClosedIcon onClick={ohpen} style={{ ...styl() }}  />
        }
    }

    const handleDelete = () => alert('deleting...')
    
    const handleEdit = () => setIsEditing(true);
    const handleSave = () => setIsEditing(false);

    const handleInsert = () => {
        alert('inserting')
    }
    const handleCopy = () => {
        alert('copying...')
    }

    const showOptionsMenu = () => {
        alert('heres the menu')
    }

    return (
      
        <TreeFrame {...hoverProps}>
            <TreeNodeContents {...focusWithinProps}>
                <Flex css={{ fd: 'row', jc: 'flex-start', ai: 'center', gap: '$1', color: '$accentSolid' }}>
                    <NodeIcon 
                        name={name} 
                        children={children} 
                    />

                    <TreeHeading style={style}>
                    {       isEditing 
                        ?   <MutableNode 
                                type='text' 
                                value={nodeValue} 
                                onChange={handleChange} 
                                isFocusWithin={isFocusWithin}
                                isHovered={isHovered}
                                autoComplete='off' 
                                placeholder='enter the value' 
                            /> 
                        :   <ImmutableNode> {nodeValue} </ImmutableNode>
                    }
                    </TreeHeading>
                </Flex>

                <TreeNodeActions css={{ opacity: isHovered ? 1 : 0.05 }}>
                    {!children ? ( <>
                        <ActionButton onClick={handleCopy}> 
                            <ClipboardCopyIcon /> 
                        </ActionButton> 

                        <ActionButton onClick={handleEdit}>
                            <Pencil1Icon /> 
                        </ActionButton> 

                        <ActionButton onClick={handleDelete}> 
                            <TrashIcon /> 
                        </ActionButton>
                    </> ) : (
                        <button onClick={showOptionsMenu}>
                            <DotsVerticalIcon />
                        </button> 
                    )} </TreeNodeActions>
                </TreeNodeContents>

            <TreeContent
                style={{
                    opacity,
                    height: isOpen && previous === isOpen ? 'auto' : height
                }}
            >
                <a.div 
                    ref={ref} 
                    style={{ y }} 
                    children={children} 
                />
            </TreeContent>
        </TreeFrame>
       
    )
}); 
