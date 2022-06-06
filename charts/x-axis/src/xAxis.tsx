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
    size = 0, 
}) {
    const thicks = [
        {
            pos: 0,
            displayValue: ''
        },
        {
            pos: 20,
            displayValue: '$10'
        },
        {
            pos: 40,
            displayValue: '$20'
        },
        {
            pos: 60,
            displayValue: '$30'
        },
        {
            pos: 80,
            displayValue: '$40'
        },
        {
            pos: 100,
            displayValue: '$50'
        },
        {
            pos: 120,
            displayValue: '$60'
        },
        {
            pos: 140,
            displayValue: '$70'
        },
        {
            pos: 160,
            displayValue: '$80'
        },
    ]

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
                size={size}
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