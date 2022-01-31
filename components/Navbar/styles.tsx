import { styled } from 'stitches.config'

//https://codesandbox.io/s/924217jvro?file=/src/experiments/compound-accordion.js
//https://codesandbox.io/s/mystifying-lichterman-bv5to
//https://www.framer.com/showcase/project/05KEi5HD5VbrLPqXODHR/
//https://css-tricks.com/building-progress-ring-quickly/
//https://codesandbox.io/s/skeleton-vtn9m?from-embed=&file=/src/components/Skeleton.jsx
//https://codesandbox.io/s/framer-motion-auto-animation-netflix-style-menu-p33yl?file=/src/App.js
//https://sites.framer.com/projects/Simple-Portfolio-copy--6XQqbMO8XgkYXc1m6xsJ-5F4vO?node=WQLkyLRf1


export const StyledNavbar = styled('nav', {
    height: '50px',
    width: '100%',
    backgroundColor: 'transparent',
    padding: 0,
    pr: '200px',
    margin: 0
})

export const StyledNavbarList = styled('ul', {
    listStyle: 'none',
    margin: '$0',
    padding: '$0',
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
})

export const StyledListItem = styled('li', {
    width: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const StyledIconButton = styled('a', {
    textDecoration: 'none',
    color: '$accentTextContrast',

    height: '30px',
    width: '30px',
    backgroundColor: '#484a4d',
    borderRadius: '50%',
    padding: '5px',
    margin: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'filter 0.3s',

    '&:hover': {
        filter: 'brightness(1.2)'
    },
    '& svg': {
        fill: '$accentTextContrast',
        height: '20px',
        width: '20px'
    }
})


export const IconLeft = ({ children }) => (
    <StyledIconButton as="span"> 
        {children} 
    </StyledIconButton>
)

export const IconRight = styled('span', {
    marginLeft: 'auto'
})

export const StyledMenu = styled('div', {
    width: '100%'
})

export const StyledMenuItem = styled('a', {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    transition: 'background 500ms',
    padding: '0.5rem',

    [`& ${StyledIconButton}`]: {
        marginRight: '0.5rem',

        '&:hover': {
            filter: 'none'
        }
    },

    '&:hover': {
        backgroundColor: '#525357'
    }
})

export const StyledDropdown = styled('div', {
    position: 'absolute',
    top: '58px',
    width: '300px',
    transform: 'translateY(-45%)',
    backgroundColor: 'red',
    border: '1px solid #474a4d',
    borderRadius: '8px',
    padding: '1rem',
    overflow: 'hidden',
    transition: 'height 500ms ease',
    zIndex: 1000
})

