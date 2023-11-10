import BarsVertical from '@scrambled-data/bars-vertical'
import XAxis from '@scrambled-data/x-axis'
import YAxis from '@scrambled-data/y-axis'
import Grid from '@scrambled-data/grid'
import Buttons from '@scrambled-data/buttons'
import Legend from '@scrambled-data/legend'
import { VerticalCategoryBarChartI } from './types'

export function VerticalCategoryBarChart({
    data,
    width = 800,
    height = 400,
    padding = [50, 20, 80, 60],
    svgStyle = {},
    name,
    barsVertical,
    xAxis = {},
    yAxis = {},
    grid = {},
    buttons = {},
    labels = {},
    legend = {},
}: VerticalCategoryBarChartI) {
    const barsX = padding[3]
    const barsY = padding[0]
    const barsWidth = width - padding[1] - padding[3]
    const barsHeight = height - padding[0] - padding[2]

    return (
        <>
            <svg 
                data-svg-name={name} 
                height={height} 
                width={width} 
                style={svgStyle}>
                <Legend 
                    {...legend}
                    chartWidth={width}
                    chartHeight={height}
                    chartPadding={padding}
                />

                { data.length && 
                    <>
                        <Grid
                            {...grid}
                            startX={barsX}
                            startY={barsY}
                            width={barsWidth}
                            height={barsHeight}
                            data={data}
                            gap={barsVertical.gap}
                            showVertical={false}
                        />
                        <BarsVertical 
                            {...barsVertical}
                            labels={labels}
                            data={data} 
                            width={barsWidth}
                            height={barsHeight}
                            x={barsX}
                            y={barsY}
                        />
                        <XAxis 
                            {...xAxis}
                            y={barsHeight + barsY}
                            x={barsX}
                            thickSize={6}
                            width={barsWidth}
                            data={data}
                            gap={barsVertical.gap}
                            orientation="vertical"
                        />
                        <YAxis 
                            {...yAxis}
                            x={barsX}
                            y={barsY}
                            thickSize={6}
                            height={barsHeight}
                            data={data}
                            orientation="vertical"
                        />
                    </>
                }
            </svg>

            <Buttons 
                {...buttons}
                filename={name} 
                data={data}
            />
            
        </>
    )
}