import React, { useState } from 'react'
import { Card } from '@/components/Card' 
import { Flex } from '@/components/Flex'
import { TooltipTrigger } from '@/components/Tooltip'

import { AnimationCardContent } from '@/components/MDXComponents/Widgets/Components'
import { ThemeColor, ButtonWrapper } from './styles'

import { useAtom } from 'jotai'
import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { 
    themesAtom, 
    assignThemeAtom, 
    activeThemeIndexAtom 
} from '@/atoms/darkMode'
import { lightThemes, darkThemes } from '@/themes/classes'

const setVariableToGlobalStyles = (variable: string, value: string) => {
    document.documentElement.style.setProperty(variable, value)
}

export const ThemePicker = () => {
    // const allThemes = useAtomValue(themesAtom)
    const retheme = useUpdateAtom(assignThemeAtom)

    const handleThemeChange = (index: number) => retheme(index)
    

    return (
        <Card.Body css={{ height: 'fit-content', p: 0, m: 0, display: 'flex', fd: 'column', jc: 'center', border: 'none' }}>
            <AnimationCardContent>
                <Flex css={{ width: '100%', maxWidth: '430px', fd: 'row', jc: 'flex-start', ai: 'center', gap: '$3', fw: 'wrap', }}>
                    {lightThemes.map((themeObj, index: number) => (
                        <ButtonWrapper key={`theme-indexed-${index}`}> 
                            <TooltipTrigger delay={0} content={`Theme name is: ${themeObj.color}`}>
                                <ThemeColor
                                    css={{ 
                                        backgroundColor: lightThemes[index].base
                                    }} 
                                    onClick={(_event) => handleThemeChange(index)}
                                />
                            </TooltipTrigger>
                        </ButtonWrapper>
                    ))}
                </Flex>
            </AnimationCardContent>
        </Card.Body>
    )
}