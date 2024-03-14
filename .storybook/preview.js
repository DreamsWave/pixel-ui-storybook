export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#f7fbf2',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#313638',
      },
    ],
  },
};
