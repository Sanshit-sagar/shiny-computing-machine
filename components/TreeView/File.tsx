import { FileProps, ValidExtensions } from './interfaces'
import { StyledFile, StyledFileName } from './Styles'
import FILE_ICONS from './Icons'


const TreeNodeFile = ({ name }: FileProps) => {
    const ext: ValidExtensions | "$" = (name.split(".")[1] as ValidExtensions) || '$'

    return (
        <StyledFile> 
            <StyledFileName> {FILE_ICONS[ext]} {name} </StyledFileName> 
        </StyledFile>
    )
}

export default TreeNodeFile