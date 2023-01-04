import Buttons from ".";

export default {
  title: "Atoms/Button",
  component: Buttons,
  args: {
    title: "Label",
    color: "blue"
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["blue", "purple", "green", "oliveGreen", "red", "pink"],
    },
  },
};

export const Default = {};
