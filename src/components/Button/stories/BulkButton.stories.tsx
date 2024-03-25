import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { defaultBulkButtonProps } from '../variants/BulkButton';
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
  title: 'Components/Button/Bulk',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const all: Story = {
  args: {
    ...defaultBulkButtonProps,
  },
  render: renderButtonGroup,
};

export const Primary: Story = {
  args: {
    ...defaultBulkButtonProps,
  },
};

export const Hovered: Story = {
  args: {
    ...defaultBulkButtonProps,
    isMouseHover: true,
  },
};

export const Clicked: Story = {
  args: {
    ...defaultBulkButtonProps,
    isMouseClicked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultBulkButtonProps,
    disabled: true,
  },
};
// TODO
export const Icon: Story = {
  args: {
    ...defaultBulkButtonProps,
    children: <>X</>,
  },
};
