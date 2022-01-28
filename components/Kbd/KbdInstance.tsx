import { ReactNode } from 'react'
import { styled } from 'stitches.config'

import {
    CommandIcon,
    ShiftIcon,
    AltIcon,
    OptionIcon,
    UpIcon,
    CapsLockIcon,
    PowerIcon,
    BackspaceIcon,
    ReturnIcon
} from '@/components/Icons'
import { Flex } from '@/components/Flex'
import { Kbd, KbdProps } from './index'
import useKbd from './useKbd'

type KbdVariants =  Omit<KbdProps, 'children'>
type KbdRowOwnProps = {
    rowKeys: string[];
    index: '0' | '1' | '2' | '3';
    prefix?: ReactNode;
    suffix?: ReactNode;
}

type KbdRowProps = KbdRowOwnProps & KbdVariants 

const StyledContainer = styled(Flex, {
    width: 'fit-content', 
    height: 'fit-content', 
    fd: 'column', 
    jc: 'flex-start', 
    ai: 'stretch',
    gap: '$2',
    m: 0,
    p: 0
})

const StyledRow = styled(Flex, {
    width: '100%',
    fd: 'row',  
    ai: 'center',

    variants: {
        row: {
            0: { gap: '$1', jc: 'flex-end' },
            1: { gap: '$1', jc: 'flex-start' },
            2: { gap: '$1', jc: 'flex-start'},
            3: { gap: '$1', jc: 'flex-start' },
            4: { gap: '$1', jc: 'center' }
        }
    },
    defaultVariants: {
        row: 1
    }
})

const KbdRow = ({ rowKeys, index, prefix, suffix, ...rest }: KbdRowProps) => (
    <StyledRow row={index}>
        {prefix && (
            <> {prefix} </>
        )}

        {rowKeys.map((rowItem, rowIndex) => (
            <Kbd key={`row-${index}-key-${rowIndex}`} {...rest}>
                {rowItem}
            </Kbd>
        ))}

        {suffix && (
            <> {suffix} </>
        )}
    </StyledRow>
)

const CapsLock = () =>   <Kbd size='1'> caps <CapsLockIcon /> </Kbd>
const Return = () =>  <Kbd size='2'> <ReturnIcon /> </Kbd>
const Tab = () =>  <Kbd size='2'> tab </Kbd>
const Backspace = () =>  <Kbd size='2'> <BackspaceIcon /> </Kbd>
const Power = () =>  <Kbd size='2'> <PowerIcon /> </Kbd>
const LShift = () =>  <Kbd size='2' width="shift">  shift <ShiftIcon /> </Kbd>
const RShift = () =>  <Kbd size='2' width="shift"> <ShiftIcon /> shift </Kbd>
const Alt = () => <Kbd size='2'> <AltIcon /> </Kbd>
const Command = () => <Kbd size='2' width="command"> <CommandIcon /> </Kbd>
const Option = () => <Kbd size='2'> <OptionIcon /> </Kbd>
const Space = () =>  <Kbd size="2" width="space"> space </Kbd>

const KbdBottomRow = () => (
    <StyledRow row='4'>
        <Alt /> 
        <Command />
        <Space />
        <Command />
        <Option /> 
    </StyledRow>
)

const rowContents = [
    ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+' ],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'l', 'o', 'p', '{', '}', '|'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', `"`],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/']
]

export const KbdInstance = () => {
    const { keyboardProps, mostRecentKey, upHistory, resetUpHistory } = useKbd({
        trackUpHistory: true,
        trackDownHistory: false,
        upHistorySize: 15,
    })

    return (
        <StyledContainer>
            <StyledRow row='0'> <Power /> </StyledRow>
            <KbdRow index='0' rowKeys={rowContents[0]} suffix={<Backspace />} />
            <KbdRow index='1' rowKeys={rowContents[1]} prefix={<Tab />} /> 
            <KbdRow index='2' rowKeys={rowContents[2]} prefix={<CapsLock />} suffix={<Return />} />
            <KbdRow index='3' rowKeys={rowContents[3]} prefix={<LShift />} suffix={<RShift />} />
            <KbdBottomRow />
        </StyledContainer>
    )
}

//  <Kbd> {mostRecentKey} </Kbd> 
{/* <ul style={{ width: '250px', overflow: 'hidden', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: '2px' }}> */}
{/* {upHistory.map((upHistoryItem, index) => ( */}
    // <li>
       {/* <Kbd size='2'> {upHistoryItem} </Kbd>  */}
    {/* </li>  */}
// ))}
{/* </ul>  */}
{/* <input {...keyboardProps} placeholder="pls hold me" /> */}