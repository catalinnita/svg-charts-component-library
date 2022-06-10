import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TrendlineApproximationOnScatteredValues } from './TrendlineApproximationOnScatteredValues'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: TrendlineApproximationOnScatteredValues,
} as ComponentMeta<typeof TrendlineApproximationOnScatteredValues>;

export const MainStory: ComponentStory<typeof TrendlineApproximationOnScatteredValues> = () => <TrendlineApproximationOnScatteredValues />;