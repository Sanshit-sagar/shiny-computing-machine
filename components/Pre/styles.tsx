import { styled } from 'stitches.config'

const DEFAULT_TAG = 'pre'

const StyledPre = styled(DEFAULT_TAG, {
    display: 'block',
    appearance: 'none',

    maxHeight: '300px',
    maxWidth: '450px',

    overflow: 'scroll',

    textOverflow: 'ellipsis',

    whiteSpace: 'pre',
    wordBreak: 'break-word',

    margin: '$0',
    padding: '$0',

    border: '1px solid $accentBorder',
    borderRadius: '$4',
    background: '$accentBase',

    scrollbarWidth: 'none',

     '&::-webkit-scrollbar': {
        margin: '$0',
        padding: '$0',
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        size: '0.25em',

        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    '&::-webkit-scrollbar-track': {
        bc: '$transparent',
 
        border: 'none',
        outline: 'none',

        '&:hover': {
            bc: '$accentBg'
        },
        '&:active': {

        }
    },
    '&::-webkit-scrollbar-thumb': {
        bc: '$accentText',
        border: 'none',
        outline: 'none',
        br: '$1',

        '&:hover': {
            bc: '$accentTextContrast'
        },
        '&:active': {
            bc: '$accentTextContrast',
        }
    },

    code: {
        fontFamily: '$flow',
        color: '#BBC1E1',
        lineHeight: 1.4,
        fontSize: '12px',
        fontVariant: 'tabular',
        fontVariantNumeric: 'tabular-nums',

        '&.token': {
            '&.function': {
                color: '#5C86FF'
            },
            '&.string': {
                color: '#F0B849'
            },
            '&.parameter': {
                color: '#CB7DD0'
            },
            '&.punctuation': {
                color: '#8A91B4'
            },
            '&.number': {
                color: '#8d8d'
            }
        }
    }
})

const CODE_SAMPLE: string = `
    document.querySelectorAll('textarea').forEach(el => {
        el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
        el.classList.add('auto');
        el.addEventListener('input', e => {
            el.style.height = 'auto';
            el.style.height = (el.scrollHeight) + 'px';
        });
    });
`

const CodeBlock = ({ value = CODE_SAMPLE }) => {

    return (
        <StyledPre>
            <code className="language-js">
               {value}
            </code>
        </StyledPre>
    )
}


export {
    CodeBlock
}