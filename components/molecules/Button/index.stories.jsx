import Button from ".";

export default {
  title: "Molecules/Button",
  component: Button,
  args: {
    title: "Label",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["blue", "purple", "green", "oliveGreen", "red", "pink"],
    },
  },
};

export const Default = {};
