import Button, { IconButton } from './Button'
import Link from 'next/link'
import Corners from './SharpCorners'
import { PushableButton } from './Ripple'
import { mergeProps } from '@react-aria/utils'

import { Flex } from '@/components/Flex'

import { RocketIcon } from '@radix-ui/react-icons'

export const LinkInstance = () => (
    <Button
        renderContainer={(props) => (
            <Link {...mergeProps(props, { 
                    href: 'https://www.sanshitsagar.com' 
                })} 
            /> 
        )}
    />    
)

export const SharpCornersInstance = (props) => (
    <Button
        renderContainer={(defaultProps) => (
            <Corners.Sharp {...mergeProps(defaultProps, props)} /> 
        )}
    /> 
)

export const RoundedCornersInstance = (props) => (
    <Button
        renderContainer={(defaultProps) => (
            <Corners.Rounded {...mergeProps(defaultProps, props)} /> 
        )}
    /> 
)

export const AlternatingCornersInstance = (props) => (
    <Button
        renderContainer={(defaultProps) => (
            <Corners.Alternating reversed={false} {...mergeProps(defaultProps, props)} /> 
        )}
    /> 
)

export const EllipticalCornersInstance = (props) => (
    <Button
        renderContainer={(defaultProps) => (
            <Corners.Elliptical {...mergeProps(defaultProps, props)} /> 
        )}
    /> 
)

export const PolygonalCornersInstance = (props) => (
    <Button
        renderContainer={(defaultProps) => (
            <Corners.Polygonal {...mergeProps(defaultProps, props)} /> 
        )}
    /> 
)

export const AccessibleButtonInstance = (props) => (
    <Button
        renderContainer={(defaultProps) => (
            <Corners.Elliptical {...mergeProps(defaultProps, props)} /> 
        )}
    />
)

const SendIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-check" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
)
const TrashIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
)

export const ShapeInstances = ({ defaultSize = '0' }) => (
    <Flex css={{ fd: 'row', jc: 'space-evenly', ai: 'center', gap: '$2' }}>

        <IconButton label="Rocket" size={defaultSize}>
            <RocketIcon />
        </IconButton>  

        <Button element={Corners.Elliptical} size={defaultSize}>
            <SendIcon />
            Submit 
        </Button>

        <Button element={Corners.Rounded} size={defaultSize}>
            Cancel
            <TrashIcon />
        </Button>

    </Flex> 
)