import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerticalEvolutionBarChart } from './VerticalEvolutionBarChart'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: VerticalEvolutionBarChart,
} as ComponentMeta<typeof VerticalEvolutionBarChart>;

export const MainStory: ComponentStory<typeof VerticalEvolutionBarChart> = () => <VerticalEvolutionBarChart />;