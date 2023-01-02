import Card from ".";
import jellyfish from "../../../public/assets/images/storybook/jellyfish.png";

export default {
  title: "Molecules/Card",
  component: Card,
  args: {
    href: "#Text",
    title: "OceanDex",
    color: "blue",
    description: "Animal's List",
    src: jellyfish,
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["blue", "purple", "green", "oliveGreen", "red", "pink"],
    },
    src: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
