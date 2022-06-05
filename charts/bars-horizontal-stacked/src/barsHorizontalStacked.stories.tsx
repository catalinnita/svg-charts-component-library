import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BarsHorizontalStacked } from './barsHorizontalStacked'
import * as packageJson from '../package.json'
import data from './barChartStacked.mocked.json'

export default {
  title: `molecules/bars/${packageJson.displayName}`,
  component: BarsHorizontalStacked,
} as ComponentMeta<typeof BarsHorizontalStacked>;

export const FixedThickness: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} />;

export const SpacedFixedThickness: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} gap={10} />;

export const FixedWidth: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} width={500} height={300} />;

export const SpacedFixedWidth: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} width={500} height={300} gap={10} />;

export const ColorUni: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} colorType="uni" startColor="#000000" thickness={150} />;

export const TransparencyGradient: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} colorType="transparent-gradient" startColor="#f2b7a4" />;

export const ReverseTransparencyGradient: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} colorType="reverse-transparent-gradient" startColor="#f2b7a4" />;

export const TwoColorsGradient: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} colorType="gradient" thickness={20} gap={5} startColor="#f28c8e" endColor="#2d6072" />;

export const HeatGradient: ComponentStory<typeof BarsHorizontalStacked> = () => <BarsHorizontalStacked data={data} x={0} y={0} colorType="heat-gradient" gap={5} startColor="#f3d2b5" endColor="#582841" />;