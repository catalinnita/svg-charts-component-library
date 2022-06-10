import BarsVertical from '@scrambled-data/bars-vertical'
import { BarChartDataI } from '../../bars-vertical/dist/types'

type Props = {
    data: BarChartDataI[]
}

export function VerticalCategoryBarChart({
    data
}: Props) {
    return (
        <div>
            <BarsVertical data={data} x={0} y={0} />
        </div>
    )
}