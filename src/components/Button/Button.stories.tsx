import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { defaultBasicButtonProps } from './variants/BasicButton';
import { defaultBulkButtonProps } from './variants/BulkButton';
import { defaultGlassmorphismButtonProps } from './variants/GlassmorphismButton';
import { defaultMinimalisticButtonProps } from './variants/MinimalisticButton';
import { defaultSquaredButtonProps } from './variants/SquaredButton';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    ...defaultBasicButtonProps,
  },
};

export const Bulk: Story = {
  args: {
    ...defaultBulkButtonProps,
  },
};

export const Glassmorphism: Story = {
  args: {
    ...defaultGlassmorphismButtonProps,
  },
};

export const Minimalistic: Story = {
  args: {
    ...defaultMinimalisticButtonProps,
  },
};

export const Squared: Story = {
  args: {
    ...defaultSquaredButtonProps,
  },
};
