import LineHorizontal from '@scrambled-data/line-horizontal'
import LineVertical from '@scrambled-data/line-vertical'

export type XAxisI = {
    x?: number
    y?: number
    thickSize?: number
    middleThickSize?: number
    orientation?: 'horizontal' | 'vertical'
    offset?: number
    showThicks?: boolean
    showMiddleThicks?: boolean
    showAxis?: boolean
    showLabels?: boolean
    width?: number
    data: any[]
    gap?: number,
}

export function XAxis({
    x = 0,
    y = 100,
    thickSize = 4,
    middleThickSize = 2,
    orientation = 'horizontal',
    offset = 5,
    showThicks = true,
    showMiddleThicks = false,
    showAxis = true,
    showLabels = true,
    width = 0, 
    data = [],
    gap = 0,
}: XAxisI) {
    const elements = data.length
    const gapValue = gap * (elements - 1)
    const barThickness = width ? (width-gapValue) / elements : 0

    const thicks = data.map((el, index) => {
        const pos = (x + index * barThickness + index * gap + barThickness/2)
        return {
            pos,
            displayValue: el.label
        }
    })

    const style = (pos: number) => 
        orientation === 'vertical' ? {
            transform: `translate(${pos}, ${y + thickSize/2 + offset}) rotate(90)`,
            x: 0,
            y: 0,
        } : {
            transform: `translate(${pos}, ${y + thickSize/2 + offset})`,
            textAnchor: "middle",
            dominantBaseline: "hanging",
            x: 0,
            y: 0
        }

    const css = `
        .xAxisLabels text{
            font-size: 10px;
            font-family: 'arial';
            text-anchor: start;
            dominant-baseline: middle;
        }
    `

    return (
        <>
            <style>
                {`${css}`}
            </style>

            {showAxis && <LineHorizontal 
                x={x}
                y={y}
                size={width}
            />}
            
            {showThicks && 
                <g className="xAxisThicks">
                    {thicks.map(({pos, displayValue}) => (
                        <LineVertical 
                            key={`x-thick-${displayValue}`}
                            x={pos}
                            y={y-thickSize/2}
                            size={thickSize}
                        />
                    ))}
                </g>}

            {showMiddleThicks && 
                <g className="xAxisMiddleThicks">
                    {thicks.map(({pos, displayValue}, index) => {
                        if (index === 0) {
                            return null
                        }
                        return <LineVertical 
                            key={`x-middle-thick-${displayValue}`}
                            x={(pos + thicks[index-1].pos) / 2}
                            y={y-middleThickSize/2}
                            size={middleThickSize}
                        />
                    })}
                </g>}

            {showLabels && 
                <g className="xAxisLabels">
                    {thicks.map(({pos, displayValue}) => (
                        <text 
                            key={`x-label-${displayValue}`}
                            {...style(pos)}>
                                {displayValue}
                        </text>
                    ))}
                </g>}
        </>
    )
}