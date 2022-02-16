import { SVGProps } from 'react'
import { styled, keyframes, CSS } from 'stitches.config'

const cssVariables: CSS = {
    '--border-radius': '5px',
    '--border-color': 'white',
    '--animation-duration': '300ms',
    '--animation-duration-secs': 0.3,

    '--searchbar-min-width': '265px',
    '--searchbar-max-width': '265px',
    '--searchbar-max-height': '250px',

    '--tag-bg-color': '$colors$black1',
    '--tag-text-color': '$colors$white1',
    '--tag-border-color': '$colors$white1',
    '--tag-border-style': 'solid',
    '--tag-border-width': '1px',
    '--tag-border-radius': '4px',
    '--search-result-tag-width': '45px',
    '--search-result-tag-height': '22.5px',

    '--search-result-text-color': '',
    '--search-result-text-color-hover': '',
    '--search-result-text-color-focus': '',
    '--search-result-text-color-disabled': '',
    '--search-result-bg-color': '',
    '--search-result-bg-color-hover': '',
    '--search-result-bg-color-disabled': '',
    '--search-result-border-color': '',
    '--search-result-border-color-hover': '',
    '--search-result-border-color-focus': '',
    '--search-result-border-color-disabled': '',
    '--search-result-focus-ring': ''
}

const popIn = keyframes({
    from: {
        transform: 'scale(0.8)',
        opacity: 0
    },
    to: {
        transform: 'scale(1.0)',
        opacity: 1
    }
})

const StyledIconWrapper = styled('span', {
    
    '& svg': {
        height: '1.25em',
        width: '1.25em',
        stroke: '$accentText'
    }
})

const StyledSearchBar = styled('div', {
    ...cssVariables,

    zIndex: 100,
    fontSize: '13px',
    boxShadow: '0 .5rem 1rem rgba(black, 0.1)',
    borderRadius: 'var(--border-radius)',

    minWidth: 'var(--searchbar-min-width)',
    maxWidth: 'var(--searchbar-max-width)',
    maxHeight: 'var(--searchbar-max-height)',

    width: 'fit-content',
    height: 'fit-content',

    padding: 0,
    margin: 0,

    '&:focus': {
        outline: '2px solid $infoSolid',
        outlineOffset: '2px'
    },
})

const StyledLabel = styled('label', {
    ...cssVariables,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    backgroundColor: '#F7F9FB',
    borderBottom: '1px solid var(--border-color)',
    borderRadius: 'var(--border-radius)',
    border: '1px solid var(--border-color)'
})

const StyledInput = styled('input', {
    ...cssVariables,
    appearance: 'none',
    border: 'none',
    borderRadius: '0',
    padding: '$2',
    background: 'transparent',

    '&:focus': {
        outline: '2px solid dodgerblue',
        outlineOffset: '2px'
    }
})

const StyledResults = styled('ul', {
    ...cssVariables,

    position: 'relative',
    top: '0em',
    left: '0em',
    listStyleType: 'none',
    margin: '0em',
    padding: '0em',

    zIndex: '$min',

    height: 'fit-content',
    width: '100%',
    minWidth: 'var(--searchbar-min-width)',
    maxHeight: 'var(--searchbar-max-height)',
    overflowY: 'scroll',
    overflowX: 'hidden',

    backgroundColor: '$white1',
    color: '$black1',

    borderBottomLeftRadius: 'var(--border-radius)',
    borderBottomRightRadius: 'var(--border-radius)',

    fontSize: '$2',
    fontFamily: '$jetbrains',
    fontStyle: 'normal',
    fontWeight: 400,
    verticalAlign: 'middle',
    fontVariant: 'tabular',

    '&::before': {
        content: "",
        position: 'absolute',
        top: 'calc(var(--border-radius) * -1)',
        left: '0em',
        width: '100%',
        backgroundColor: '$dark1',
        height: 'calc((var(--height, 0) * 1px) + var(--border-radius))',
        transition: 'height var(--animation-duration-secs) ease',
        borderRadius: 'inherit' 
    }
})

const StyledResultItem = styled('li', {
    ...cssVariables,
    appearance: 'none',
    userSelect: 'none',
    listStyleType: 'none',
   
    margin: '0.25em 0.50em',
    padding: '0.5em 0.6em',
    borderRadius: 'var(--border-radius)',

    animation: `${popIn} 300ms backwards`,
    animationDelay: `calc(var(--i) * 0.08s)`,
    transition: 'all 300ms ease',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '0.50rem',

    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    color: 'var(--search-result-text-color)',

    '&::before': {  
        appearance: 'none',
        userSelect: 'none',    
        content: "",

        width: 'var(--search-result-tag-width)',
        height: 'var(--search-result-tag-height)',
        maxWidth: 'var(--search-result-tag-width)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        px: '$1',
        py: '0em',
        margin: '0em',

        display: 'inline-flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        
        background: 'var(--tag-bg-color)',
        color: 'var(--tag-text-color)',
        borderWidth: 'var(--tag-border-width)',
        borderStyle: 'var(--tag-border-style)',
        borderColor: 'var(--tag-border-color)',
        borderRadius: 'var(--tag-border-radius)',

        font: 'inherit',
        fontSize: '11px',
        textOverflow: 'ellipsis',
        textTransform: 'uppercase',
    },

    '&:hover': {
        backgroundColor: '$black1',
        color: '$white1'
    }
})

export {
    StyledLabel,
    StyledInput,
    StyledResults, 
    StyledResultItem,
    StyledSearchBar,
    StyledIconWrapper
}



export function GisArrow(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 100 100" {...props}>
            <path 
                d="M17.09 1.853a4.999 4.999 0 0 0-5.276 5.596l7.557 81.087c.483 3.938 5.137 5.773 8.176 3.223l15.947-12.932l7.15 12.385c4.112 7.122 10.636 8.872 17.758 4.76s8.87-10.638 4.758-17.76l-7.125-12.34l18.896-7.244c3.728-1.357 4.467-6.306 1.3-8.693L19.784 2.847a4.995 4.995 0 0 0-2.695-.994z" 
                fill="currentColor"
            />
        </svg>
    )
  }
  