import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';
import { colors } from '../../constants';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    primaryColor: colors[1],
    secondaryColor: colors[4],
    borderColor: colors[6],
    fontColor: colors[6],
    children: 'Pixel button',
    uppercase: true,
    pixelSize: 4,
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Basic',
};

export const Bulk = Template.bind({});
Bulk.args = {
  variant: 'bulk',
  children: 'Bulk',
  primaryColor: colors[1],
  borderColor: '#fff',
};

export const Squared = Template.bind({});
Squared.args = {
  variant: 'squared',
  children: 'Squared',
  borderColor: colors[6],
  primaryColor: colors[2],
  secondaryColor: colors[3],
  fontColor: colors[6],
};

export const Minimalistic = Template.bind({});

Minimalistic.parameters = {
  backgrounds: { default: 'light' },
};

Minimalistic.args = {
  variant: 'minimalistic',
  children: 'Min',
  uppercase: false,
  primaryColor: '#fffffff',
  fontColor: colors[6],
  secondaryColor: colors[2],
  borderColor: colors[6],
};
