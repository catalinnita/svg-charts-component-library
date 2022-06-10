import LineHorizontal from '@scrambled-data/line-horizontal'
import LineVertical from '@scrambled-data/line-vertical'

export function Grid({
    showHorizontal = true,
    showVertical = true,
    startX = 0,
    startY = 0,
    stepX = 20,
    stepY = 20,
    colorX = '#ccc',
    colorY = '#ccc',
    lineTypeX = 'solid',
    lineTypeY = 'solid',
    lineThicknessX = 1,
    lineThicknessY = 1,
    width = 100,
    height = 100
}) {
    const elementsNrX = (height - startX) / stepX + 1
    // @ts-ignore
    const horizontalLines = [...Array(elementsNrX).keys()].map(x => x * stepX + startX)

    const elementsNrY = (width - startY) / stepY + 1
    // @ts-ignore
    const verticalLines = [...Array(elementsNrY).keys()].map(y => y * stepY + startY)

    return (
        <>
            {showHorizontal && horizontalLines.map(pos => 
                <LineHorizontal 
                    key={`h-${pos}`}
                    x={0} 
                    y={pos}
                    size={100}
                    color={colorX}
                    thickness={lineThicknessX}
                    pattern={lineTypeX}
                />
            )}
            {showVertical && verticalLines.map(pos => 
                <LineVertical
                    key={`h-${pos}`}
                    x={pos} 
                    y={0}
                    size={100}
                    color={colorY}
                    thickness={lineThicknessY}
                    pattern={lineTypeY}
                />
            )}
        </>
    )
}