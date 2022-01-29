import React, { useState } from 'react'
import {
    ToggleableMenu,
    ToggleableMenuViaComponentInjection,
    ToggleableMenuViaHOC
} from './ToggleableMenu' 

import { Flex } from '@/components/Flex'
import { Button } from '@/components/Buttons'

export const ToggleableInstance = () => {
    const [showContents, setShowContents] = useState<boolean>(false)

    const toggleContents = () => setShowContents((prev) => !prev)

    return(
        <Flex css={{ fd: 'column', jc: 'flex-start', ai: 'stretch', gap: '$3' }}>
            
            <Button onPress={toggleContents} code="0100" variant="primary"> 
                Show All 
            </Button>
            
            <ToggleableMenu title="First Menu" show={showContents}>
              <p>Some content</p>
            </ToggleableMenu>
            <ToggleableMenuViaComponentInjection title="Second Menu" show={showContents}>
              <p>Another content</p>
            </ToggleableMenuViaComponentInjection>
            <ToggleableMenuViaHOC title="Third Menu" show={showContents}>
              <p>More content</p>
            </ToggleableMenuViaHOC>
        </Flex>
    )
}
 