export interface LineChartDataI {
    value: number,
    displayValue: string,
    color: string,
    label: string,
    Year: string,
    Entity: string,
}

export type ColorTypeT = 'data' | 'transparent-gradient' | 'reverse-transparent-gradient' | 'uni' | 'gradient' | 'heat-gradient'