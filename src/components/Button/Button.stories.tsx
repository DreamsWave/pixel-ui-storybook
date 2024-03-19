import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';
import { colors } from '../../constants';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    borderColor: colors[6],
    fontColor: colors[6],
    backgroundColor: colors[1],
    backgroundSecondaryColor: colors[3],
    children: 'Pixel button',
    uppercase: true,
    pixelSize: 4,
    fontSize: 32,
    compact: false,
    offsetSidePixels: 0,
    textOutlineColor: null,
    type: 'basic',
  },
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic',
};

export const Bulk = Template.bind({});
Bulk.args = {
  type: 'bulk',
  children: 'Bulk',
  borderColor: '#fff',
  compact: true,
  offsetSidePixels: 1,
};

export const Squared = Template.bind({});
Squared.args = {
  type: 'squared',
  children: 'Squared',
  borderColor: colors[6],
  fontColor: colors[6],
  backgroundColor: colors[1],
  backgroundSecondaryColor: colors[2],
  textOutlineColor: colors[1],
};

export const Minimalistic = Template.bind({});
Minimalistic.args = {
  type: 'minimalistic',
  children: 'Min',
  compact: true,
  uppercase: false,
  fontColor: colors[6],
  borderColor: colors[6],
  backgroundColor: '#ffffff',
  backgroundSecondaryColor: colors[2],
};

export const Glassmorphism = Template.bind({});
Glassmorphism.args = {
  type: 'glassmorphism',
  children: 'Glass',
  uppercase: false,
  fontColor: '#ffffff',
  borderColor: colors[4],
  backgroundColor: colors[2],
};

export default meta;
