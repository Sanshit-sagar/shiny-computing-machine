import React, { ReactElement } from 'react'
import { StyledTree } from './Styles' 
import { TreeRecursiveProps, TreeProps, TreeStruct } from './interfaces' 

import Folder from './Folder'
import File from './File'

export const TreeRecursive = ({ data }: TreeRecursiveProps) => (
    <> 
        {data.map((datum: TreeStruct) => (
            <> 
                {(datum.type === "file") && (
                    <File name={datum.name} />
                )}

                {(datum.type === "folder") && (
                    <Folder name={datum.name}>
                        <TreeRecursive data={datum.descendents} />
                    </Folder>
                )} 
            </>
        ))} 
    </>
)

export const Tree = ({ element: Component = 'div', data, children, ...props }: TreeProps): ReactElement => (
    <Component {...props}>
        <StyledTree>
            {(data && !children) ? (
                <TreeRecursive data={data} />
            ) : children ? (
                <> {React.cloneElement(children)} </>
            ) : null}
        </StyledTree>
    </Component>
)

Tree.File = File
Tree.Folder = Folder

Tree.displayName = "Tree"
export default Tree