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

export const Basic = Template.bind({});
Basic.args = {
	children: "Basic",
};

export const Bulk = Template.bind({});
Bulk.args = {
	variant: "bulk",
	children: "Bulk",
};
