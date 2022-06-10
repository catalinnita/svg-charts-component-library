import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccelerationTrendLine } from './AccelerationTrendLine'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: AccelerationTrendLine,
} as ComponentMeta<typeof AccelerationTrendLine>;

export const MainStory: ComponentStory<typeof AccelerationTrendLine> = () => <AccelerationTrendLine />;