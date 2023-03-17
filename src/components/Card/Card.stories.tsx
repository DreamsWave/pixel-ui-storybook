import { Meta, StoryFn } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    fontColor: '#313638',
    pixelSize: 4,
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.parameters = {
  backgrounds: { default: 'light' },
};
Basic.args = {
  backgroundColor: '#ffffff',
  fontColor: '#313638',
  borderColor: '#313638',
  shadowColor: '#9babb2',
  variant: 'basic',
  children: (
    <p style={{ margin: '8px 16px' }}>
      Hello world<span style={{ color: '#91db69' }}>!</span> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex esse minus tenetur at quia natus sint, est soluta?
      Aliquam.
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
      Hello world<span style={{ color: '#8fd3ff' }}>!</span> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex esse minus tenetur at quia natus sint, est soluta?
      Aliquam.
    </p>
  ),
};

export const Outline = Template.bind({});
Outline.parameters = {
  backgrounds: { default: 'dark' },
};
Outline.args = {
  backgroundColor: '#ffffff',
  borderColor: '#323353',
  variant: 'outline',
  children: (
    <p style={{ margin: '8px 16px' }}>
      Hello world<span style={{ color: '#4f4e81' }}>!</span> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex esse minus tenetur at quia natus sint, est soluta?
      Aliquam.
    </p>
  ),
};

export const Cyber = Template.bind({});
Cyber.parameters = {
  backgrounds: { default: 'dark' },
};
Cyber.args = {
  primaryColor: '#ffffff',
  secondaryColor: '#fbff86',
  fontColor: '#ffffff',
  variant: 'cyber',
  children: (
    <p style={{ margin: '8px 16px' }}>
      Hello world<span style={{ color: '#fbff86' }}>!</span> <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex esse minus tenetur at quia natus sint, est soluta?
      Aliquam.
    </p>
  ),
};

export const Dimensional = Template.bind({});
Dimensional.parameters = {
  backgrounds: { default: 'light' },
};
Dimensional.args = {
  primaryColor: '#4d9be6',
  borderColor: '#323832',
  secondaryColor: '#fbff86',
  fontColor: '#ffffff',
  variant: 'dimensional',
  children: (
    <p style={{ margin: '8px 16px' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex esse minus tenetur at quia natus sint, est soluta?
      Aliquam.
    </p>
  ),
};
