import React from 'react'
import { ExampleBase } from '@/components/ExampleBase'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Breadcrumbs from './Breadcrumbs'

const noop = () => {}

export const BreadcrumbsInstance = () => (
    <Breadcrumbs.Root>
        <Breadcrumbs.Item onPress={noop}> Folder 1 </Breadcrumbs.Item>
        <Breadcrumbs.Item onPress={noop}> Folder 2 </Breadcrumbs.Item>
        <Breadcrumbs.Item> Folder 3 </Breadcrumbs.Item>
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


