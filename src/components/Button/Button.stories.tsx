import { Meta, StoryFn } from "@storybook/react";

import { Button, defaultColor } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		backgroundColor: defaultColor,
		fontColor: "#313638",
		fontBold: false,
	},
	argTypes: {
		backgroundColor: {
			type: {
				name: "string",
			},
		},
		fontColor: {
			type: {
				name: "string",
			},
		},
	},
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const FontBold = Template.bind({});
Primary.args = {
	fontBold: true,
};
