import { getMax } from '@scrambled-data/data'
import LineHorizontal from '@scrambled-data/line-horizontal'
import LineVertical from '@scrambled-data/line-vertical'
import { BarChartDataI } from '../../bars-vertical/dist/types';

export function YAxis({
    x = 40,
    y = 0,
    height = 0,
    thickSize = 4,
    middleThickSize = 2,
    orientation = 'horizontal',
    offset = 5,
    showThicks = true,
    showMiddleThicks = false,
    showAxis = true,
    showLabels = true,
    data = [],
}) {
    const hMax = getMax<BarChartDataI>(data)
    const hRatio = height / hMax
    const values = Array.from({length: 10 + 1}, (v: number, i: number) => i*(hMax/10 + 1))

    const thicks = values.map((el) => ({
        pos: (y + height - el * hRatio),
        displayValue: Math.floor(el),
    }));

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
                size={height}
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