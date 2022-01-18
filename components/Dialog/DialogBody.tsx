import React, { ReactChild } from 'react'

import { 
    StyledBody,
    StyledContent,
    StyledActionArea 
} from './styles'
import { ScrollArea } from '@/components/ScrollArea'

import { flattenChildren } from '@/utils/flattenChildren'

import DialogTitle from './DialogTitle'
import DialogSubtitle from './DialogSubtitle'
import DialogCloseButton from './DialogCloseButton'
import DialogAction from './DialogAction'

import { DialogBodyProps } from './types'
import { 
    isDialogTitle, 
    isDialogSubtitle, 
    isDialogAction, 
    useDialogContext 
} from './utils'

const CheckIcon = () => <i className="bi bi-check-lg"></i>
const CrossIcon = () => <i className="bi bi-x-lg"></i>

const DialogBody = ({ children, css, titleProps }: DialogBodyProps) => {
    const { state, variant } = useDialogContext()

    const flattenedChildren: ReactChild[] = flattenChildren(children)
    const filteredTitle = flattenedChildren.filter((child: ReactChild, index: number) => isDialogTitle(child, index))
    const filteredSubtitle = flattenedChildren.filter((child: ReactChild, index: number) => isDialogSubtitle(child, index))
    const filteredActions = flattenedChildren.filter((child: ReactChild, index: number) => isDialogAction(child, index))
    const dialogTitle = filteredTitle?.length ? filteredTitle[0] : null
    const dialogSubtitle = filteredSubtitle?.length ? filteredSubtitle[0] : null
    const filteredContent = flattenedChildren.filter((child, index) => (
        !isDialogTitle(child, index) && !isDialogSubtitle(child, index) && !isDialogAction(child, index)
    ))

    return (
        <StyledContent variant={variant} css={{ ...css }}>
            {dialogTitle && (
                <DialogTitle {...titleProps} css={{ ...dialogTitle.props.css }}>
                    {dialogTitle.props?.children}
                </DialogTitle>
            )}
            {dialogSubtitle && (
                <DialogSubtitle css={{ ...dialogSubtitle.props.css }}>
                    {dialogSubtitle.props?.children}
                </DialogSubtitle>
            )}

            <StyledBody>
                <ScrollArea>
                    {filteredContent}
                </ScrollArea>
            </StyledBody>

            <StyledActionArea>
                <DialogAction variant='cancel' />
                <DialogAction variant='confirm' />
            </StyledActionArea>

            <DialogCloseButton />
        </StyledContent>
    )
} 

DialogBody.displayName = 'DialogBody'
export default DialogBody 