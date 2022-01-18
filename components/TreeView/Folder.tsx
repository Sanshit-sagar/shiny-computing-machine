import { useState } from 'react' 
import { FolderProps } from './interfaces'
import { StyledFolder, Collapsible, StyledFolderName } from './Styles'

import FILE_ICONS from './Icons'


const TreeNodeFolder = ({ name, children }: FolderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleToggle = (event) => {
        event.preventDefault()
        setIsOpen(!isOpen) 
    }

    return (
        <StyledFolder open={isOpen}>
            <div className="folder-label" onClick={handleToggle}>
                {FILE_ICONS['~']}
                <StyledFolderName> {name} </StyledFolderName>
            </div>

            <Collapsible open={isOpen}> {children} </Collapsible>
        </StyledFolder>
    )
}

export default TreeNodeFolder