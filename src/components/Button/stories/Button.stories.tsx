import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import styled from 'styled-components';
import BulkButton from '../variants/BulkButton';
import BasicButton from '../variants/BasicButton';
import GlassmorphismButton from '../variants/GlassmorphismButton';
import MinimalisticButton from '../variants/MinimalisticButton';
import SquaredButton from '../variants/SquaredButton';

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;

function renderButtonGroup() {
  return (
    <ButtonGroup>
      <BasicButton />
      <BulkButton />
      <GlassmorphismButton />
      <MinimalisticButton />
      <SquaredButton />
    </ButtonGroup>
  );
}

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const all: Story = {
  render: renderButtonGroup,
};
