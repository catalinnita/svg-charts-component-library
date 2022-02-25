// example.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Example } from './example';

export default {
  title: 'Example',
  component: Example,
} as ComponentMeta<typeof Example>;

export const Primary: ComponentStory<typeof Example> = () => <Example />;