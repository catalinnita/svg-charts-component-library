import BarHorizontal from '@sd-svg/bar-horizontal'
import GradientVertical from '@sd-svg/gradient-vertical'
import { getMin, getMax } from '@sd/data'
import { hexToRgb } from '@sd/colors'
import { BarChartDataI, ColorTypeT } from './types'
import { getColors } from './getColors'

export type Props = {
    x: number,
    y: number,
    width?: number,
    height?: number,
    thickness?: number,
    gap?: number,
    data: BarChartDataI[],
    startColor?: string,
    endColor?: string,
    colorType?: ColorTypeT,
}

export function BarChartHorizontal({
    x,
    y,
    height,
    width = 500,
    thickness = 50,
    gap = 0,
    data,
    startColor,
    endColor,
    colorType = 'data',
}: Props) {
    const wMax = getMax<BarChartDataI>(data)
    const wMin = getMin<BarChartDataI>(data)
    const dataWidth = wMin < 0 ? wMax - wMin : wMax
    const wRatio = width / dataWidth
    const zeroPoint = Math.round((0 - wMin) * wRatio)
    const elements = data.length
    
    // for fixed width
    const gapValue = Math.round(gap * ((elements - 1) / elements))
    const barThickness = height ? Math.round(height / elements - gapValue) : thickness

    // for fixed thickeness
    const svgHeight = height || barThickness * elements + gap * ( elements - 1 )

    const propsData = data.map(({value, color}, index) => {
        const x = value < 0 ? Math.round(zeroPoint + value * wRatio) : zeroPoint
        const y =  index * barThickness + index * gap
        const size = value < 0 ? Math.round((0 - value) * wRatio) : Math.round(value * wRatio)

        return {
            ...data[index],
            color: getColors(colorType, value, wMin, wMax, color, startColor, endColor),
            x,
            y,
            size,
        }
    })

    return (
        <svg height={svgHeight} width={width}>
            {colorType === 'heat-gradient' && <defs>
                <GradientVertical
                    id="gradient"
                    size={height}
                    startColor={`rgb(${Object.values(hexToRgb(endColor || '#000000')).join(',')})`}
                    endColor={`rgb(${Object.values(hexToRgb(startColor || '#000000')).join(',')})`}
                />
            </defs>}

            { propsData.map(barProps => {
                return <BarHorizontal 
                    key={barProps.displayValue} 
                    thickness={barThickness} 
                    {...barProps} 
                /> 
            })}
        </svg>
    )
}