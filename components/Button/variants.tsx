import { CSS } from 'stitches.config'

export const primaryVariant: CSS = {
    bc: '$accentBg',
    color: '$accentText',
    borderColor: '$accentBorder',
    '&:hover': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$accentBgHover',
            color: '$accentTextContrast',
            borderColor: '$accentBorderHover'
        }
    },
    '&:active': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$accentBgActive',
            color: '$accentTextContrast',
            borderColor: '$accentFocusRing'
        }
    },
    '&:focus-visible': {
        '&:disabled': {
            boxShadow: 'none',
            outline: '0.5px solid $disabledFocusRing'
        },
        '&:not(:disabled)': {
            outline: '0.5px solid $accentFocusRing'
        }
    }
}

export const secondaryVariant: CSS = {
    bc: '$accentSolid',
    color: '$dark1',
    borderColor: '$dark1',

    '& svg': {
        fill: '$dark1'
    },

    '&:disabled': {
        bc: '$disabledBg',
        color: '$disabledText',
        borderColor: '$disabledBorder',
        cursor: 'not-allowed',
    },
    '&:hover': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$accentSolidHover',
            color: '$light1',
            borderColor: '$light1',
            '& svg': {
                fill: '$light1'
            },
        }
    },
    '&:active': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            
            color: '$light1',
            borderColor: '$light1',

            '& svg': {
                fill: '$light1'
            },
        }
    },
    '&:focus-visible': {
        '&:disabled': {
            boxShadow: 'none',
        },
        '&:not(:disabled)': {
            outline: '2px solid $panelFocusRing'
        }
    },

}

export const dangerVariant: CSS = {
    bc: '$dangerBg',
    color: '$dangerText',
    borderColor: '$dangerBorder',
    '&:hover': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$dangerBgHover',
            color: '$dangerTextContrast',
            borderColor: '$dangerBorderHover'
        }
    },
    '&:active': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: 'dangerBgActive',
            color: '$dangerTextContrast',
            borderColor: '$dangerFocusRing',
        }
    },
    '&:focus-visible': {
        '&:disabled': {
            boxShadow: 'none',
        },
        '&:not(:disabled)': {
            outline: '1px solid $dangerFocusRing'
        }
    }
}

export const successVariant: CSS = {
    bc: '$successBg',
    color: '$successText',
    borderColor: '$successBorder',
    '&:hover': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$successBgHover',
            color: '$successTextContrast',
            borderColor: '$successBorderHover'
        }
    },
    '&:active': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: 'successBgActive',
            color: '$successTextContrast',
            borderColor: '$successFocusRing'
        }
    },
    '&:focus-visible': {
        '&:disabled': {
            boxShadow: 'none',
        },
        '&:not(:disabled)': {
            outline: '1px solid $successFocusRing'
        }
    }
}


export const warningVariant: CSS = {
    bc: '$warningBg',
    color: '$warningText',
    borderColor: '$warningBorder',
    '&:hover': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$warningBgHover',
            color: '$warningTextContrast',
            borderColor: '$warningBorderHover'
        }
    },
    '&:active': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$warningBgActive',
            color: '$warningTextContrast',
            borderColor: '$warningFocusRing'
        }
    },
    '&:focus-visible': {
        '&:disabled': {
            boxShadow: 'none',
        },
        '&:not(:disabled)': {
            outline: '1px solid $warningFocusRing'
        }
    }
}


export const infoVariant: CSS = {
    bc: '$infoBg',
    color: '$infoText',
    borderColor: '$infoBorder',
    '&:hover': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$infoBgHover',
            color: '$infoTextContrast',
            borderColor: '$infoBorderHover'
        }
    },
    '&:active': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: '$infoBgActive',
            color: '$infoTextContrast',
            borderColor: '$infoFocusRing'
        }
    },
    '&:focus-visible': {
        '&:disabled': {
            boxShadow: 'none',
        },
        '&:not(:disabled)': {
            outline: '1px solid $infoFocusRing'
        }
    }
}

export const outlinedVariant: CSS = {
    bc: 'transparent',
    color: '$accentText',
    borderColor: '$accentBorder',
    borderWidth: '2px',

    '&:disabled': {
        bc: 'transparent',
        color: '$disabledText',
        borderColor: '$disabledBorder'
    },
    '&:hover': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: 'transparent',
            color: '$accentTextContrast',
            borderColor: '$accentBorderHover'
        }
    },
    '&:active': {
        '&:disabled': {
            boxShadow: 'none'
        },
        '&:not(:disabled)': {
            bc: 'transparent',
            color: '$accentTextContrast',
            borderColor: '$accentFocusRing',
        }
    },
    '&:focus-visible': {
        '&:disabled': {
            boxShadow: 'none',
            outline: '2px solid $disabledFocusRing'
        },
        '&:not(:disabled)': {
            outline: '0.5px solid $accentFocusRing'
        }
    }
}

