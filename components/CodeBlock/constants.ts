export const wavingHandCodeString = `const WavingHand = () => (
    <motion.div
        style={{
            marginBottom: '-20px',
            marginRight: '-45px',
            paddingBottom: '20px',
            paddingRight: '45px',
            display: 'inline-block',
        }}
        animate={{ rotate: 20 }}
        transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 0.2,
            delay: 0.5,
            ease: 'easeInOut',
            type: 'tween',
        }}
    >
        👋
    </motion.div>
)

const Hi = () => (
    <h1>
        Hi <WavingHand /> !
    </h1>
)

render(<Hi />)
`

export const styledIconButtonString = `

    const StyledIconButton = styled('button', {
        appearance: 'none',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
        
        width: '44px',
        height: '44px',
        d: 'flex',
        jc: 'center',
        ai: 'center',
        flexShrink: '0',

        bc: '$accentBg',
        color: '$accentText',

        outline: 'none',
        border: '1px solid $accentBorder',
        br: '$2',

        transition: 'color 0.3s ease, transform 0.3s ease',
        transform: 'scale(var(--button-content-scale, 1)) translateZ(0)',

        willChange: 'transform, opacity',
        $$shadowColorLayer0: '$colors$panelText',
        $$shadowColorLayer1: '$colors$accentBgActive',
        $$shadowColorLayer2: '$colors$accentLine',
        $$shadowColorLayer3: '$colors$accentSolid',
        $$shadowColorLayer4: '$colors$panelBase',
        $$borderColor: '$colors$accentBorder',
    
        '&::after': {
            zIndex: '0',
            position: 'absolute',
            content: "''",
            display: 'block',
            width: '100%',
            height: '100%',
            br: '$1', 
            borderColor: '$accentLine',
        },
    
        '&:disabled': {
            cursor: 'not-allowed',
            bc: '$disabledBg',
            color: '$disabledText',
        },


        variants: {
            on: {
                true: {
                    br: '$2',
                    borderTop: 'none',
                    border: '1px solid $accentSolid',
                    color: '$accentSolid', 

                    boxShadow: ${`
                        0px 0.50px 0.75px 0.50px $$shadowColorLayer1,
                        0px 1.00px 2.00px 1.00px $$shadowColorLayer2,
                        0px 2.00px 4.00px 2.00px $$shadowColorLayer3,
                        0px 0.20px 0.50px 0.20px $$shadowColorLayer4
                    `},
                

                    willChange: 'transform',
                    transition: 'box-shadow 0.3s ease, border-color 0.2s, background 0.3s ease', 
                    transform: '0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',

                    '&:hover': {
                        '&:not(:disabled)': {
                            borderColor: '$accentBorderHover',
                            color: '$accentText',
                            bc: '$accentBgHover',
                            boxShadow: '0px 1.25px 2.5px 1.25px $$shadowColorLayer3'
                        }
                    },
                }
            },
            off: null
        },
        defaultVariants: {
            on: true
        }
    })


    export const ToggleButton = ({ children, ...props }) => {
        const [isOn, setOn] = React.useState(true)

        const toggle = () => setOn(isOn ? false : true)

        return (
            <StyledIconButton {...props} on={isOn} onClick={toggle}>
                {children}
            </StyledIconButton> 
        )
    }
`