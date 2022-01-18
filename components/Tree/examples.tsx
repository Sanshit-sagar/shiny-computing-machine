import React from 'react'
import { styled } from '../../stitches.config'

import { TreeNode } from './index'
import { ScrollArea } from '../ScrollArea'
import { ExampleBase } from '../ExampleBase'

import { 
    ActivityLogIcon 
} from '@radix-ui/react-icons'

const OuterContainer = styled('div', {
    height: 'fit-content',
    maxHeight: '500px',
    width: 'fit-content',
    minWidth: '600px',
    padding: 0,
    margin: 0,
    border: '2px solid $accentBorder',
    br: '$2',
    bc: '$accentBg'
})

const InnerContainer = styled('div', {
    width: '400px', 
    height: '100%', 
    fd: 'column', 
    jc: 'space-between', 
    ai: 'stretch', 
    bc: 'transparent',
})


const Projects = () => (
    <TreeNode name='Projects'>
        <TreeNode name='Project-1.doc' />
        <TreeNode name='Project-2.doc' />
        <TreeNode name='Project-3'>
            <TreeNode name="Project-3A.doc"  />
            <TreeNode name="Project-3B.doc"  />
            <TreeNode name="Project-3C.doc"  />
        </TreeNode>
        <TreeNode name="Project-4.doc"  />
        <TreeNode name="Project-5">
            <TreeNode name="Project-5A.pdf"  />
            <TreeNode name="Project-5B.pdf"  />
            <TreeNode name="Project-5C.pdf"  />
            <TreeNode name="Project-5D.pdf"  />
            <TreeNode name="Project-5E.pdf"  />
            <TreeNode name="Project-5F.pdf"  />
        </TreeNode>
    </TreeNode>
);

const Reports = () => (
    <TreeNode name='Reports'>
        <TreeNode name="Report1">
            <TreeNode name="Report-1A.md" />
            <TreeNode name="Report-1B.md" />
            <TreeNode name="Report-1C.md" />
        </TreeNode>
        <TreeNode name="Report2"  />
        <TreeNode name="Report3"  />
    </TreeNode>
)

const ExampleTreeBody = () => (
    <TreeNode name={'main'} defaultOpen>
        <Projects />
        <Reports />
    </TreeNode>
);

const ExampleTree = () => (
    <OuterContainer>
        <ScrollArea>
            <InnerContainer>
                <ExampleTreeBody /> 
            </InnerContainer>
        </ScrollArea>
    </OuterContainer>
)

const ExampleTreeView = () => (
    <ExampleBase
        icon={<ActivityLogIcon />}
        heading={'Tree'}
        description={'Tree view described here'}
        component={<ExampleTree />}
        controls={[]}
    />
);


export default ExampleTreeView