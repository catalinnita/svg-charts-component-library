import Circle from '@sd-svg/circle'
import { getMin, getMax } from '@sd/data'
import { ColorTypeT } from './types'

export type Props = {
    x: number,
    y: number,
    width?: number,
    height?: number,
    radius?: number,
    minRadius?: number,
    maxRadius?: number,
    gap?: number,
    data: any[],
    opacity?: number,
    startColor?: string,
    endColor?: string,
    colorType?: ColorTypeT,
}

export function ScatterPlot({
    x,
    y,
    height = 500,
    width = 500,
    radius,
    minRadius = 1,
    maxRadius = 15,
    gap = 0,
    data,
    opacity = 0.3,
    startColor,
    endColor,
    colorType = 'data',
}: Props) {
    const offset = radius || 0
    const hMax = getMax<any>(data.map(el => ({ value: el.Sale_price })))
    const hMin = getMin<any>(data.map(el => ({ value: el.Sale_price })))
    const dataHeight = hMin < 0 ? hMax - hMin : hMax
    const hRatio = (height - offset * 2) / dataHeight
    const hZeroPoint = offset + Math.round(hMax * hRatio)

    const wMax = getMax<any>(data.map(el => ({ value: el.FinishedSqft })))
    const wMin = getMin<any>(data.map(el => ({ value: el.FinishedSqft })))
    const dataWidth = wMin < 0 ? wMax - wMin : wMax
    const wRatio = (width - offset * 2) / dataWidth
    const wZeroPoint = offset + Math.round(wMax * wRatio)

    const rMax = getMax<any>(data.map(el => ({ value: el.Rooms })))
    const rRatio = maxRadius ? maxRadius / rMax : 0

    const propsData = data.map(({Sale_price, FinishedSqft, Rooms}, index) => {
        const yValue = Sale_price ? Sale_price * hRatio : 0
        const xValue = FinishedSqft > 0 ? FinishedSqft * wRatio : 0
        const x = xValue + offset
        const y = hZeroPoint - yValue - offset
        const sizeRadius = Rooms * rRatio > minRadius ? Rooms * rRatio : minRadius
        const size = radius ? radius : sizeRadius

        return {
            ...data[index],
            opacity,
            size,
            x,
            y,
        }
    })

    return (
        <svg height={height} width={width}>
            { propsData.map(plotProps => {
                return <Circle 
                    key={plotProps.displayValue} 
                    {...plotProps} 
                /> 
            })}
        </svg>
    )
}