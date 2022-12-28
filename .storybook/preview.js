export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "",
    values: [
      {
        name: "dark-mode",
        value: "#111111",
      },
      // { name: "blue", value: "#687696" },
      // { name: "purple", value: "#737185" },
      // { name: "green", value: "#567a79" },
      // { name: "oliveGreen", value: "#6e786b" },
      // { name: "red", value: "#b64760" },
      // { name: "pink", value: "#b34884" },
    ],
  },
};
