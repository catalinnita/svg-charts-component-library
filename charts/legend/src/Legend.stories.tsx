import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Legend } from './Legend'
import * as packageJson from '../package.json'

export default {
  title: `legend/molecules/${packageJson.displayName}`,
  component: Legend,
} as ComponentMeta<typeof Legend>;

export const MainStory: ComponentStory<typeof Legend> = () => <Legend />;