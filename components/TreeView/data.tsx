import type { TreeStruct } from './interfaces'


export const structure: TreeStruct[] = [
    {
      type: "folder",
      name: "src",
      descendents: [
        {
          type: "folder",
          name: "Components",
          descendents: [
            { type: "file", name: "Modal.js" },
            { type: "file", name: "Modal.css" }
          ]
        },
        { type: "file", name: "index.js" },
        { type: "file", name: "index.html" }
      ]
    },
    { type: "file", name: "package.json" }
];

/**
export const Projects = () => (
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
)

export const Reports = () => (
    <Tree.Folder name='Reports'>
        <Tree.Folder name="Report1">
            <Tree.File name="Report-1A.md" />
            <Tree.File name="Report-1B.md" />
            <Tree.File name="Report-1C.md" />
        </Tree.Folder>
        <Tree.Folder name="Report2.folder"  />
        <Tree.Folder name="Report3.folder"  />
    </Tree.Folder>
)

export const ProjectsAndReports = () => (
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
*/