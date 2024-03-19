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
  },
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic',
};

export const Bulk = Template.bind({});
Bulk.args = {
  variant: 'bulk',
  children: 'Bulk',
  borderColor: '#fff',
};

export const Squared = Template.bind({});
Squared.args = {
  variant: 'squared',
  children: 'Squared',
  borderColor: colors[6],
  fontColor: colors[6],
  backgroundColor: colors[2],
};

export const Minimalistic = Template.bind({});
Minimalistic.args = {
  variant: 'minimalistic',
  children: 'Min',
  uppercase: false,
  fontColor: colors[6],
  borderColor: colors[6],
  backgroundColor: '#ffffff',
  backgroundSecondaryColor: colors[2],
};

export const Glassmorphism = Template.bind({});
Glassmorphism.args = {
  variant: 'glassmorphism',
  children: 'Glass',
  uppercase: false,
  fontColor: '#ffffff',
  borderColor: colors[4],
  backgroundColor: colors[2],
};

export default meta;
