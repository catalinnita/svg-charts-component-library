import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerticalRelativeStackedTimelineBarChart } from './VerticalRelativeStackedTimelineBarChart'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: VerticalRelativeStackedTimelineBarChart,
} as ComponentMeta<typeof VerticalRelativeStackedTimelineBarChart>;

export const MainStory: ComponentStory<typeof VerticalRelativeStackedTimelineBarChart> = () => <VerticalRelativeStackedTimelineBarChart />;