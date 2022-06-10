import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerticalCategoryBarChart } from './VerticalCategoryBarChart'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: VerticalCategoryBarChart,
} as ComponentMeta<typeof VerticalCategoryBarChart>;

export const MainStory: ComponentStory<typeof VerticalCategoryBarChart> = () => <VerticalCategoryBarChart />;