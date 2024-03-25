import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { defaultMinimalisticButtonProps } from '../variants/MinimalisticButton';
import styled from 'styled-components';
import { ButtonProps } from '../../../types';

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

function renderButtonGroup(args: ButtonProps) {
  return (
    <ButtonGroup>
      <Button {...args} />
      <Button {...args} isMouseHover={true} />
      <Button {...args} isMouseClicked={true} />
      <Button {...args} disabled={true} />
      <Button {...args}>X</Button>
    </ButtonGroup>
  );
}

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button/Minimalistic',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const all: Story = {
  args: {
    ...defaultMinimalisticButtonProps,
  },
  render: renderButtonGroup,
};

export const Primary: Story = {
  args: {
    ...defaultMinimalisticButtonProps,
  },
};

export const Hovered: Story = {
  args: {
    ...defaultMinimalisticButtonProps,
    isMouseHover: true,
  },
};

export const Clicked: Story = {
  args: {
    ...defaultMinimalisticButtonProps,
    isMouseClicked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultMinimalisticButtonProps,
    disabled: true,
  },
};
// TODO
export const Icon: Story = {
  args: {
    ...defaultMinimalisticButtonProps,
    children: <>X</>,
  },
};
