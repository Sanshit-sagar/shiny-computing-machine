import { styled } from '../../stitches.config'

const InputSwitch = () => (
    <input 
        type="checkbox" 
        className="offscreen" 
        id="toggle" 
    /> 
);

const StyledSwitch = styled(InputSwitch, {
    position: 'relative',
    display: 'inline-block',
    width: '40px',
    height: '20px',
    bc: 'rgba(0,0,0,0.25)',
    br: '20px',
    transition: 'all 0.3s',

    '&::after': {
        content: '',
        position: 'absolute',
        width: '18px',
        height: '18px',
        br: '18px',
        bc: 'white',
        top: '1px',
        left: '1px',
        transition: 'all 0.3s',
    },

    '&[type="checkbox"]:checked + &.switch::after': {
        transform: 'translateX(20px)'
    },

    '&[type="checkbox"]:checked + &.switch': {
        backgroundColor: '#7983ff'
    },

    '&.offscreen': {
        position: 'absolute',
        left: '-9999px'
    }
});


export const Switch = StyledSwitch;