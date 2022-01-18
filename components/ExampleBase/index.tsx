import React, { useEffect } from 'react' 
import { useAtomValue, useUpdateAtom } from 'jotai/utils' 

import {
    Header,
    Showcase,
    Container
} from './styles'

import { ExampleContainerProps } from './interfaces'

import { activeThemeClassAtom } from '@/atoms/darkMode'
import { activePageAtom, updateActivePageAtom } from '@/atoms/globalState'

import { PropsList } from '@/components/PropsList'
import { ControlPanel, SettingsPanel } from '@/components/ControlPanel'


export const AnimatedIconAndHeader = () => {
    const head = useAtomValue(activePageAtom)

    return (
        <Header> 
            <> {head.icon} </> 
            <> {head.heading} </>
        </Header>
    ); 
}

export const ExampleBase = ({ 
    icon, 
    heading, 
    description, 
    component, 
    controls = [],
    state = {}
}: ExampleContainerProps) => {

    const theme = useAtomValue(activeThemeClassAtom)
    const update = useUpdateAtom(updateActivePageAtom)

    useEffect(() => {
        update({ icon, heading })
    }, [icon, heading])

    return (
        <Container className={theme}>
            <Showcase
                ceiling={<AnimatedIconAndHeader />}
                content={component}
                floor={<> </>}
                corner={<SettingsPanel />}
                lwall={<PropsList {...state} />}
                rwall={<ControlPanel controls={controls} state={state} />}
            />
        </Container>
    )
}