import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HorizontalCategoryBarChart } from './HorizontalCategoryBarChart'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: HorizontalCategoryBarChart,
} as ComponentMeta<typeof HorizontalCategoryBarChart>;

export const MainStory: ComponentStory<typeof HorizontalCategoryBarChart> = () => <HorizontalCategoryBarChart />;