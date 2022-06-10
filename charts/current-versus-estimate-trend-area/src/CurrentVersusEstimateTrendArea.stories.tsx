import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CurrentVersusEstimateTrendArea } from './CurrentVersusEstimateTrendArea'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: CurrentVersusEstimateTrendArea,
} as ComponentMeta<typeof CurrentVersusEstimateTrendArea>;

export const MainStory: ComponentStory<typeof CurrentVersusEstimateTrendArea> = () => <CurrentVersusEstimateTrendArea />;