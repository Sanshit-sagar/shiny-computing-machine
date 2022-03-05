import { styled, CSS } from 'stitches.config'


export const avatarVariables: CSS = {
    '--size': '48px',
    '--background-color': '$colors$transparent',
    '--border-radius': '$radii$rounded',
    '--border-width': '2px',
    '--border-style': 'solid',
    '--border-color': '$colors$accentBorder',
    '--shadow-color': 'var(--border-color)',

    '--color-canvas': '$colors$accentBase',
    '--color-avatar-stack-fade': '$colors$accentLine',
    '--color-avatar-stack-fade-more': '$colors$accentBorder',

    '--color-avatar-child-shadow': '-1px -1px -1px var(--shadow-color)'
}

export const StyledAvatar = styled('img', {
    ...avatarVariables,

    display: 'inline-block',
    overflow: 'hidden',
    lineHeight: '$1',
    verticalAlign: 'middle',

    backgroundColor: 'var(--background-color)',

    borderWidth: 'var(--border-width)',
    borderStyle: 'var(--border-style)',
    borderColor: 'var(--border-color)',
    borderRadius: 'var(--border-radius)',
    flexShrink: 0,

    height: 'var(--size)',
    width: 'var(--size)',
    padding: '0em',
    margin: '0em',
  
    '&:hover': {
        borderColor: '$infoSolid'
    },

    variants: {
        squared: {
            true: { '--border-radius': '$radii$squared' } ,
            false: null
        },
        rounded: {
            true: {  '--border-radius': '$radii$rounded' },
            false: null
        }
    },
    defaultVariants: {
        squared: true,
        rounded: false
    }
})
