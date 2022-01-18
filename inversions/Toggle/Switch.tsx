import { styled } from '../../stitches.config'
import { Label } from '@/components/Label'

const StyledSwitch = styled('span', {
    boxSizing: 'initial',
    display: 'inline-block',
    outline: 0,
    width: '8em',
    height: '4em',
    position: 'relative',
    cursor: 'pointer',
    userSelect: 'none',
    background: '#fbfbfb',
    borderRadius: '4em',
    padding: '4px',
    transition: 'all 0.4s ease',
    border: '2px solid #e8eae9',

    '&:focus': {
        '&::after': {
            boxSizing: 'initial',
            boxShadow: `
                0 0 0 2px rgba(0, 0, 0, 0.1),
                0 4px 0 rgba(0, 0, 0, 0.08),
                inset 0px 0px 0px 3px #9c9c9c
            `
        }
    },
    '&::after': {
        left: 0,
        position: 'relative',
        display: 'block',
        content: '',
        width: '50%',
        height: '100%',
        borderRadius: '4em',
        background: '#fbfbfb',
        transition: `
            all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) padding 0.3s ease, margin 0.3s ease
        `,
        boxShadow: `
            0 0 0 2px rgba(0, 0, 0, 0.1), 
            0 4px 0 rgba(0, 0, 0, 0.08)
        `,
    },    
    '&:active::after': {
        boxSizing: 'initial',
        boxShadow: `
            0 0 0 2px rgba(0, 0, 0, 0.1),
            0 4px 0 rgba(0, 0, 0, 0.08),
            inset 0px 0px 0px 3px #9c9c9c
        `
    },
    variants: {
        selected: {
            true: {
                bc: '#86d993',
                boxShadow: 'none',
                ml: '-1.6em',
                pr: '1.6em'
            },
            false: {
                bc: '#411',
                boxShadow: 'none',
                ml: 0,
                pr: 0
            }
        }
    },
    defaultVariants: {
        selected: false
    }
})

const StyledHiddenInput = styled('input', {
    border: 0,
    clip: 'rect(0,0,0,0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0px',
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
})

const noop = () => {} 

export const Switch = ({
    selected, 
    className = '', 
    'aria-label': ariaLabel, 
    onClick, 
    ...props
}) => {

    return (
        <label aria-label={ariaLabel || 'Toggle'} style={{ display: 'block' }}>
            <StyledHiddenInput
                type="checkbox"
                checked={selected}
                onChange={noop}
                onClick={onClick}
                data-testid="toggle-input"
            />

            <StyledSwitch selected={selected} />
        </label>
    )
}