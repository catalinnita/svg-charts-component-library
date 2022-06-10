import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ComparisonHorizontalBarChart } from './ComparisonHorizontalBarChart'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: ComparisonHorizontalBarChart,
} as ComponentMeta<typeof ComparisonHorizontalBarChart>;

export const MainStory: ComponentStory<typeof ComparisonHorizontalBarChart> = () => <ComparisonHorizontalBarChart />;