import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { defaultBasicButtonProps } from './variants/BasicButton';
import { defaultBulkButtonProps } from './variants/BulkButton';
import { defaultGlassmorphismButtonProps } from './variants/GlassmorphismButton';
import { defaultMinimalisticButtonProps } from './variants/MinimalisticButton';
import { defaultSquaredButtonProps } from './variants/SquaredButton';

const meta: Meta<typeof Button> = {
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...defaultBasicButtonProps,
};

export const Bulk = Template.bind({});
Bulk.args = {
  ...defaultBulkButtonProps,
};

export const Squared = Template.bind({});
Squared.args = {
  ...defaultSquaredButtonProps,
};

export const Minimalistic = Template.bind({});
Minimalistic.args = {
  ...defaultMinimalisticButtonProps,
};

export const Glassmorphism = Template.bind({});
Glassmorphism.args = {
  ...defaultGlassmorphismButtonProps,
};

export default meta;
