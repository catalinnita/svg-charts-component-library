import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Labels } from './Labels'
import * as packageJson from '../package.json'

export default {
  title: `molecules/labels/${packageJson.displayName}`,
  component: Labels,
} as ComponentMeta<typeof Labels>;

export const MainStory: ComponentStory<typeof Labels> = () => <Labels />;