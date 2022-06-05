import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Example } from './example'
import * as packageJson from '../package.json'

export default {
  title: `atoms/${packageJson.displayName}`,
  component: Example,
} as ComponentMeta<typeof Example>;

export const Primary: ComponentStory<typeof Example> = () => <Example />;