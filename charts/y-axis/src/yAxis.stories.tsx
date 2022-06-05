import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { YAxis } from './yAxis'
import * as packageJson from '../package.json'

export default {
  title: `molecules/axis/${packageJson.displayName}`,
  component: YAxis,
} as ComponentMeta<typeof YAxis>;

export const HorizontalLabels: ComponentStory<typeof YAxis> = () => <svg width="300" height="200"><YAxis size={200} /></svg>;
export const NoTicks: ComponentStory<typeof YAxis> = () => <svg width="300" height="200"><YAxis size={200} showThicks={false} /></svg>;
export const NoAxis: ComponentStory<typeof YAxis> = () => <svg width="300" height="200"><YAxis size={200} showAxis={false} /></svg>;
export const NoLabels: ComponentStory<typeof YAxis> = () => <svg width="300" height="200"><YAxis size={200} showLabels={false} /></svg>;
export const WithMiddleThicks: ComponentStory<typeof YAxis> = () => <svg width="300" height="200"><YAxis size={200} showMiddleThicks /></svg>;