import AnimalsTag from ".";

export default {
  title: "Molecules/AnimalsTag",
  component: AnimalsTag,
  args: {
    label: "Crab",
    text: "text",
  },
  argTypes: {
    label: {
      control: "radio",
      options: ["Crab", "Dumbo octopus", "Green Sea Turtle"],
    },
  },
  parameters: {
    backgrounds: { default: "dark-mode" },
  },
};

export const Default = {};
