import React, { useState, ReactNode, ReactElement, ElementType } from 'react'
import { VariantProps } from 'stitches.config'
import { StyledCodeArea, StyledCodeText } from './styles'
import { flattenChildren } from '@/utils/flattenChildren'
import { ClipboardCopyIcon } from '@/components/Icons'

type Stringish = string | ReactNode;

type CodeInChildren  = { children: Stringish; }
type CodeInProps = { code: string; }
type CodeInChildrenOrProps = CodeInProps | CodeInChildren
type InlineCodeVariants = VariantProps<typeof StyledCodeText>

type InlineCodeOptions = {
    language?: 'js' | 'ts' | 'java';
    copyable?: boolean;
    element?: ElementType<any>;
}

export type InlineCodeProps = InlineCodeOptions & CodeInChildrenOrProps & InlineCodeVariants

export const InlineCode = ({
    language = 'js',
    element: Component = 'code',
    copyable = true,
    code,
    children,
    ...props
}: InlineCodeProps) => {
    const [copied, setCopied] = useState<boolean>(false)
    const codeSegments = children ? flattenChildren(children) : []

    const handleCopy = (_event) => {
        if(copyable && !copied) {
            setCopied(true)
        }
    }

    return (
        <StyledCodeArea copied={copied}>
         
            {(code || typeof children === 'string') ? (

                <StyledCodeText copied={copied}> {code} </StyledCodeText> 
                
            ) : children ? (

                <> {codeSegments.map((child: ReactElement, index: number) => {
                        <StyledCodeText key={`code-segment-${index}`} copied={copied}> 
                            {child} 
                        </StyledCodeText>
                })} </>

            ) : (
                null
            )}
    

            <button onClick={handleCopy}> 
                <ClipboardCopyIcon /> 
            </button>
        </StyledCodeArea>
    )
}