import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Buttons } from './Buttons'
import * as packageJson from '../package.json'

export default {
  title: `molecules/buttons/${packageJson.displayName}`,
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

export const MainStory: ComponentStory<typeof Buttons> = () => <Buttons />;