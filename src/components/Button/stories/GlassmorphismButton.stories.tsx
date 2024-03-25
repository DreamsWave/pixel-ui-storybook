import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { defaultGlassmorphismButtonProps } from '../variants/GlassmorphismButton';
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
  title: 'Components/Button/Glassmorphism',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const all: Story = {
  args: {
    ...defaultGlassmorphismButtonProps,
  },
  render: renderButtonGroup,
};

export const Primary: Story = {
  args: {
    ...defaultGlassmorphismButtonProps,
  },
};

export const Hovered: Story = {
  args: {
    ...defaultGlassmorphismButtonProps,
    isMouseHover: true,
  },
};

export const Clicked: Story = {
  args: {
    ...defaultGlassmorphismButtonProps,
    isMouseClicked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...defaultGlassmorphismButtonProps,
    disabled: true,
  },
};
// TODO
export const Icon: Story = {
  args: {
    ...defaultGlassmorphismButtonProps,
    children: <>X</>,
  },
};
