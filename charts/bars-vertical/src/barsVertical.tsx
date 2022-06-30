import BarVertical from '@scrambled-data/bar-vertical'
import GradientVertical from '@scrambled-data/gradient-vertical'
import { getMin, getMax } from '@scrambled-data/data'
import { hexToRgb } from '@scrambled-data/colors'
import { BarChartDataI, ColorTypeT } from './types'
import { getColors } from './getColors'
import { generateColors } from './generateColors'

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
    r?: number,
    colors?: string[]
}

export function BarsVertical({
    x,
    y,
    height = 500,
    width,
    thickness = 50,
    gap = 0,
    data,
    startColor,
    endColor,
    r = 0,
    colorType,
    colors
}: Props) {
    const { 
        svg: colorsSvg, 
        colors: colorsData 
    } = generateColors(data, colors, colorType)

    const hMax = getMax<BarChartDataI>(data)
    const hMin = getMin<BarChartDataI>(data)
    const dataHeight = hMin < 0 ? hMax - hMin : hMax
    const hRatio = height / dataHeight
    const zeroPoint = y + Math.round(hMax * hRatio)
    const elements = data.length
    
    // for fixed width
    const gapValue = gap * (elements - 1)
    const barThickness = width ? (width-gapValue) / elements : thickness

    // for fixed thickeness
    // const svgWidth = width || barThickness * elements+ gap * ( elements - 1 )

    const propsData = data.map(({value, color}, index) => {
        const valNumber = parseFloat(value.toString())
        const propsX = x + index * barThickness + index * gap
        const propsY = y + valNumber > 0 ? Math.round(zeroPoint - (valNumber * hRatio)) : zeroPoint
        const size = valNumber > 0 ? Math.round(y + height - propsY + hMin * hRatio) : Math.round((0 - valNumber) * hRatio)

        return {
            ...data[index],
            color: colorsData[index],
            x: propsX,
            y: propsY,
            size: size,
        }
    })

    return (
        <>
            {colorType === 'heat-gradient' && <defs>
                <GradientVertical
                    id="gradient"
                    size={height}
                    startColor={`rgb(${Object.values(hexToRgb(endColor || '#000000')).join(',')})`}
                    endColor={`rgb(${Object.values(hexToRgb(startColor || '#000000')).join(',')})`}
                />
            </defs>}

            { colorsSvg }

            { propsData.map(barProps => {
                return <BarVertical 
                    r={r}
                    key={barProps.displayValue} 
                    thickness={barThickness} 
                    {...barProps} 
                /> 
            })}
       </>
    )
}