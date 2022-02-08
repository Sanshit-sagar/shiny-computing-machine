import React from 'react'
import { ExampleBase } from '@/components/ExampleBase'
import { ChevronRightIcon } from '@radix-ui/react-icons'

import Breadcrumbs from './Breadcrumbs'
import { FolderOpenIcon, FolderIcon } from '@/components/Icons'

const noop = () => {}

export const BreadcrumbsInstance = () => (
    <Breadcrumbs.Root>

        <Breadcrumbs.Item onPress={noop}> 
            <FolderIcon /> Folder 1 
        </Breadcrumbs.Item>
        <Breadcrumbs.Item onPress={noop}> 
            <FolderIcon /> Folder 2 
        </Breadcrumbs.Item>
        <Breadcrumbs.Item> 
            <FolderOpenIcon /> Folder 3 
        </Breadcrumbs.Item>

    </Breadcrumbs.Root>
)

const ExampleBreadcrumbs = () => (
    <ExampleBase
        heading={'Breadcrumbs'}
        description={'Breadcrumb description'}
        icon={<ChevronRightIcon />}
        component={<BreadcrumbsInstance />}
        controls={[]}
    /> 
)

export default ExampleBreadcrumbs


