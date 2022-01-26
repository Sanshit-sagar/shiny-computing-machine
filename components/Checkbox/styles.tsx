import { styled } from 'stitches.config'

export const StyledContainer = styled('div', {
    position: 'relative'
})

export const VisuallyHidden = styled('span', {
    position: 'absolute',
    clip: 'rect(1px 1px 1px 1px)',
    border: 0,
    padding: 0,
    height: '1px',
    margin: '-1px',
    overflow: 'hidden'
})

export const StyledLabel = styled('label', {
    userSelect: 'none',
    cursor: 'pointer',
    display: 'inline-block',

    '&::before': {
        content: "",
        display: 'inline-block',
        verticalAlign: 'middle',
        width: '20px',
        height: '20px',
        border: '2px solid #c5c5c5',
        marginRight: '5px'
    },

    '&:hover': {
        color: 'blue'
    }
})

export const StyledCheckbox = styled('input', {

    '& svg': {
        paddingLeft: '32px',

        '&::before': {
            position: 'absolute',
            left: 0,
            top: '-1px',
            width: '24px',
            height: '24px',
            transition: 'all 0.4s ease-in-out'
        },
        '& svg': {
            position: 'absolute',
            left: '4px',
            top: '4px',
            width: '15px',
            height: '15px',
        },
        '& .path': {
            strokeDashoffset: '111.46px',
            strokeDasharray: '111.46px',
            stroke: '#3863d9',
            transition: 'all 0.35s ease-out'
        }
    },


    variants: {
        checked: {
            true: {
                '& + svg': {
                    '&::before': {
                        background: '#3863d9',
                        borderColor: '#3863d9'
                    },
                    '& .path': {
                        stroke: '#fff',
                        strokeDashoffset: '0'
                    }
                }
            }
        }
    },
    defaultVariants: {
        checked: false
    }
})