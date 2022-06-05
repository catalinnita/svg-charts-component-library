import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GradientHorizontal } from './gradientHorizontal'
import * as packageJson from '../package.json'

export default {
  title: `atoms/${packageJson.displayName}`,
  component: GradientHorizontal,
} as ComponentMeta<typeof GradientHorizontal>;

const commonProps = {
  id: 'gradient',
  size: 315,
  startColor: 'rgb(0,0,0)',
  endColor: 'rgb(255,255,255)',
}

export const Normal: ComponentStory<typeof GradientHorizontal> = () => 
  <svg width="315" height="50">
    <defs>
      <GradientHorizontal {...commonProps} />
    </defs>
    <rect x="0" y="0" width="315" height="50" fill="url(#gradient)"></rect>
  </svg>;