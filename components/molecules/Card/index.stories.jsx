import Card from ".";
import ocean from "../../../public/assets/images/designIcons/ocean1.png"

export default {
  title: "Molecules/Card",
  component: Card,
  args: {
    href: "#Text",
    title: "OceanDex",
    color: "blue",
    description: "Animal's List",
    img: {ocean},
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
