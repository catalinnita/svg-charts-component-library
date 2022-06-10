import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { YearToYearTrendlineComparison } from './YearToYearTrendlineComparison'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: YearToYearTrendlineComparison,
} as ComponentMeta<typeof YearToYearTrendlineComparison>;

export const MainStory: ComponentStory<typeof YearToYearTrendlineComparison> = () => <YearToYearTrendlineComparison />;