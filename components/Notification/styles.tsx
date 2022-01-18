import React from 'react'
import { animated } from 'react-spring'
import { styled } from '../../stitches.config'

export const Main = styled('div', {
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    ai: 'center',
    jc: 'center',
    height: '100%',
    width: '100%',
    bc: 'transparent',
    color: '$accentTextContrast',
    '-webkit-user-select': 'none'
});

export const Container = styled('div', {
    position: 'fixed',
    zIndex: '1000',
    width: '0 auto',
    bottom: '35px',
    margin: '0 auto',
    left: '30px',
    right: 0,
    display: 'flex',
    fd: 'column',
    pointerEvents: 'none',
    border: '$accentBorder',
    ai: 'flex-end',
    overflowX: 'hidden',
});

export const Content = styled('div', {
    color: '$accentTextContrast',
    bc: '$accentSolid',
    width: '0 auto',
    opacity: 0.9,
    fontSize: '$1',
    display: 'flex',
    fd: 'column',
    jc:'flex-start',
    ai: 'stretch',
    overflow: 'hidden',
    height: 'auto',
    br: '$1',
    mt: '$2',
    border: '1px solid',
    borderColor: '$2',
    pb: '$2',
    px: '$2'
});

export const Button = styled('div', {
    cursor: 'pointer',
    pointerEvents: 'all',
    outline: 0,
    display: 'flex',
    alignSelf: 'flex-end',
    overflow: 'hidden',
    margin: '$1',
    mb: '$3',
    bc: 'transparent',
    color: '$dangerSolid',
    border: '1px solid',
    borderColor: '$dangerBorder',
    br: '$1',
    padding: '$1'
});


export const Life = ({ style }) => (
    <animated.div
        style={{
            position: 'absolute',
            bottom: 0,
            left: '0px',
            right: style.right,
            width: 'auto',
            backgroundColor: 'white',
            height: '5px',
            borderBottom: '2px solid',
            borderBottomColor: 'transparent'
        }}
    />
); 

const MessageWrapper = styled('div', {
    bc: 'transparent',
    marginRight: '42.5px',
    width: '40ch',
    padding: 0,
    br: '$2',
});

export const Message = ({ children, style, ...otherProps }) => {

    
    return (
        <MessageWrapper>
            <animated.div 
                {...otherProps}
                style={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    overflow: 'hidden',
                    width: 'inherit',
                    backgroundColor: 'transparent',
                    marginRight: 0,
                    br: '$2',
                    ...style
                }}
            >
                {children}
            </animated.div>
        </MessageWrapper>
    );
}
