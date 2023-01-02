import Text from ".";

export default {
  title: "Atoms/Text",
  component: Text,
  args: {
    color: "black",
    size: "medium",
    children: "Octopuses tend to be solitary, though they do interact with other octopuses at times. Some species of octopuses hunt at night, while others only hunt at dusk and dawn. When scared, octopuses will shoot a dark liquid, sometimes    called ink, at the thing that scared them.",
    weight: "",
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["black", "darkBlue"]
    },
    size: {
      control: "inline-radio",
      options: ["XXLarge", "XLarge", "large", "medium", "small", "XSmall"]
    },
    weight: {
      control: "inline-radio",
      options: ["bold", "italic", ""]
    }
  }
};

export const Default = {};