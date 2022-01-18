import { styled } from 'stitches.config'

export const StyledContainer = styled('div', {
    width: 200
})

export const StyledInfoContainer = styled('div', {
    d: 'flex', 
    jc: 'space-between',
    ai: 'center',
    mb: '$2',
})

export const StyledLabel = styled('span', {
    fontVariant: 'tabular',
    fontSize: '$2',
    fontFamily: '$jetbrains',
    color: '$accentTextContrast',

    variants: {
        hidden: {
            true: {
                display: 'none'
            },
            false: null
        }
    },
    defaultVariants: {
        hidden: false
    }
})

export const StyledValue = styled('span', {
    fontVariantNumeric: 'tabular-nums',
    fontSize: '$2',
    fontFamily: '$jetbrains',

    willChange: 'transition, background-color',
    transition: 'all 0.4s ease-in-out',

    variants: {
        hidden: {
            true: {
                display: 'none'
            },
            false: null
        },
        progress: {
            0: { color: '$dangerSolid' },
            10: { color: '$dangerLine' },
            20: { color: '$dangerSolid' },
            30: { color: '$dangerText' },
            40: { color: 'orange' },
            50: { color: '$warningLine' },
            60: { color: '$warningSolid' },
            70: { color: '$warningText' },
            80: { color: '$successLine' },
            90: { color: '$successSolid' },
            100: { color: '$successText' }
        }
    },
    defaultVariants: {
        hidden: false,
        progress: 40
    }
})

export const StyledProgressBarContainer = styled('div', {
    height: 10, 
    bc: '$panelSolid',
    br: '$1'
})

export const StyledProgressBar = styled('div', {
    height: 10, 
    br: 0,
    btlr: '$1',
    bblr: '$1',

    willChange: 'transition, background-color',
    transition: 'all 0.4s ease-in-out',

    variants: {
        progress: {
            0: { bc: 'light1'},
            10: { bc: '$dangerLine' },
            20: { bc: '$dangerSolid' },
            30: { bc: '$dangerText' },
            40: { bc: 'orange' },
            50: { bc: '$warningLine' },
            60: { bc: '$warningSolid' },
            70: { bc: '$warningText' },
            80: { bc: '$successLine' },
            90: { bc: '$successSolid' },
            100: { bc: '$successText', btrr: '$1', bbrr: '$1' },
        }
    },
    defaultVariants: {
        progress: 40
    }
})

