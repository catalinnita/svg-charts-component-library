import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { XAxis } from './xAxis'
import * as packageJson from '../package.json'

export default {
  title: `molecules/axis/${packageJson.displayName}`,
  component: XAxis,
} as ComponentMeta<typeof XAxis>;

export const HorizontalLabels: ComponentStory<typeof XAxis> = () => <svg width="300" height="200"><XAxis size={300} /></svg>;
export const VerticalLabels: ComponentStory<typeof XAxis> = () => <svg width="300" height="200"><XAxis size={300} orientation="vertical"/></svg>;
export const NoTicks: ComponentStory<typeof XAxis> = () => <svg width="300" height="200"><XAxis size={300} showThicks={false} /></svg>;
export const NoAxis: ComponentStory<typeof XAxis> = () => <svg width="300" height="200"><XAxis size={300} showAxis={false} /></svg>;
export const NoLabels: ComponentStory<typeof XAxis> = () => <svg width="300" height="200"><XAxis size={300} showLabels={false} /></svg>;
export const WithMiddleThicks: ComponentStory<typeof XAxis> = () => <svg width="300" height="200"><XAxis size={300} showMiddleThicks /></svg>;