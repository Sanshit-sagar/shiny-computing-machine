import { ExampleBase } from '@/components/ExampleBase'
import { FileIcon } from '@radix-ui/react-icons' 
import { structure } from './data'
import  Tree from './Tree'



export const ProjectsAndReports = () => {
    return (
        <Tree>
            <Tree.Folder name='Projects'>
                <Tree.File name='Project-1.doc' />
                <Tree.File name='Project-2.doc' />
                <Tree.Folder name='Project-3'>
                    <Tree.File name="Project-3A.js"  />
                    <Tree.File name="Project-3B.js"  />
                    <Tree.File name="Project-3C.js"  />
                </Tree.Folder>
                <Tree.File name="Project-4.doc"  />
                <Tree.Folder name="Project-5">
                    <Tree.File name="Project-5A.pdf"  />
                    <Tree.File name="Project-5B.pdf"  />
                    <Tree.File name="Project-5C.pdf"  />
                    <Tree.File name="Project-5D.pdf"  />
                    <Tree.File name="Project-5E.pdf"  />
                    <Tree.File name="Project-5F.pdf"  />
                </Tree.Folder>
            </Tree.Folder>
        </Tree>
    )
}

export const TreeInstance = () => <ProjectsAndReports />

const ExampleTree = () => {
    return (
        <ExampleBase
            heading={'Tree'}
            description={''}
            icon={<FileIcon />}
            component={<TreeInstance />}
            controls={[]}
        />
    )
}

export default ExampleTree