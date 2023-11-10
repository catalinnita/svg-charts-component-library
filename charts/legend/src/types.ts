export type LegendI = {
    title?: string,
    titleFontSize?: number,
    titleColor?: string,
    description?: string,
    descriptionColor?: string,
    descriptionFontSize?: number,
    pos?: 'top' | 'left' | 'right' | 'bottom',
    align?: 'middle' | 'start' | 'end'
    chartWidth: number,
    chartHeight: number,
    chartPadding: number[],
    spacing: number[],
}