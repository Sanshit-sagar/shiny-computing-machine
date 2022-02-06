
import type { Scope } from '@/hooks/createContextScope'
import type { ImageLoadingStatusType } from '@/hooks/useImageLoadingStatus'

import { VariantProps } from 'stitches.config'
import { 
    StyledAvatarRoot, 
    StyledAvatarFallback,
    StyledInnerStatusDot,
    StyledOuterStatusDot
} from './styles'

export type AvatarSize = VariantProps<typeof StyledAvatarRoot>['size']
export type FallbackSize = VariantProps<typeof StyledAvatarFallback>['size']
export type StatusDotStatus = VariantProps<typeof StyledInnerStatusDot>['status']
export type AvatarShape = VariantProps<typeof StyledAvatarRoot>['shape']

export type IAvatarContext = {
    imageLoadingStatus: ImageLoadingStatusType;
    onImageLoadingStatusChange: (status: ImageLoadingStatusType) => void;
    size: AvatarSize;
    shape: AvatarShape;
}

export type ScopedProps<P> = P &  { __scopeAvatar?: Scope; }