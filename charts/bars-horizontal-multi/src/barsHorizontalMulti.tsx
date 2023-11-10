import BarHorizontal from '@scrambled-data/bar-horizontal'
import GradientHorizontal from '@scrambled-data/gradient-horizontal'
import { getMin, getMax } from '@scrambled-data/data'
import { hexToRgb } from '@scrambled-data/colors'
import { BarChartMultiDataI, ColorTypeT } from './types'
import { getColors } from './getColors'

export type Props = {
    x: number,
    y: number,
    width?: number,
    height?: number,
    thickness?: number,
    gap?: number,
    groupGap?: number,
    data: BarChartMultiDataI[],
    startColor?: string,
    endColor?: string,
    colorType?: ColorTypeT,
}

export function BarsHorizontalMulti({
    x,
    y,
    height,
    width = 500,
    thickness = 50,
    gap = 0,
    groupGap = 30,
    data,
    startColor,
    endColor,
    colorType = 'data',
}: Props) {
    const wMax = getMax(data.map(el => el.values).flat())
    const wMin = getMin(data.map(el => el.values).flat())
    const dataWidth = wMin < 0 ? wMax - wMin : wMax
    const wRatio = width / dataWidth
    const zeroPoint = (0 - wMin) * wRatio
    const groups = data.length
    const elements = data.map(el => el.values).flat().length
    const gGap = groupGap - gap > 0 ? groupGap - gap : 0
    
    // for fixed width
    const gapWidth = gap * (elements - 1) + gGap * (groups - 1)
    const barThickness = height ? (height - gapWidth) / elements  : thickness
    // for fixed thickeness
    const svgHeight = height || barThickness * elements + gGap * ( groups - 1 ) + gap * ( elements - 1 )

    let it = 0
    const propsData = data.map(({values}, index) => {
        return values.map(({value, color, displayValue}, i) => {
            const x = value < 0 ? zeroPoint + value * wRatio : zeroPoint
            const y =  it * barThickness + it * gap + index * gGap
            const size = value < 0 ? (0 - value) * wRatio : value * wRatio
            it += 1
            return {
                displayValue,
                color: getColors(colorType, value, wMin, wMax, color, startColor, endColor),
                x,
                y,
                size,
            }
        })
        
    }).flat()
    console.log(propsData)

    return (
        <svg height={svgHeight} width={width}>
            {colorType === 'heat-gradient' && <defs>
                <GradientHorizontal
                    id="gradient"
                    size={width}
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