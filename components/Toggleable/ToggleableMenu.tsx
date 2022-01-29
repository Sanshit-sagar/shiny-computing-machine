import React, { ReactNode } from 'react'

import { Toggleable, ToggleableComponentProps } from './Toggleable'
import { withToggleable } from './withToggleable'

import { Flex } from '@/components/Flex'
import { Text } from '@/components/Text'
import { Button } from '@/components/Buttons'

type MenuItemProps = { 
    title: string;
    children?: ReactNode; // included sicne not using React.FC / SFC which directly add it 
}

const MenuItem = ({ title, toggle, show, children }: MenuItemProps & ToggleableComponentProps) => (
    <Flex>
        <Flex onClick={toggle}>
            <h2> {title} </h2>
        </Flex>
        {show ? children : null}
    </Flex>
)

type ToggleableMenuProps = MenuItemProps & { show?: boolean }
const ToggleableMenu = ({ title, children, show: showContent }: ToggleableMenuProps) => (
    <Toggleable show={showContent}>
        {({ show, toggle }) => (
            <MenuItem title={title} toggle={toggle} show={show}>
                {children}
            </MenuItem>
        )}
    </Toggleable>
)

const ToggleableWithTitle = Toggleable.ofType<MenuItemProps>()
const ToggleableMenuViaComponentInjection = ({ title, children, show: showContent }: ToggleableMenuProps) => (
    <ToggleableWithTitle component={MenuItem} props={{ title }} show={showContent}>
        {children}
    </ToggleableWithTitle>
)

const ToggleableMenuViaHOC = withToggleable(MenuItem)
export {
    ToggleableMenu,
    ToggleableMenuViaComponentInjection,
    ToggleableMenuViaHOC
}