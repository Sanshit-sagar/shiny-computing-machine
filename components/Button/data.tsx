import { ReactElement, JSXElementConstructor } from 'react'
import {
    AlignTopIcon,
    AlignBottomIcon,
    AlignLeftIcon,
    AlignRightIcon,
    StretchVerticallyIcon,
    StretchHorizontallyIcon,
    AlignCenterVerticallyIcon,
    AlignCenterHorizontallyIcon,
    SpaceBetweenVerticallyIcon,
    SpaceBetweenHorizontallyIcon,
    SpaceEvenlyHorizontallyIcon,
    SpaceEvenlyVerticallyIcon
} from '@radix-ui/react-icons'

import { EnumLiteralsOf } from '@/interfaces/Guards'

type Row = 'row'
type Col = 'column'
type Direction = Row | Col
type RedirectionableSpacingProps = {
    dir: Direction;
}

const isRow = (dir: string): dir is Row => dir === 'row'

const getSpacedCenterlyIcon = ({ dir }: RedirectionableSpacingProps): ReactElement => isRow(dir) ? (
    <AlignCenterHorizontallyIcon  /> 
): (
    <AlignCenterVerticallyIcon />
)

const getSpacedBetweenlyIcon = ({ dir }: RedirectionableSpacingProps): ReactElement  => isRow(dir) ? (
    <SpaceBetweenHorizontallyIcon /> 
): (
    <SpaceBetweenVerticallyIcon />
)

const getSpacedEvenlyIcon = ({ dir }: RedirectionableSpacingProps): ReactElement => isRow(dir) ? (
    <SpaceEvenlyHorizontallyIcon />
): (
    <SpaceEvenlyVerticallyIcon  />
)

const getSpacedStretchinglyIcon = ({ dir }: RedirectionableSpacingProps): ReactElement => isRow(dir) ? (
    <StretchHorizontallyIcon />
) : (
    <StretchVerticallyIcon />   
)

const getSpacedBeginninglyIcon = ({ dir }: RedirectionableSpacingProps): ReactElement => isRow(dir) ? (
    <AlignLeftIcon />
) : (
    <AlignTopIcon /> 
)

const getSpacedEndinglyIcon = ({ dir }: RedirectionableSpacingProps): ReactElement => isRow(dir) ? (
    <AlignRightIcon />
) : (
    <AlignBottomIcon />
)

export const Spacings = Object.freeze({
    Start: 'start' as 'start',
    End: 'end' as 'end',
    Center: 'center' as 'center',
    Between: 'between' as 'between',
    Even: 'even' as 'even',
    Stretch: 'stretch' as 'stretch'
})

export type SpacingEnum = EnumLiteralsOf<typeof Spacings>;

export interface ToggleableSpacing {
    icon: ReactElement<any, string | JSXElementConstructor<any>>;
    value: SpacingEnum;
}

export const getSpacingOptions = ({ dir } : RedirectionableSpacingProps): ToggleableSpacing[] => [
    { icon: getSpacedBeginninglyIcon({ dir }), value: 'start' },
    { icon: getSpacedCenterlyIcon({ dir }), value: 'center' },
    { icon: getSpacedEndinglyIcon({ dir }), value: 'end' },
    { icon: getSpacedBetweenlyIcon({ dir }), value: 'between' },
    { icon: getSpacedEvenlyIcon({ dir }), value: 'even' },
    { icon: getSpacedStretchinglyIcon({ dir }), value: 'stretch' },
]


////////////////////////
// const initButtonProps: ButtonProps<'button'> = {
    // size: '1',
    // gap: '3',
    // radius: '1',
    // padding: '3',
    // borderWidth: '1',
    // borderStyle: 'solid',
    // shape: 'quad',
    // shadow: "small",
    // fontFamily: 'hack',
    // direction: 'row',
    // justify: 'center',
    // align: 'center',
    // isLoading: false,
    // isRequired: false,
    // isDisabled: false,
    // isReadOnly: false,
    // autoFocus: false,
    // showIconsWhenLoading: false,
    // excludeFromTabOrder: false,
    // validationStatus: 'valid',
    // tooltip: "this is de data",
    // suffix: <RocketIcon />,
    // 'aria-label': '',
    // 'aria-labelledby': '',
    // 'aria-describedby': ''
// }
// return initButtonProps;
// import StateFactory from '@/utils/StateFactory'

// const ShapeIcon = () => <i className='bx bxs-shapes'></i>
// const CircleIcon = () => <i className='bx bxs-circle'></i>
// const SquareIcon = () => <i className='bx bxs-square' ></i>
// const TooltipIcon = () => <i className='bx bx-message-dots' ></i>
// const RectangleIcon = () => <i className='bx bxs-rectangle' ></i>
// const TrafficBarrierIcon = () => <i className='bx bxs-traffic-barrier'></i>

// const BorderOutsetIcon = () => <i className='bx bxs-layer-plus'></i>
// const BorderInsetIcon = () => <i className='bx bxs-layer-minus' ></i>
// const BorderRidgeIcon = () =>  <i className='bx bx-checkbox-square' ></i>
// const BorderGrooveIcon = () => (
    // <svg xmlns="http://www.w3.org/2000/svg"
        // width="24" 
        // height="24"
        // viewBox="0 0 24 24" 
    // >
        // <path d="M9 9h6v6H9z"></path>
      //  <path d="M19 17V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2zM7 7h10l.002 10H7V7z"> 
    //    </path> 
  //   </svg> 
//)

// const { state, update } = StateFactory<ButtonProps<'button'>>(init)
// const controls = [{ 
    // type: 'slider', 
    // name: 'Size', 
    // value: [state.size], 
    // onChange: (val: string[]) => update('size', val[0]),
    // icon: <DimensionsIcon />,
    // minValue: 1, 
    // maxValue: 10, 
    // step: 1
//  }, { 
    // type: 'slider', 
    // name: 'Radius', 
    // value: [state.radius], 
    // onChange: (val: string[]) => update('radius', val[0]),
    // icon: <CornersIcon />, 
    // minValue: 1, 
    // maxValue: 10, 
    // step: 1
// }, {
    // type: 'slider',
    // name: 'Padding',
    // value: [state.padding],
    // onChange: (val: string[]) => update('padding', val[0]),
    // icon: <PaddingIcon />,
    // minValue: 1,
    // maxValue: 10,
    // step: 1
// }, { 
    // type: 'slider', 
    // name: 'Gap', 
    // value: [state.gap], 
    // onChange: (val: string[]) => update('gap', val[0]),
    // icon: <WidthIcon />, 
    // minValue: 1, 
    // maxValue: 5, 
    // step: 1
// }, { 
    // type: 'slider', 
    // name: 'Border Width', 
    // value: [state.borderWidth], 
    // onChange: (val: string[]) => update('borderWidth', val[0]),
    // icon: <WidthIcon />, 
    // minValue: 1, 
    // maxValue: 10, 
    // step: 1
// }, { 
    // type:'switch',
    // name:'Required',
    // value: state.isRequired,
    // icon: <DotFilledIcon />,
    // onChange:(val: boolean) => update('isRequired',val),
    // isDisabled: state.isDisabled
// },{ 
    // type:'switch',
    // name:'Disabled',
    // value: state.isDisabled,
    // icon: <LockClosedIcon />,
    // onChange:(val: boolean)=> update('isDisabled',val),
    // isDisabled: state.isRequired 
// },{ 
    // type:'switch',
    // name:'Loading',
    // value: state.isLoading,
    // icon: <DotsHorizontalIcon />,
    // onChange:(val: boolean)=> update('isLoading',val),
// },{ 
    // type:'switch',
    // name:'AutoFocus',
    // value: state.autoFocus,
    // icon: <EyeOpenIcon />,
    // onChange:(val: boolean)=> update('autoFocus',val),
    // isDisabled: state.isDisabled 
// }, { 
    // type:'switch',
    // name:'Data on load',
    // value: state.isLoading ? state.showIconsWhenLoading : false,
    // icon: <TrafficBarrierIcon />,
    // onChange:(val: boolean)=> update('showIconsWhenLoading', val),
    // isDisabled: !state.isLoading 
// },{ 
    // type:'switch',
    // name:'Tooltip',
    // value: state.tooltip ? true : false,
    // icon: <TooltipIcon />,
    // onChange:(val: boolean)=> update('tooltip', val ? 'Tooltip data' : undefined),
    // isDisabled: state.isLoading && !state.showIconsWhenLoading
// }, {
    // type: 'multi-toggle',
    // name: 'Style',
    // selection: state.borderStyle,
    // icon: <MaskOnIcon />,
    // onChange: (val: Pick<ButtonProps<'button'>, 'borderStyle'>) => update('borderStyle', val),
    // isDisabled: false,
    // values: [
        // { icon: <BorderSolidIcon />, value: 'solid' },
        // { icon: <BorderDottedIcon />, value: 'dotted' },
        // { icon: <BorderDashedIcon />, value: 'dashed' },
        // { icon: <BorderInsetIcon />, value: 'inset' },
        // { icon: <BorderOutsetIcon />, value: 'outset' },
        // { icon: <BorderRidgeIcon />, value: 'ridge' },
        // { icon: <BorderNoneIcon />, value: 'none' }
    // ]
// }, {
    // type: 'menu',
    // name:  `Direction`,
    // items: [
        // { name: 'Direction', children: [
            // { name: 'column', icon: <HeightIcon />, shortcut: '' }, 
            // { name: 'row', icon: <WidthIcon />, shortcut: '' }]
    // }],
    // selectionMode: "single",
    // selectedKeys: new Set([state.direction]),
    // icon: <MoveIcon />,
    // onSelectionChange: (val: 'all' | Set<React.Key>) => {
        // const updatedValue = typeof val === 'string' ? val : val.entries().next().value
        // update('direction', !updatedValue ? '' : updatedValue[0])
    // },
    // isDisabled: false,
// },  {
    // type: 'menu',
    // name:  `Shape`,
    // items: [{ 
        // name: 'Shape', children: [
            // { name: 'quad', icon: <RectangleIcon />, shortcut: '' }, 
            // { name: 'square', icon: <SquareIcon />, shortcut: '' },
            // { name: 'circle', icon: <CircleIcon />, shortcut: '' },
        // ]
    // }],
    // selectionMode: "single",
    // selectedKeys: new Set([state.shape]),
    // icon: <ShapeIcon />,
    // onSelectionChange: (val: 'all' | Set<React.Key>) => {
        // const updatedValue = typeof val === 'string' ? val : val.entries().next().value
        // update('shape', !updatedValue ? '' : updatedValue[0])
    // },
    // isDisabled: false,
// },  {
    // type: 'menu',
    // name:  `Font Family`,
    // items: [{ 
        // name: 'Font Family', children: [
            // { name: 'mono', icon: <MinusIcon />, shortcut: '' }, 
            // { name: 'bdr', icon: <MinusIcon />, shortcut: '' },
            // { name: 'marker', icon: <MinusIcon />, shortcut: '' },
            // { name: 'raleway', icon: <MinusIcon />, shortcut: '' },
            // { name: 'hack', icon: <MinusIcon />, shortcut: '' },
        // ]
    // }],
    // selectionMode: "single",
    // selectedKeys: new Set([state.fontFamily]),
    // icon: <FontFamilyIcon />,
    // onSelectionChange: (val: 'all' | Set<React.Key>) => {
        // const updatedValue = typeof val === 'string' ? val : val.entries().next().value
        // update('fontFamily', !updatedValue ? '' : updatedValue[0])
    // },
    // isDisabled: false,
// },{
    // type: 'multi-toggle',
    // name: 'Justify',
    // selection: state.justify,
    // icon: <MoveIcon />,
    // onChange: (val: Pick<ButtonProps<'button'>, 'justify'>) => update('justify', val),
    // isDisabled: false,
    // values: getSpacingOptions({ dir: state.direction === 'row' ? 'row' : 'column' })
// }, {
    // type: 'multi-toggle',
    // name: 'Align',
    // selection: state.align,
    // icon: <MoveIcon />,
    // onChange: (val: Pick<ButtonProps<'button'>, 'align'>) => update('align', val),
    // isDisabled: false,
    // values: getSpacingOptions({ dir: state.direction === 'row' ? 'row' : 'column' })
// }]
// export const SlideRound = (val: string) => Number(Math.round(parseFloat(val)))

// import { 
    // MoveIcon,
    // MinusIcon,
    // StackIcon,
    // WidthIcon,
    // HeightIcon,
    // MaskOnIcon,
    // ButtonIcon,
    // RocketIcon,
    // EyeOpenIcon,   
    // PaddingIcon,
    // CornersIcon,   
    // DotFilledIcon,
    // DimensionsIcon,
    // FontFamilyIcon,
    // BorderNoneIcon,
    // LockClosedIcon,
    // BorderSolidIcon,
    // BorderDottedIcon,
    // BorderDashedIcon,
    // DotsHorizontalIcon
// } from '@radix-ui/react-icons'