import { getMax } from '@scrambled-data/data'
import { BarChartDataI } from '../../bars-vertical/dist/types';
import LineHorizontal from '@scrambled-data/line-horizontal'
import LineVertical from '@scrambled-data/line-vertical'

export function Grid({
    showHorizontal = true,
    showVertical = true,
    startX = 0,
    startY = 0,
    stepX = 20,
    stepY = 20,
    colorX = '#ddd',
    colorY = '#ddd',
    lineTypeX = '2 1',
    lineTypeY = '2 1',
    lineThicknessX = 1,
    lineThicknessY = 1,
    width = 100,
    height = 100,
    data = [],
    gap = 0,
}) {
    const hMax = getMax<BarChartDataI>(data)
    const hRatio = height / hMax
    const values = Array.from({length: 10 + 1}, (v: number, i: number) => i*(hMax/10 + 1))

    const horizontalLines = values.map((el) => ({
        pos: startY + height - el * hRatio,
        displayValue: Math.floor(el),
    }));


    const elements = data.length
    const gapValue = gap * (elements - 1)
    const barThickness = width ? (width-gapValue) / elements : 0

    const verticalLines = data.map((el, index) => {
        const pos = startX + index * barThickness + index * gap + barThickness/2
        return {
            pos,
            displayValue: el.label
        }
    })

    console.log({verticalLines, horizontalLines})

    return (
        <>
            {showHorizontal && horizontalLines.map(({pos}) => 
                <LineHorizontal 
                    key={`h-${pos}`}
                    x={startX} 
                    y={pos}
                    size={width}
                    color={colorX}
                    thickness={lineThicknessX}
                    pattern={lineTypeX}
                />
            )}
            {showVertical && verticalLines.map(({pos}) => 
                <LineVertical
                    key={`v-${pos}`}
                    x={pos} 
                    y={startY}
                    size={height}
                    color={colorY}
                    thickness={lineThicknessY}
                    pattern={lineTypeY}
                />
            )}
        </>
    )
}