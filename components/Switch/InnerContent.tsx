
import { forwardRef, ReactNode, ElementRef, ElementType, ComponentPropsWithoutRef } from 'react'
import { InnerContent as StyledInnerContent, InnerContentWrapper } from './styles'
import { ToggleState } from './types'
import { CSS } from 'stitches.config'

const DEFAULT_TAG = 'div'

interface InnerContentOwnProps extends Required<Pick<ToggleState, 'isSelected'>> {
    children: ReactNode;
    css?: CSS;
    element: ElementType<any>;
    isChecked: boolean; 
}

type InnerContentElement = ElementRef<typeof DEFAULT_TAG>
type InnerContentProps = Omit<
    ComponentPropsWithoutRef<typeof DEFAULT_TAG>,
    keyof InnerContentOwnProps
> & InnerContentOwnProps

const InnerContent = forwardRef<InnerContentElement, InnerContentProps>(({
    children,
    ...props
}, ref) => {

    return (
        <InnerContentWrapper {...props} ref={ref}>
            <StyledInnerContent {...props}> 
                {children} 
            </StyledInnerContent>
        </InnerContentWrapper>
    )
})

InnerContent.displayName = 'InnerContent'
export default InnerContent