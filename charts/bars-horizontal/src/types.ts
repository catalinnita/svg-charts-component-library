export interface BarChartDataI {
    value: number,
    displayValue: string,
    color: string,
    label: string,
}

export type ColorTypeT = 'data' | 'transparent-gradient' | 'reverse-transparent-gradient' | 'uni' | 'gradient' | 'heat-gradient'