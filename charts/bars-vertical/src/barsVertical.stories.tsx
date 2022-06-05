import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BarsVertical } from './barsVertical'
import * as packageJson from '../package.json'
import data from './barChart.mocked.json'

export default {
  title: `molecules/bars/${packageJson.displayName}`,
  component: BarsVertical,
} as ComponentMeta<typeof BarsVertical>;

export const FixedThickness: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} />;

export const SpacedFixedThickness: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} gap={10} />;

export const FixedWidth: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} width={500} height={300} />;

export const SpacedFixedWidth: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} width={500} height={300} gap={10} />;

export const ColorUni: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} colorType="uni" startColor="#000000" thickness={150} />;

export const TransparencyGradient: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} colorType="transparent-gradient" startColor="#f2b7a4" />;

export const ReverseTransparencyGradient: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} colorType="reverse-transparent-gradient" startColor="#f2b7a4" />;

export const TwoColorsGradient: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} colorType="gradient" thickness={20} gap={5} startColor="#f28c8e" endColor="#2d6072" />;

export const HeatGradient: ComponentStory<typeof BarsVertical> = () => <BarsVertical data={data} x={0} y={0} colorType="heat-gradient" gap={5} startColor="#f3d2b5" endColor="#582841" />;