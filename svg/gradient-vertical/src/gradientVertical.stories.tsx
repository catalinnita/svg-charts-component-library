import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GradientVertical } from './gradientVertical'
import * as packageJson from '../package.json'

export default {
  title: packageJson.displayName,
  component: GradientVertical,
} as ComponentMeta<typeof GradientVertical>;

const commonProps = {
  id: 'gradient',
  size: 315,
  startColor: 'rgb(0,0,0)',
  endColor: 'rgb(255,255,255)',
}

export const Normal: ComponentStory<typeof GradientVertical> = () => 
  <svg width="50" height="315">
    <defs>
      <GradientVertical {...commonProps} />
    </defs>
    <rect x="0" y="0" width="50" height="315" fill="url(#gradient)"></rect>
  </svg>;