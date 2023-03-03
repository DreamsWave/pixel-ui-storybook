import { Meta, StoryFn } from "@storybook/react";

import { Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		primaryColor: "#fdcbb0",
		secondaryColor: "",
		backgroundColor: "#fdcbb0",
		borderColor: "#2e222f",
		fontColor: "",
		children: "Pixel button",
		uppercase: true,
		pixelSize: 4,
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
	uppercase: false,
	primaryColor: "#fffffff",
	secondaryColor: "#c7dcd0",
	borderColor: "#313638",
};
