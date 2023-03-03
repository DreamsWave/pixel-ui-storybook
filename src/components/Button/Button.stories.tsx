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
		scale: 1,
		pixelSize: 4,
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
	scale: 3,
};

export const Bulk = Template.bind({});
Bulk.args = {
	variant: "bulk",
	children: "Bulk",
	backgroundColor: "#8ff8e2",
};

export const Squared = Template.bind({});
Squared.args = {
	variant: "squared",
	children: "Squared",
	backgroundColor: "#ebc3aa",
};

export const Minimalistic = Template.bind({});

Minimalistic.parameters = {
	backgrounds: { default: "light" },
};

Minimalistic.args = {
	variant: "minimalistic",
	children: "Min",
	backgroundColor: "#c7dcd0",
};
