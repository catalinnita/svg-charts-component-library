import LineHorizontal from '@scrambled-data/line-horizontal'
import LineVertical from '@scrambled-data/line-vertical'

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
}) {
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
    console.log(thicks)

    const style = (pos: number) => 
        orientation === 'vertical' ? {
            transform: `translate(${pos}, ${y + thickSize/2 + offset}) rotate(90)`,
            textAnchor: "start",
            dominantBaseline: "middle",
            x: 0,
            y: 0,
        } : {
            transform: `translate(${pos}, ${y + thickSize/2 + offset})`,
            textAnchor: "middle",
            dominantBaseline: "hanging",
            x: 0,
            y: 0
        }

    return (
        <>
            {showAxis && <LineHorizontal 
                x={x}
                y={y}
                size={width}
            />}
            {thicks.map(({pos, displayValue}, index) => 
                <>
                    {showThicks && <LineVertical 
                        key={`${displayValue}-thick`}
                        x={pos}
                        y={y-thickSize/2}
                        size={thickSize}
                    />}

                    {showMiddleThicks && index > 0  && <LineVertical 
                        key={`${displayValue}-middle-thick`}
                        x={(pos + thicks[index-1].pos) / 2}
                        y={y-middleThickSize/2}
                        size={middleThickSize}
                    />}
                    {showLabels && <text
                        style={{
                            fontSize: '10px',
                            fontFamily: 'arial',
                        }}
                        {...style(pos)}
                    >{displayValue}</text>}
                </>
            )}
        </>
    )
}