import BarVertical from '@scrambled-data/bar-vertical'
import GradientVertical from '@scrambled-data/gradient-vertical'
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

export function BarsVerticalStacked({
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
    const hMax = getMax(data.map(el => ({ 
        value: getSum(el.values.filter(el => el.value > 0))
    })))
    const hMin = getMin(data.map(el => ({ 
        value: getSum(el.values.filter(el => el.value < 0))
    })))

    const dataHeight = hMin < 0 ? hMax - hMin : hMax
    const hRatio = height / dataHeight
    const zeroPoint = Math.ceil(hMax * hRatio)
    const elements = data.length

    console.log({
        hMax,
        hMin,
        dataHeight,
        height,
        zeroPoint,
        hRatio,
        elements,
    })

    
    // for fixed width
    const gapValue = Math.ceil(gap * ((elements - 1) / elements))
    const barThickness = width ? Math.ceil(width / elements - gapValue) : thickness

    // for fixed thickeness
    const svgWidth = width || barThickness * elements + gap * ( elements - 1 )

    let it = 0
    const propsData = data.map(({values}, index) => {
        return values.map(({value, label, color, displayValue}, i) => {
            
            const x =  index * barThickness + index * gap

            const ySumPos = values.reduce((acc, curr) => {
                if(values.indexOf(curr) < i && curr.value > 0) {
                    acc += curr.value
                }
                return acc
            }, 0)

            const ySumNeg = values.reduce((acc, curr) => {
                if(values.indexOf(curr) < i && curr.value < 0) {
                    acc += curr.value * -1
                }
                return acc
            }, 0)
            
            const yRevPos = Math.ceil(ySumPos * hRatio)
            const yRevNeg = Math.ceil(ySumNeg * hRatio)
            const yabs = Math.ceil(value * hRatio)
            
            const y = value > 0 ? zeroPoint - yRevPos - yabs : zeroPoint + yRevNeg
            
            const size = value > 0 ? yabs : Math.ceil((0 - value) * hRatio)
            const modifiedColor =  getColors(colorType,  value, hMin, hMax, color, startColor, endColor)
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