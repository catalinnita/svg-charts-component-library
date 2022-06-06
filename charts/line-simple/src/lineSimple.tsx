import BarVertical from '@scrambled-data/bar-vertical'
import Circle from '@scrambled-data/circle'
import GradientVertical from '@scrambled-data/gradient-vertical'
import { getMin, getMax } from '@scrambled-data/data'
import { hexToRgb } from '@scrambled-data/colors'
import { LineChartDataI, ColorTypeT } from './types'
import { getColors } from './getColors'

export type Props = {
    x: number,
    y: number,
    width?: number,
    height?: number,
    thickness?: number,
    gap?: number,
    data: Array<LineChartDataI>,
    startColor?: string,
    endColor?: string,
    colorType?: ColorTypeT,
}

export function LineSimple({
    x,
    y,
    height = 500,
    width = 1000,
    thickness = 50,
    gap = 0,
    data,
    startColor,
    endColor,
    colorType = 'data',
}: Props) {
    // group by field?!
    

    const hMax = getMax<any>(data)
    const hMin = getMin<any>(data)
    const dataHeight = hMin < 0 ? hMax - hMin : hMax
    const hRatio = height / dataHeight
    const zeroPoint = Math.round(hMax * hRatio)

    const years = data.reduce((acc: any[], curr) => {
        if (acc.includes(curr.Year)) {
            return acc
        }
        return acc = [
            ...acc,
            curr.Year
        ]
    }, []).sort()
    
    console.log({years})

    // // for fixed width
    // const gapValue = Math.round(gap * ((elements - 1) / elements))
    // const barThickness = width ? Math.round(width / elements - gapValue) : thickness

    // // for fixed thickeness
    // const svgWidth = width || barThickness * elements+ gap * ( elements - 1 )

    const grouppedData = data.reduce((acc: Record<any, any>, curr) => {
        acc[curr.Entity] = acc[curr.Entity] || []
        acc[curr.Entity].push(curr)
        
        return acc

    }, {})

    const xRatio = width / years.length
    console.log({xRatio})

    const propsData = Object.values(grouppedData).map((entry, index) => {        
        const points = entry.map(({value, Year}: LineChartDataI) => {
            const x = years.indexOf(Year) * xRatio
            const y = zeroPoint - value * hRatio

            return {x, y}
        })
        
        return {
            // ...data[index],
            // color: getColors(colorType,  value, hMin, hMax, color, startColor, endColor),
            // x,
            // y,
            // size,
            label: index,
            points,
            pointsString: points.map(({x, y}: {x: number, y: number}) => `${x},${y}`).join(' '),
            color: `rgb(${Math.random() * 200}, ${Math.random() * 200}, ${Math.random() * 200})`
        }
    })

    return (
        <svg height={height} width={width}>
           { propsData.map(lineProps => {
                return <>
                    <polyline 
                        key={lineProps.label} 
                        points={lineProps.pointsString} 
                        fill="none"
                        stroke={lineProps.color}
                    />
                    {lineProps.points.map((({x, y}: {x: number, y: number}) => 
                        <Circle 
                            key={`${x}-${y}`} 
                            x={x} 
                            y={y} 
                            size={1.5} 
                            color={lineProps.color}
                        />
                    ))}
                </>
           })}
        </svg>
    )
}