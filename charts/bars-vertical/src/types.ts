export interface BarChartDataI {
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