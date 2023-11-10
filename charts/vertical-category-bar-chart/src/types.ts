import React from 'react'
import { BarsVerticalS, BarChartDataI } from '@scrambled-data/bars-vertical'
import { XAxisI } from '@scrambled-data/x-axis'
import { YAxisI } from '@scrambled-data/y-axis'
import { GridI } from '@scrambled-data/grid'
import { ButtonsI } from '@scrambled-data/buttons'
import { LabelsS } from '@scrambled-data/labels'
import { LegendI } from '@scrambled-data/legend'

export type VerticalCategoryBarChartI = {
    data: BarChartDataI[]
    width: number
    height: number
    padding: number[]
    svgStyle?: React.CSSProperties
    name: string
    barsVertical: BarsVerticalS
    xAxis?: XAxisI 
    yAxis?: YAxisI
    grid?: GridI
    buttons?: ButtonsI
    labels?: LabelsS
    legend?: LegendI
}