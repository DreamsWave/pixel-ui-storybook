import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { defaultSquaredButtonProps } from '../variants/SquaredButton';
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
  title: 'Components/Button/Squared',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const all: Story = {
  args: {
    ...defaultSquaredButtonProps,
  },
  render: renderButtonGroup,
};

export const Primary: Story = {
  args: {
    ...defaultSquaredButtonProps,
  },
};

export const Hovered: Story = {
  args: {
    ...defaultSquaredButtonProps,
    isMouseHover: true,
  },
};

export const Clicked: Story = {
  args: {
    ...defaultSquaredButtonProps,
    isMouseClicked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultSquaredButtonProps,
    disabled: true,
  },
};
// TODO
export const Icon: Story = {
  args: {
    ...defaultSquaredButtonProps,
    children: <>X</>,
  },
};
