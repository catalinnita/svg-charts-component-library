import BarVertical from '@scrambled-data/bar-vertical'
import GradientVertical from '@scrambled-data/gradient-vertical'
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

export function BarsVerticalMulti({
    x,
    y,
    height = 500,
    width,
    thickness = 50,
    gap = 0,
    groupGap = 30,
    data,
    startColor,
    endColor,
    colorType = 'data',
}: Props) {
    const hMax = getMax(data.map(el => el.values).flat())
    const hMin = getMin(data.map(el => el.values).flat())
    const dataHeight = hMin < 0 ? hMax - hMin : hMax
    const hRatio = height / dataHeight
    const zeroPoint = hMax * hRatio
    const groups = data.length
    const elements = data.map(el => el.values).flat().length
    const gGap = groupGap - gap > 0 ? groupGap - gap : 0
    
    // for fixed width
    const gapWidth = gap * (elements - 1) + gGap * (groups - 1)
    const barThickness = width ? (width - gapWidth) / elements  : thickness
    // for fixed thickeness
    const svgWidth = width || barThickness * elements + gGap * ( groups - 1 ) + gap * ( elements - 1 )

    let it = 0
    const propsData = data.map(({values}, index) => {
        return values.map(({value, color, displayValue}, i) => {
            const x =  it * barThickness + it * gap + index * gGap
            const y = value > 0 ? zeroPoint - value * hRatio : zeroPoint
            const size = value > 0 ? height - y + hMin * hRatio : (0 - value) * hRatio
            it += 1
            return {
                displayValue,
                color: getColors(colorType,  value, hMin, hMax, color, startColor, endColor),
                x,
                y,
                size,
            }
        })
        
    }).flat()
    console.log(propsData)

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