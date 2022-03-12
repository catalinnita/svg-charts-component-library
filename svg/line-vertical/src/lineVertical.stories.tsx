import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LineVertical } from './lineVertical'
import * as packageJson from '../package.json'

export default {
  title: packageJson.displayName,
  component: LineVertical,
} as ComponentMeta<typeof LineVertical>;

const commonProps = {
  x: 0,
  y: 0,
  size: 100,
}

export const Normal: ComponentStory<typeof LineVertical> = () => <svg><LineVertical {...commonProps} /></svg>;
export const Thick: ComponentStory<typeof LineVertical> = () => <svg><LineVertical {...commonProps} thickness={3} /></svg>;
export const Red: ComponentStory<typeof LineVertical> = () => <svg><LineVertical {...commonProps} color="red" /></svg>;
export const Dashed: ComponentStory<typeof LineVertical> = () => <svg><LineVertical {...commonProps} pattern="2 3" /></svg>;