import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ScatterPlot } from './scatterPlot'
import * as packageJson from '../package.json'
import data from './scatterChart.mocked.json'

export default {
  title: `molecules/scatterPlot/${packageJson.displayName}`,
  component: ScatterPlot,
} as ComponentMeta<typeof ScatterPlot>;

export const FixedRadius: ComponentStory<typeof ScatterPlot> = () => <ScatterPlot data={data} width={1000} radius={3} x={0} y={0} />;
export const RadiusByValue: ComponentStory<typeof ScatterPlot> = () => <ScatterPlot data={data} width={1000} minRadius={3} maxRadius={20} x={0} y={0} />;

