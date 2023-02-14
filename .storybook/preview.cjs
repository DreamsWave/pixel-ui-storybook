export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		default: "default",
		values: [
			{
				name: "default",
				value: "#323353",
			},
			{
				name: "light",
				value: "#ffffff",
			},
			{
				name: "dark",
				value: "#313638",
			},
		],
	},
};
