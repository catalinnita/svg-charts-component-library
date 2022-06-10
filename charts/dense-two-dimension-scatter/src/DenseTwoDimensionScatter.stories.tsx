import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DenseTwoDimensionScatter } from './DenseTwoDimensionScatter'
import * as packageJson from '../package.json'

export default {
  title: `organisms/${packageJson.displayName}`,
  component: DenseTwoDimensionScatter,
} as ComponentMeta<typeof DenseTwoDimensionScatter>;

export const MainStory: ComponentStory<typeof DenseTwoDimensionScatter> = () => <DenseTwoDimensionScatter />;