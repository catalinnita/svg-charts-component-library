import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BarHorizontal } from './barHorizontal'
import * as packageJson from '../package.json'

export default {
  title: packageJson.displayName,
  component: BarHorizontal,
} as ComponentMeta<typeof BarHorizontal>;

const commonProps = {
  x: 0,
  y: 0,
  size: 100,
  thickness: 50,
}

export const Normal: ComponentStory<typeof BarHorizontal> = () => <svg><BarHorizontal {...commonProps} /></svg>;
export const Long: ComponentStory<typeof BarHorizontal> = () => <svg><BarHorizontal {...commonProps} size={300} /></svg>;
export const Red: ComponentStory<typeof BarHorizontal> = () => <svg><BarHorizontal {...commonProps} color="red" /></svg>;
export const Narrow: ComponentStory<typeof BarHorizontal> = () => <svg><BarHorizontal {...commonProps} thickness={20} size={200} /></svg>;