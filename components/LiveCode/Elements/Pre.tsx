import { styled } from '../../../stitches.config'
import { 
    indigoDark, 
    cyanDark, 
    slateDark, 
    greenDark, 
    crimsonDark, 
    violetDark,
    blueDark,
    sandDark,
    grayDark,
    yellowDark,
    pinkDark,
    mauveDark
} from '@radix-ui/colors' 

export const Pre = styled('pre', {
    $$background: 'hsla(206 12% 89.5% / 5%)',
    $$text: '$colors$white',
    $$syntax1: '$colors$orange',
    $$syntax2: '$colors$turq',
    $$syntax3: '$colors$pink',
    $$syntax4: '$colors$pink',
    $$comment: '$colors$gray',
    $$removed: '$colors$red',
    $$added: '$colors$turq',
    // $$lineNumbers: '$colors$accentTextContrast',
    // $$fadedLines: '$colors$accentSolid',            // line 1
    // $$highlightedWord1Bg: '$colors$successSolid',
    // $$highlightedWord1BgActive: '$colors$successSolidHover',
    // $$highlightedWord1Text: violetDark.violet11,
    // $$highlightedWord2Bg: crimsonDark.crimson3,
    // $$highlightedWord2BgActive: crimsonDark.crimson5,
    // $$highlightedWord2Text: crimsonDark.crimson11,
    // $$highlightedWord3Bg: greenDark.green3,
    // $$highlightedWord3BgActive: greenDark.green5,
    // $$highlightedWord3Text: greenDark.green11,
  
    boxSizing: 'border-box',
    borderRadius: '$3',
    padding: '$3',
    overflow: 'auto',
    fontFamily: '$mono',
    fontSize: '$2',
    lineHeight: '$3',
    whiteSpace: 'pre',
    position: 'relative',
    backgroundColor: '$$background',
    color: '$$text',

    '& > code': {
      display: 'block',
      color: '$accentTextContrast',
      fontSize: '$2',
      fontFamily: '$mono'
    },
  
   '.token.parameter': {
        color: '$$text',
    },

    '.token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function': {
        color: '$$syntax1',
    },

    '.token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color': {
        color: '$$syntax2',
    },

    '.token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important': {
        color: '$$syntax3',
    },

    '.token.punctuation, .token.module, .token.property': {
        color: '$$syntax4',
    },

    '.token.comment': {
        color: '$$comment',
    },

    '.token.atapply .token:not(.rule):not(.important)': {
        color: 'inherit',
    },

    '.language-shell .token:not(.comment)': {
        color: 'inherit',
    },

    '.language-css .token.function': {
        color: 'inherit',
    },

    '.token.deleted:not(.prefix), .token.inserted:not(.prefix)': {
        display: 'block',
        px: '$4',
        mx: '-$4',
    },

    '.token.deleted:not(.prefix)': {
        color: '$$removed',
    },

    '.token.inserted:not(.prefix)': {
        color: '$$added',
    },

    '.token.deleted.prefix, .token.inserted.prefix': {
        userSelect: 'none',
    },
  
    // Styles for highlighted word
    '.highlight-word': {
      $$bgAndShadow: '$$highlightedWord1Bg',
      $$xOffset: '1px',
      color: '$$highlightedWord1Text',
      backgroundColor: '$$bgAndShadow',
      display: 'inline-block',
      boxShadow: '$$xOffset 0 0 0 $$bgAndShadow, -$$xOffset 0 0 0 $$bgAndShadow',
  
      // reset the color for tokens inside highlighted words
      '.token': {
        color: 'inherit',
      },
  
      '&.on': {
        $$bgAndShadow: '$$highlightedWord1BgActive',
        transition: 'all 100ms ease',
        cursor: 'pointer',
      },
    },
  
    '.token.deleted .highlight-word': {
      $$bgAndShadow: '$$highlightedWord2Bg',
      color: '$$highlightedWord2Text',
  
      '&.on': {
        $$bgAndShadow: '$$highlightedWord2BgActive',
      },
    },
  
    '.token.inserted .highlight-word': {
      $$bgAndShadow: '$$highlightedWord3Bg',
      color: '$$highlightedWord3Text',
  
      '&.on': {
        $$bgAndShadow: '$$highlightedWord3BgActive',
      },
    },
  
    // Line numbers
    '&[data-line-numbers=true]': {
      '.highlight-line': {
        position: 'relative',
        pl: '$4',
        pr: '$3',
  
        '&::before': {
          content: 'attr(data-line)',
          position: 'absolute',
          left: -5,
          top: 0,
          color: '$$lineNumbers',
        },
      },
    },
  
    // Styles for highlighted lines
    '.highlight-line': {
      '&, *': {
        transition: 'color 150ms ease',
      },
      '&[data-highlighted=false]': {
        '&, *': {

            color: '$$fadedLines',
        },
      },
    },
  
    // Typewriter styles
    '.typewriter': {
      opacity: 1,
    },
  
    variants: {
        theme: {
            orange: {
                $$background: 'rgb(255 135 31 / 10%)',
                $$syntax1: '$colors$pink',
                $$syntax2: '$colors$turq',
                $$syntax3: '$colors$orange',
                $$syntax4: '$colors$orange',
            },
            pink: {
                $$background: 'hsl(345deg 66% 73% / 20%)',
                $$syntax1: '$colors$orange',
                $$syntax2: '$colors$turq',
                $$syntax3: '$colors$pink',
                $$syntax4: '$colors$pink',
            },
            turq: {
                $$background: 'rgba(0, 245, 196, 0.15)',
                $$syntax1: '$colors$orange',
                $$syntax2: '$colors$pink',
                $$syntax3: '$colors$turq',
                $$syntax4: '$colors$turq',
            },
        },
        showLineNumbers: {
            true: {
                '.highlight-line': {
                position: 'relative',
                paddingLeft: '$4',
        
                '&::before': {
                    content: 'attr(data-line)',
                    position: 'absolute',
                    left: -5,
                    top: 0,
                    color: '$$lineNumbers',
                },
                },
            },
        }
    }
});