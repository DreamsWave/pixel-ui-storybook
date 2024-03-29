import { Meta, StoryFn } from '@storybook/react';
import { changePunctuationsColor } from '../../utils';
import { COLORS } from '../../constants';
import { Card } from './Card';

const text = `Hello world! Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex esse minus tenetur at quia natus sint, est soluta?
Aliquam.`;

const Placeholder = ({ color = COLORS[3] }: { color?: string }) => (
  <p style={{ margin: '8px 16px' }} dangerouslySetInnerHTML={{ __html: changePunctuationsColor(text, color) }}></p>
);

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    primaryColor: COLORS[3],
    secondaryColor: '#fff',
    backgroundColor: '#fff',
    borderColor: COLORS[7],
    shadowColor: COLORS[5],
    fontColor: COLORS[7],
    pixelSize: 4,
    children: <Placeholder />,
  },
};

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});

export const Neon = Template.bind({});
Neon.args = {
  variant: 'neon',
  primaryColor: '#8fd3ff',
  secondaryColor: '#eaaded',
  backgroundColor: '#fff',
  fontColor: '#313131',
  children: <Placeholder color="#8fd3ff" />,
};

export const Outline = Template.bind({});
Outline.parameters = {
  backgrounds: { default: 'dark' },
};
Outline.args = {
  variant: 'outline',
};

export const Cyber = Template.bind({});
Cyber.parameters = {
  backgrounds: { default: 'dark' },
};
Cyber.args = {
  variant: 'cyber',
  primaryColor: COLORS[4],
  secondaryColor: COLORS[3],
  fontColor: '#fff',
  children: <Placeholder color={COLORS[3]} />,
};

export const Dimensional = Template.bind({});
Dimensional.args = {
  variant: 'dimensional',
  primaryColor: COLORS[5],
  borderColor: COLORS[7],
  fontColor: COLORS[7],
  backgroundColor: COLORS[0],
  shadowColor: COLORS[4],
  children: <Placeholder color={COLORS[4]} />,
};

export default meta;
