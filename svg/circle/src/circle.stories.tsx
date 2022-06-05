import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Circle } from './circle'
import * as packageJson from '../package.json'

export default {
  title: `atoms/${packageJson.displayName}`,
  component: Circle,
} as ComponentMeta<typeof Circle>;

const commonProps = {
  x: 15,
  y: 15,
  size: 15,
}

export const Normal: ComponentStory<typeof Circle> = () => <svg><Circle {...commonProps} /></svg>;