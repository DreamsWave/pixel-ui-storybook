import { Meta, StoryFn } from "@storybook/react";

import { Box } from "./Box";

export default {
  title: "Components/Box",
  component: Box,
  args: {
    backgroundColor: "#ffffff",
    borderColor: "#323353",
    fontColor: "#313638",
    pixelSize: 4,
  },
} as Meta<typeof Box>;

const Template: StoryFn<typeof Box> = (args) => <Box {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <p style={{ margin: "8px 16px" }}>
      Hello world<span style={{ color: "#4f4e81" }}>!</span>
    </p>
  ),
};
