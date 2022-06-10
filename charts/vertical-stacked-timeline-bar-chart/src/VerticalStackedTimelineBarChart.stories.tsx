import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerticalStackedTimelineBarChart } from './VerticalStackedTimelineBarChart'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: VerticalStackedTimelineBarChart,
} as ComponentMeta<typeof VerticalStackedTimelineBarChart>;

export const MainStory: ComponentStory<typeof VerticalStackedTimelineBarChart> = () => <VerticalStackedTimelineBarChart />;