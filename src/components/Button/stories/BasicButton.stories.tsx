import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { defaultBasicButtonProps } from '../variants/BasicButton';
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
  title: 'Components/Button/Basic',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const all: Story = {
  args: {
    ...defaultBasicButtonProps,
  },
  render: renderButtonGroup,
};

export const Primary: Story = {
  args: {
    ...defaultBasicButtonProps,
  },
};

export const Hovered: Story = {
  args: {
    ...defaultBasicButtonProps,
    isMouseHover: true,
  },
};

export const Clicked: Story = {
  args: {
    ...defaultBasicButtonProps,
    isMouseClicked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultBasicButtonProps,
    disabled: true,
  },
};
// TODO
export const Icon: Story = {
  args: {
    ...defaultBasicButtonProps,
    children: <>X</>,
  },
};
