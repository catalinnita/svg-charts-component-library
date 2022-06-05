import LineHorizontal from '@sd-svg/line-horizontal'
import LineVertical from '@sd-svg/line-vertical'

export function YAxis({
    x = 40,
    y = 0,
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
        ({
            transform: `translate(${x - thickSize/2 - offset}, ${pos})`,
            textAnchor: "end",
            dominantBaseline: "middle",
            x: 0,
            y: 0
        })

    return (
        <>
            {showAxis && <LineVertical 
                x={x}
                y={y}
                size={size}
            />}
            {thicks.map(({pos, displayValue}, index) => 
                <>
                    {showThicks && <LineHorizontal
                        key={`${displayValue}-thick`}
                        y={pos}
                        x={x-thickSize/2}
                        size={thickSize}
                    />}

                    {showMiddleThicks && index > 0  && <LineHorizontal
                        key={`${displayValue}-middle-thick`}
                        y={(pos + thicks[index-1].pos) / 2}
                        x={x-middleThickSize/2}
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