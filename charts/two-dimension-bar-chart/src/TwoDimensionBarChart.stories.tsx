import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TwoDimensionBarChart } from './TwoDimensionBarChart'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: TwoDimensionBarChart,
} as ComponentMeta<typeof TwoDimensionBarChart>;

export const MainStory: ComponentStory<typeof TwoDimensionBarChart> = () => <TwoDimensionBarChart />;