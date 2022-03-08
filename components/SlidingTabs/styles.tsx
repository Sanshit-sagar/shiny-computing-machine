import { styled } from 'stitches.config'

const StyledContainer = styled('div', {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
})

const StyledTabs = styled('div', {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'flex',
    position: 'relative',
    backgroundColor: '$accentBase',
    border: '1.25px solid $accentBorder',
    borderRadius: '50px',
    padding: '1px',

    '& *': {
        zIndex: 2
    },
    '@media (max-width: 768px)': {
        transform: 'scale(0.6)'
    }
})

const StyledLabel = styled('label', {
    overflow: 'hidden',
    whiteSpace: 'nowrap',

    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32px',
    padding: '0em',
    paddingBottom: '1px',
    
    minWidth: '125px',
    width: '125px',
    maxWidth: '125px',

    textOverflow: 'ellipsis',

    fontSize: '13px',
    fontWeight: 500,
    fontFamily: '$flow',
    textAlign: 'start',
    verticalAlign: 'middle',

    borderRadius: '$1',
    cursor: 'pointer',
    transition: 'color 300ms ease-in-out',

    border: '1.25px solid transparent'
})

const StyledInput = styled('input', {
    display: 'none',
    visibility: 'hidden',
    opacity: 0,

    '&:checked': {
        '& + label': {
            color: '$tooltipForeground'
        }
    },

    variants: {
        index: {
            0: {
                '&:checked': {

                },
            },
            1: {
                '&:checked': {
                    '& ~ span': {
                        transform: 'translateX(0)'
                    }
                }
            },
            2: {
                '&:checked': {
                    '& ~ span': {
                        transform: 'translateX(100%)'
                    }
                }
            },
            3: {
                '&:checked': {
                    '& ~ span': {
                        transform: 'translateX(200%)'
                    }
                }
            },
            4: {
                '&:checked': {
                    '& ~ span': {
                        transform: 'translateX(300%)'
                    }
                }
            }
        }
    },
    defaultVariants: {
        index: 0
    }

})

const StyledNotification = styled('span', {
   

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content',
    width: 'fit-content',
    maxWidth: '1.5rem',
    maxHeight: '1.5rem',
    aspectRatio: '1 / 1',
    marginLeft: '$1',
    borderRadius: '$1',
    padding: '5px',

    backgroundColor: '$successLine',
    color: '$successTextContrast',

    transition: 'all 300ms ease'
})


const StyledGlider = styled('span', {

    position: 'absolute',
    display: 'flex',
    height: '32px',
    width: '125px',

    backgroundColor: '$tooltipBackground',
    color: 'inherit',
    border: '1.5px solid $accentBorder',

    filter: 'saturation(180%) blur(20px)',

    zIndex: 1,
    borderRadius: '50px',
    transition: 'all 300ms ease-in-out'
})


const SlidingTabs = () => {

    return (
        <StyledContainer className="container">
            <StyledTabs className="tabs">
                <StyledInput type="radio" id="radio-1" name="tabs" checked index={1} />
                <StyledLabel className="tab" htmlFor="radio-1">
                    Upcoming 
                    {/* <StyledNotification className="notification"> 2 </StyledNotification> */}
                </StyledLabel>
                
                <StyledInput type="radio" id="radio-2" name="tabs" index={2} />
                <StyledLabel className="tab" htmlFor="radio-2">
                    Development
                </StyledLabel>

                <StyledInput type="radio" id="radio-3" name="tabs" index={3} />
                <StyledLabel className="tab" htmlFor="radio-3">
                    Completed
                </StyledLabel>

                <StyledGlider className="glider" /> 
            </StyledTabs>
        </StyledContainer>
    )
}


export {
    SlidingTabs
}