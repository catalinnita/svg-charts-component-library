export interface BarChartMultiDataValueI {
    value: number,
    displayValue: string,
    label: string,
    color: string,
}

export interface BarChartMultiDataI {
    values: BarChartMultiDataValueI[],
    color: string,
    label: string,
}

export type ColorTypeT = 'data' | 'transparent-gradient' | 'reverse-transparent-gradient' | 'uni' | 'gradient' | 'heat-gradient'