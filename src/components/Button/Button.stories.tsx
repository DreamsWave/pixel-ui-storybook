import { Meta, StoryFn } from "@storybook/react";

import { Button } from "./Button";

export default {
	title: "Components/Button",
	component: Button,
	args: {
		primaryColor: "#fdcbb0",
		secondaryColor: "#593e2d",
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
	primaryColor: "#8ff8e2",
};

export const Squared = Template.bind({});
Squared.args = {
	variant: "squared",
	children: "Squared",
	borderColor: "#593e2d",
	primaryColor: "#ebc3aa",
	secondaryColor: "#ab7968",
	fontColor: "#593e2d",
};

export const Minimalistic = Template.bind({});

Minimalistic.parameters = {
	backgrounds: { default: "light" },
};

Minimalistic.args = {
	variant: "minimalistic",
	children: "Min",
	uppercase: false,
	primaryColor: "#fffffff",
	secondaryColor: "#c7dcd0",
	borderColor: "#313638",
};
