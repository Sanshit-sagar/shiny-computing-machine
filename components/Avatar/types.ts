
import type { Scope } from '@/hooks/createContextScope'
import type { ImageLoadingStatusType } from '@/hooks/useImageLoadingStatus'

import { VariantProps } from 'stitches.config'
import { StyledAvatarRoot, StyledAvatarFallback } from './styles'

export type AvatarSize = VariantProps<typeof StyledAvatarRoot>['size']
export type FallbackSize = VariantProps<typeof StyledAvatarFallback>['size']

export type IAvatarContext = {
    imageLoadingStatus: ImageLoadingStatusType;
    onImageLoadingStatusChange: (status: ImageLoadingStatusType) => void;
    size: AvatarSize;
}

export type ScopedProps<P> = P &  { __scopeAvatar?: Scope; }