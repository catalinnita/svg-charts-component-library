import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BarVertical } from './barVertical'
import * as packageJson from '../package.json'

export default {
  title: packageJson.displayName,
  component: BarVertical,
} as ComponentMeta<typeof BarVertical>;

const commonProps = {
  x: 0,
  y: 0,
  size: 100,
  thickness: 50,
}

export const Normal: ComponentStory<typeof BarVertical> = () => <svg><BarVertical {...commonProps} /></svg>;
export const Long: ComponentStory<typeof BarVertical> = () => <svg><BarVertical {...commonProps} size={300} /></svg>;
export const Red: ComponentStory<typeof BarVertical> = () => <svg><BarVertical {...commonProps} color="red" /></svg>;
export const Narrow: ComponentStory<typeof BarVertical> = () => <svg><BarVertical {...commonProps} thickness={20} size={200} /></svg>;