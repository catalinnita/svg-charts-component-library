import BarVertical from '@sd-svg/bar-vertical'
import GradientVertical from '@sd-svg/gradient-vertical'
import { getMin, getMax } from '@sd/data'
import { hexToRgb, interpolateColor } from '@sd/colors'
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

export function BarChart({
    x,
    y,
    height = 500,
    width,
    thickness = 50,
    gap = 0,
    data,
    startColor,
    endColor,
    colorType = 'data',
}: Props) {
    const hMax = getMax<BarChartDataI>(data)
    const hMin = getMin<BarChartDataI>(data)
    const dataHeight = hMin < 0 ? hMax - hMin : hMax
    const hRatio = height / dataHeight
    const zeroPoint = Math.round(hMax * hRatio)
    const elements = data.length
    
    // for fixed width
    const gapValue = Math.round(gap * ((elements - 2) / elements))
    const barThickness = width ? Math.round(width / elements - gapValue) : thickness

    // for fixed thickeness
    const svgWidth = width || barThickness * elements+ gap * ( elements - 1 )

    const propsData = data.map(({value, color}, index) => {
        const x =  index * barThickness + index * gap
        const y = value > 0 ? Math.round(zeroPoint - value * hRatio) : zeroPoint
        const size = value > 0 ? Math.round(height - y + hMin * hRatio) : Math.round((0 - value) * hRatio)

        return {
            ...data[index],
            color: getColors(colorType,  value, hMin, hMax, color, startColor, endColor),
            x,
            y,
            size,
        }
    })

    return (
        <svg height={height} width={svgWidth}>
            {colorType === 'heat-gradient' && <defs>
                <GradientVertical
                    id="gradient"
                    size={height}
                    startColor={`rgb(${Object.values(hexToRgb(endColor || '#000000')).join(',')})`}
                    endColor={`rgb(${Object.values(hexToRgb(startColor || '#000000')).join(',')})`}
                />
            </defs>}

            { propsData.map(barProps => {
                return <BarVertical 
                    key={barProps.displayValue} 
                    thickness={barThickness} 
                    {...barProps} 
                /> 
            })}
        </svg>
    )
}