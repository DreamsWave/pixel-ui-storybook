import { Meta, StoryFn } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    fontColor: '#313638',
    pixelSize: 4,
  },
} as Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => <Box {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  backgroundColor: '#ffffff',
  borderColor: '#323353',
  variant: 'basic',
  children: (
    <p style={{ margin: '8px 16px' }}>
      Hello world<span style={{ color: '#4f4e81' }}>!</span>
    </p>
  ),
};

export const Neon = Template.bind({});
Neon.args = {
  primaryColor: '#8fd3ff',
  secondaryColor: '#eaaded',
  backgroundColor: '#313638',
  fontColor: '#ffffff',
  variant: 'neon',
  children: (
    <p style={{ margin: '8px 16px' }}>
      Hello world<span style={{ color: '#8fd3ff' }}>!</span>
    </p>
  ),
};
