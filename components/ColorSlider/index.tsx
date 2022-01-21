import { MutableRefObject, useRef } from 'react';

import { useColorSliderState } from '@react-stately/color';
import { useColorSlider } from '@react-aria/color'; 
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useLocale } from '@react-aria/i18n';
import { useFocusRing } from '@react-aria/focus';

import {
    ColorChannel,
    ColorSliderState,
    ColorSliderAriaOptions
} from '@/components/ColorSlider/interfaces'

import { 
    Label,
    Output,
    Container
} from '@/components/ColorSlider/styles'

const TRACK_THICKNESS = 20;
const THUMB_SIZE = 24;

export const ColorSlider = (props) => {
    let { locale } = useLocale();

    let state: ColorSliderState = useColorSliderState({ ...props, defaultValue: '#fff', locale });
    let trackRef: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>();
    let inputRef: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>();

    let label: ColorChannel = props.label || state.value.getChannelName(props.channel, locale);

    let { trackProps, thumbProps, inputProps, labelProps, outputProps } = useColorSlider({ 
        ...props, label, trackRef, inputRef 
    }, state);

    let { focusProps, isFocusVisible } = useFocusRing();

    return (
        <Container>
            <div style={{ display: 'flex', alignSelf: 'stretch' }}>
                <Label {...labelProps}> {label} </Label>
                <Output {...outputProps}>
                    {state.value.formatChannelValue(props.channel, locale)}
                </Output>
            </div>

            <div
                {...trackProps}
                ref={trackRef}
                style={{
                    ...trackProps.style,
                    height: TRACK_THICKNESS,
                    width: '100%',
                    borderRadius: 4
                }}
            >
                <div
                    {...thumbProps}
                    style={{
                        ...thumbProps.style,
                        top: TRACK_THICKNESS / 2,
                        border: '2px solid white',
                        boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
                        width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
                        height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
                        borderRadius: '50%',
                        boxSizing: 'border-box',
                        background: state.getDisplayColor().toString('css')
                    }}
                >
                <VisuallyHidden>
                    <input ref={inputRef} {...inputProps} {...focusProps} />
                </VisuallyHidden>
                </div>
            </div>
        </Container>
    );
}