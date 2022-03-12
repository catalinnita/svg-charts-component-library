import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LineHorizontal } from './lineHorizontal'
import * as packageJson from '../package.json'

export default {
  title: packageJson.displayName,
  component: LineHorizontal,
} as ComponentMeta<typeof LineHorizontal>;

const commonProps = {
  x: 0,
  y: 0,
  size: 100,
}

export const Normal: ComponentStory<typeof LineHorizontal> = () => <svg><LineHorizontal {...commonProps} /></svg>;
export const Thick: ComponentStory<typeof LineHorizontal> = () => <svg><LineHorizontal {...commonProps} thickness={3} /></svg>;
export const Red: ComponentStory<typeof LineHorizontal> = () => <svg><LineHorizontal {...commonProps} color="red" /></svg>;
export const Dashed: ComponentStory<typeof LineHorizontal> = () => <svg><LineHorizontal {...commonProps} pattern="2 3" /></svg>;