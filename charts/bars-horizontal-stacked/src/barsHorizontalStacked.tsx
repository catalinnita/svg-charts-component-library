import BarHorizontal from '@scrambled-data/bar-horizontal'
import GradientHorizontal from '@scrambled-data/gradient-horizontal'
import { getMin, getMax, getSum } from '@scrambled-data/data'
import { hexToRgb } from '@scrambled-data/colors'
import { BarChartMultiDataI, ColorTypeT,  } from './types'
import { getColors } from './getColors'

export type Props = {
    x: number,
    y: number,
    width?: number,
    height?: number,
    thickness?: number,
    gap?: number,
    data: BarChartMultiDataI[],
    startColor?: string,
    endColor?: string,
    colorType?: ColorTypeT,
}

export function BarsHorizontalStacked({
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
    const wMax = getMax(data.map(el => ({ 
        value: getSum(el.values.filter(el => el.value > 0))
    })))
    const wMin = getMin(data.map(el => ({ 
        value: getSum(el.values.filter(el => el.value < 0))
    })))

    const dataWidth = wMin < 0 ? wMax - wMin : wMax
    const wRatio = width / dataWidth
    const zeroPoint = (0 - wMin) * wRatio
    const elements = data.length
    
    // for fixed width
    const gapValue = gap * ((elements - 1) / elements)
    const barThickness = height ? height / elements - gapValue : thickness

    // for fixed thickeness
    const svgHeight = height || barThickness * elements + gap * ( elements - 1 )

    let it = 0
    const propsData = data.map(({values}, index) => {
        return values.map(({value, label, color, displayValue}, i) => {
            
            const y =  index * barThickness + index * gap

            const xSumPos = values.reduce((acc, curr) => {
                if(values.indexOf(curr) < i && curr.value > 0) {
                    acc += curr.value
                }
                return acc
            }, 0)

            const xSumNeg = values.reduce((acc, curr) => {
                if(values.indexOf(curr) < i && curr.value < 0) {
                    acc += curr.value * -1
                }
                return acc
            }, 0)
            
            const xRevPos = xSumPos * wRatio
            const xRevNeg = xSumNeg * wRatio
            const xabs = value * wRatio
            
            const x = value < 0 ? zeroPoint - xRevNeg + xabs : zeroPoint + xRevPos
            
            const size = value < 0 ? (0 - value) * wRatio :  value * wRatio
            const modifiedColor =  getColors(colorType,  value, wMin, wMax, color, startColor, endColor)
            return {
                displayValue,
                color: modifiedColor,
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