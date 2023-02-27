import { Meta, StoryFn } from "@storybook/react";

import { Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		backgroundColor: "#fdcbb0",
		borderColor: "#2e222f",
		fontColor: "#313638",
		fontBold: false,
		children: "Pixel button",
		scale: 3,
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
		borderColor: {
			type: {
				name: "string",
			},
		},
		scale: {
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
