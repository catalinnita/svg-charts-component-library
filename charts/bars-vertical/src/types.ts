import { LabelsS } from "@scrambled-data/labels"

export type BarChartDataI = {
    value: number,
    displayValue: string,
    color: string,
    label: string,
}

export type ColorTypeT = 
    'data' | 
    'provided' |
    'uni' | 
    'gradient' | 
    'heat-gradient' | 
    'transparent-gradient' | 
    'reverse-transparent-gradient'

export type CommonDataT = {
    value: number,
    color: string,
}[]

export type BarsVerticalS = {
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    thickness?: number,
    gap?: number,
    colorType?: ColorTypeT,
    r?: number,
    colors?: string[]    
}

export type BarsVerticalI = {
    data: BarChartDataI[],
    labels?: LabelsS
}