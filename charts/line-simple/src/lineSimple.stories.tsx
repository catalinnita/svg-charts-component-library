import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LineSimple } from './lineSimple'
import * as packageJson from '../package.json'
import data from './lineSimple.mocked.json'

export default {
  title: `molecules/lineCharts/${packageJson.displayName}`,
  component: LineSimple,
} as ComponentMeta<typeof LineSimple>;

export const Normal: ComponentStory<typeof LineSimple> = () => <LineSimple data={data} x={0} y={0} />;