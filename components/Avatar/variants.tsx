import { Fragment } from 'react' 
import { styled, CSS } from 'stitches.config' 

const cssVariables: CSS = {
    '--size': '100px',
    '--border-width': '1.25px',
    '--border-radius': '50%',
    '--border-style': 'solid',
}

const StyledAvatar = styled('div', {
    ...cssVariables,

    position: 'relative',
    height: 'var(--size)',
    width: 'var(--size)',

    margin: '1rem auto',

    bc: 'transparent',
    borderWidth: '1.25px',
    borderColor: 'transparent',
    borderRadius: '50%',
    padding: 0,

    '&::after': {
        animation: 'background-color 300ms ease',
        content: "",
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100.5%',
        width: '100.5%',
        borderRadius: '50%',
        border: '2.25px solid $accentText',
        opacity: 1,
        clipPath: `url("#my-clip-path")`
    },

    '& *': {
        boxSizing: 'border-box',
        '&::after': {
            boxSizing: 'border-box'
        },
        '&::before': {
            boxSizing: 'border-box'
        }
    }
})


const StyledImage = styled('img', {
    display: 'block',
    width: '100%',
    height: '100%',
    padding: 0,
    
    objectFit: 'cover',
    borderRadius: '50%',
    clipPath: `url("#my-clip-path")`,

    '&.seen': {
        clipPath: `url("#seen")`,
        borderRadius: 0
    },

    '& *': {
        boxSizing: 'border-box',
        '&::after': {
            boxSizing: 'border-box'
        },
        '&::before': {
            boxSizing: 'border-box'
        }
    }
})

const StyledBadge = styled('span', {
    ...cssVariables, 

    position: 'absolute',
    right: 'calc(var(--size) / 20)',
    bottom: 'calc(calc(var(--size) / 20) - 1px)',
    height: 'calc(var(--size) / 6)',
    width: 'calc(var(--size) / 6)',
    aspectRatio: '1 / 1',

    borderWidth: '1.25px',
    borderStyle: 'solid',
    borderRadius: '50%',

    $$shadowColor: '$accentText',
    filter: 'drop-shadow(1px 1px 3px $$shadowColor)',

    '&::after': {
        clipPath: `url("#seen")`
    },

    variants: {
        status: {
            success: {
                backgroundColor: '$successSolid',
                borderColor: '$successBorder',
                '&:hover': {
                    backgroundColor: '$successSolidHover',
                    borderColor: '$successBorderHover'
                }
            },
            error: {
                backgroundColor: '$dangerSolid',
                borderColor: '$dangerBorder',
                '&:hover': {
                    backgroundColor: '$dangerSolidHover',
                    borderColor: '$dangerBorderHover'
                }
            },
            warning: {
                backgroundColor: '$warningSolid',
                borderColor: '$warningBorder',
                '&:hover': {
                    backgroundColor: '$warningSolidHover',
                    borderColor: '$warningBorderHover'
                }
            },
            info: {
                backgroundColor: '$infoSolid',
                borderColor: '$infoBorder',
                '&:hover': {
                    backgroundColor: '$infoSolidHover',
                    borderColor: '$infoBorderHover'
                }
            },
            disabled: {
                backgroundColor: '$disabledSolid',
                borderColor: '$disabledBorder',
                '&:hover': {
                    backgroundColor: '$disabledSolidHover',
                    borderColor: '$disabledBorderHover'
                }
            }
        }
    },
    defaultVariants: {
        status: 'info'
    }
})

const MaskedAvatar = () => (
    <Fragment>
        <StyledAvatar>
            <StyledImage 
                src="https://github.com/travis-ci.png"
                alt="Travis CI"
            />
            <StyledBadge status="info" /> 
        </StyledAvatar>

        <svg className="svg">
            <defs>
                <clipPath 
                    id="my-clip-path" 
                    clipPathUnits="objectBoundingBox"
                >
                    <path 
                        d="M0.5,0 C0.776,0,1,0.224,1,0.5 C1,0.603,0.969,0.7,0.915,0.779 C0.897,0.767,0.876,0.76,0.853,0.76 C0.794,0.76,0.747,0.808,0.747,0.867 C0.747,0.888,0.753,0.908,0.764,0.925 C0.687,0.972,0.597,1,0.5,1 C0.224,1,0,0.776,0,0.5 C0,0.224,0.224,0,0.5,0" 
                    />
                </clipPath>
            </defs>
        </svg>

        
    </Fragment>
)

MaskedAvatar.displayName = 'MaskedAvatar'
export default MaskedAvatar