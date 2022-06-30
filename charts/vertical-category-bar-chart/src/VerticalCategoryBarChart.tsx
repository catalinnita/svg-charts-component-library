import BarsVertical, { BarsVerticalProps } from '@scrambled-data/bars-vertical'
import XAxis from '@scrambled-data/x-axis'
import YAxis from '@scrambled-data/y-axis'
import Grid from '@scrambled-data/grid'
import { BarChartDataI } from '../../bars-vertical/dist/types'

type Props = {
    data: BarChartDataI[]
    width: number
    height: number
    padding: number[]
    title: string
    colors?: string[]
} & BarsVerticalProps

export function VerticalCategoryBarChart({
    data,
    width = 800,
    height = 400,
    padding = [50, 20, 80, 60],
    title,
    colorType,
    colors,
    ...rest
}: Props) {
    
    const barsX = padding[3]
    const barsY = padding[0]
    const barsWidth = width - padding[1] - padding[3]
    const barsHeight = height - padding[0] - padding[2]

    return (
        <svg height={height} width={width} style={{background: '#fff', border: '1px solid #ddd'}}>
            <text 
                y={barsY/2} 
                x={width/2}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                    fontFamily: 'system-ui',
                    fontWeight: 400,
                    fontSize: '18px',
                    letterSpacing: '-0.025em',
                    fill: '#666'
            }}>{title}</text>
            { data.length && 
                <>
                    <Grid
                        startX={barsX}
                        startY={barsY}
                        width={barsWidth}
                        height={barsHeight}
                        data={data}
                        gap={rest.gap}
                        showVertical={false}
                    />
                    <BarsVertical 
                        data={data} 
                        width={barsWidth}
                        height={barsHeight}
                        colorType={colorType}
                        colors={colors}
                        {...rest}
                        x={barsX}
                        y={barsY}
                        r={3}
                    />
                    <XAxis 
                        y={barsHeight + barsY}
                        x={barsX}
                        thickSize={6}
                        width={barsWidth}
                        data={data}
                        gap={rest.gap}
                        orientation="vertical"
                    />
                    <YAxis 
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
    )
}