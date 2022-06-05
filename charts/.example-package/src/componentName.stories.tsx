import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ComponentName } from './componentName'
import * as packageJson from '../package.json'

export default {
  title: `storiesChapter/storiesDomain/${packageJson.displayName}`,
  component: ComponentName,
} as ComponentMeta<typeof ComponentName>;

export const MainStory: ComponentStory<typeof ComponentName> = () => <ComponentName />;