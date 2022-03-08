import { styled } from 'stitches.config'

const DEFAULT_TAG = 'pre'

const StyledPre = styled(DEFAULT_TAG, {
    display: 'block',
    appearance: 'none',

    maxHeight: '300px',
    maxWidth: '400px',

    overflow: 'hidden',
    whiteSpace: 'pre',
    wordBreak: 'break-word',

    margin: '0em',
    padding: '$2 $3',
    borderRadius: '$4',
    background: '#171827',

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