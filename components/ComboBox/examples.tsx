
import { styled } from 'stitches.config'
import { ComboBox } from './index'
import { Item } from 'react-stately'

import { people } from '@/components/Select/constants'

import Label from '@/components/ListBox/Label'
import Description from '@/components/ListBox/Description'


export const ComboBoxWithItems = () => (
    <ComboBox label="Favourite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
    </ComboBox>
)

export const ComboBoxWithSections = () => (
    <ComboBox label="Assignee" defaultItems={people}>
        {(item) => (
            <Item textValue={item.name}>
                {/* <Avatar src={item.avatar} alt={item.name} /> */}
                <div>
                    <Label>{item.name}</Label>
                    <Description>{item.username}</Description>
                </div>
            </Item>
        )}
    </ComboBox>
)

export const ComboBoxInstance = () => <ComboBoxWithSections /> 


// PROXY TO SHARE STYLES
// CSS VARIABLES / HOOK TO UPDATE & SHARE & COMPOSE STYLES
// useKbd, useMultiKbd, useHistory, usePersistedState 
// -> persist dark mode
// push to npm w/ nx
// open AI, date library, redis 
// reset laptop 
// resume, job apps, cleaning, laundry, fridge


// https://seek-oss.github.io/braid-design-system/guides/design-workflow/
// https://medium.com/geckoboard-under-the-hood/how-we-made-our-product-more-personalized-with-css-variables-and-react-b29298fde608
// https://github.com/danbahrami/react-custom-properties/blob/master/src/components/custom-properties.js
// https://github.com/donavon/use-persisted-state/blob/develop/src/usePersistedState.js
// https://usehooks-ts.com/react-hook/use-local-storage
// https://github.com/pmndrs/valtio/blob/main/src/react.ts
// https://ishadeed.com/article/stepper-component-html-css/
// https://github.com/codrops/WebGLBlobs/blob/main/css/base.css

// https://tympanus.net/codrops/2019/08/20/react-slider-with-parallax-hover-effects/


// COOL LINK HOVER ANIMATION
// https://codepen.io/electerious/pen/xeJPbB?editors=1100


// CSS ONLY RIPPLE EFFECTS
// https://codepen.io/finnhvman/pen/jLXKJw?editors=0100
// https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/


// FAT DROPDOWN
// https://fireship.io/lessons/dropdown-menu-multi-level-react/