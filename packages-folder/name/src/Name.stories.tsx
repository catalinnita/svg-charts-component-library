import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Name } from './Name'
import * as packageJson from '../package.json'

export default {
  title: `storiesChapter/storiesDomain/${packageJson.displayName}`,
  component: Name,
} as ComponentMeta<typeof Name>;

export const MainStory: ComponentStory<typeof Name> = () => <Name />;