import BarVertical from '@scrambled-data/bar-vertical'
import { getMin, getMax } from '@scrambled-data/data'
import { BarChartDataI, BarsVerticalI, BarsVerticalS } from './types'
import { generateColors } from './generateColors'
import Labels from '@scrambled-data/labels'

export function BarsVertical({
    x = 0,
    y = 0,
    height = 500,
    width,
    thickness = 50,
    gap = 0,
    data,
    r = 0,
    colorType,
    colors,
    labels = {}
}: BarsVerticalI & BarsVerticalS) {
    const { 
        svg: colorsSvg, 
        colors: colorsData 
    } = generateColors(data, colors, colorType)
    console.log({labels})
    const hMax = getMax<BarChartDataI>(data)
    const hMin = getMin<BarChartDataI>(data)
    const dataHeight = hMin < 0 ? hMax - hMin : hMax
    const hRatio = height / dataHeight
    const zeroPoint = y + hMax * hRatio
    const elements = data.length
    
    // for fixed width
    const gapValue = gap * (elements - 1)
    const barThickness = width ? (width-gapValue) / elements : thickness

    // for fixed thickeness
    // const svgWidth = width || barThickness * elements+ gap * ( elements - 1 )

    const propsData = data.map(({value, color}, index) => {
        const valNumber = parseFloat(value.toString())
        const propsX = x + index * barThickness + index * gap
        const propsY = y + valNumber > 0 ? zeroPoint - (valNumber * hRatio) : zeroPoint
        const size = valNumber > 0 ? y + height - propsY + hMin * hRatio : (0 - valNumber) * hRatio

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
            { colorsSvg }
            { propsData.map((barProps, index) => {
                return (
                    <BarVertical 
                        className={`bar-${index}`}
                        r={r}
                        key={barProps.displayValue} 
                        thickness={barThickness} 
                        {...barProps} 
                    />  
            )})}        

            <Labels 
                {...labels}
                barThickness={barThickness}
                propsData={propsData}
            />    
       </>
    )
}