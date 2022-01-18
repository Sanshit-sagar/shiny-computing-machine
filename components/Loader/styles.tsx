import { styled, keyframes } from '../../stitches.config'

const StyledLoaderCollection = styled('div', {
    height: 'fit-content',
    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    ai: 'center',
    gap: '$3',
    bc: '$accentBase',
    border: '2px solid $accentBorder',
    px: '$3',
    py: 0,
    br: '$2'
}); 

export const LoaderCollection = StyledLoaderCollection

// const StretchDelay = keyframes({
//     '0%, 40%, 100%': {
//         transform: 'scaleY(0.4)',
//         '-webkit-transform': 'scale(0.4)'
//     },
//     '20%': {
//         transform: 'scaleY(1.0)',
//         '-webkit-transform': 'scale(1.0)'
//     }
// });

// const StyledSpinner = styled('div', {
//     margin: '100px auto',
//     width: '50px',
//     height: '40px',
//     textAlign: 'center',
//     fontSize: '10px',

//     '& > div': {
//         display: 'inline-block',
//         height: '100%',
//         width: '6px',
//         bc: '$accentSolid',
//         animation: `${StretchDelay} 1.2s infinite ease-in-out`,
//         '-webkit-animation': `${StretchDelay} 1.2s infinite ease-in-out`
//     }
// });

// const StyledRect1 = styled('div', {
//     animationDelay: '10s'
// });

// const StyledRect2 = styled('div', {
//     animationDelay: '-1.1s',
//     '-webkit-animation-delay': '-1.1s'
// });

// const StyledRect3 = styled('div', {
//     animationDelay: '-1.0s',
//     '-webkit-animation-delay': '-1.0s'
// });

// const StyledRect4 = styled('div', {
//     animationDelay: '-0.9s',
//     '-webkit-animation-delay': '-0.9s'
// });

// const StyledRect5 = styled('div', {
//     animationDelay: '-0.8s',
//     '-webkit-animation-delay': '-0.8s'
// });

// export const Spinner = StyledSpinner
// export const Rect1 = StyledRect1
// export const Rect2 = StyledRect2
// export const Rect3 = StyledRect3
// export const Rect4 = StyledRect4
// export const Rect5 = StyledRect5
