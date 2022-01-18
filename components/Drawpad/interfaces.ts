import { PrimitiveAtom } from "jotai";

export type Point = readonly [number, number];

export type ShapeAtomValue = {
  path: string;
  color?: string;
};

export type ShapeAtom = PrimitiveAtom<ShapeAtomValue>;


export type Tool = { 
    id: string; 
    text: string; 
    active: boolean; 
} | { 
    id: string; 
    text: string; 
    active?: undefined; 
};


type ZeroType = "0";
type OneType = "1";

type SmallType = "1" | "2" | "3" | "4" | "5";
type LargeType = "6" | "7" | "8" | "9" | "10";


type OnesType = SmallType | LargeType;                      // 1,2,3, 4,5
type TwosType = Extract<SmallType, "2" | "4"> | Extract<LargeType, "6" | "8">;

type EvensType = TwosType                                           // 2,4,6,8
type OddsType = Exclude<OnesType, TwosType>;                        // 1,3,5,7,9
type PrimesType = Extract<OnesType, "2" | "5" | "7">;               // 2, 5, 7

type TensType = `${OnesType}${ZeroType}`;                                               // 10, 20, 30, 40, ..., 100
type HundredsType = `${TensType}${ZeroType}`;                                           // 100,200, ... 1000
type TwentysType = `${EvensType}${ZeroType}` | `${OnesType}${EvensType}${ZeroType}`;    // 20, 40, 60, ... 140, 980,1000
type FiftysType = Extract<TensType, "50">;                                              // 50 
type TwentyFives = `${Exclude<PrimesType, "5">}5` | FiftysType;                         // 25, 50, 75

type TwentyFifthsType = TwentyFives | `${OnesType}${TwentyFives}`;                      // 25,50,...150,175, ... 975,1000

type TenthsType = `.${TensType}` | `${ZeroType}.${TensType}`;             // 0.1, 0.2,... 0.9 (leading zero optional)
type FourthsType = `.${TwentyFives}` | `${ZeroType}.${TwentyFives}`;     // 0.25, 0.5, 0.75 or (leading zero optional)

type IncrementOfOneTenthType = `${ZeroType}.${TensType}`|`${OnesType}.${TensType}`; // 0.1, 0.2, ... 9.7, 9.8, 9.9, 10
type IncrementOfOneFourthType = `${ZeroType}.${TwentyFives}`|`${OnesType}.${TwentyFives}`; // 0.25, 0.5 ,.., 9.75, 10

type TenXType = `${SmallType}${ZeroType}`;

type SmallRemMagnitudeType = ZeroType | OnesType | IncrementOfOneFourthType; // 0rem, 0.25rem, ... 9.75rem, 10rem
type LargeRemMagnitudeType = ZeroType | OnesType | TensType;              // 10rem, 20rem, 30rem, 40rem

type SmallPxMagnitudeType = OnesType | IncrementOfOneTenthType;   // 0.1px, 0.2px, 0.3px
type LargePxMagnitudeType =  TensType

type SmallRemType = `${SmallRemMagnitudeType}rem`;
type LargeRemType = `${LargeRemMagnitudeType}rem`;
type SmallPxType = `${SmallPxMagnitudeType}px`;
type LargePxType = `${LargePxMagnitudeType}px`;
type SmallPctType = `${SmallPxMagnitudeType}0%`;
type LargePctType = `${LargeRemMagnitudeType}0%`;

type PxType = SmallRemType | LargeRemType; 
type RemType = SmallPxType | LargePxType;
type PctType = SmallPctType | LargePctType; 

type SmallDimensionType = SmallRemType | SmallPxType | SmallPctType;
type LargeDimensionType = LargeRemType | LargeRemType | LargePctType; 

export type DimensionType = PxType | RemType | PctType; 
