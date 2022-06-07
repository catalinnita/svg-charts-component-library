import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid } from './Grid'
import * as packageJson from '../package.json'

export default {
  title: `molecules/axis/${packageJson.displayName}`,
  component: Grid,
} as ComponentMeta<typeof Grid>;

export const LinearGrid: ComponentStory<typeof Grid> = () => <svg><Grid /></svg>;