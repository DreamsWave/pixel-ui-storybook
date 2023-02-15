import { Meta, StoryFn } from "@storybook/react";

import { Button, defaultColor } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		backgroundColor: defaultColor,
		fontColor: "#313638",
		fontBold: false,
		children: "Pixel button",
		borderWidth: 9,
		fontSize: 24,
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
		borderWidth: {
			type: {
				name: "number",
			},
		},
		fontSize: {
			type: {
				name: "number",
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
