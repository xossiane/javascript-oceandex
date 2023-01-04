import Card from ".";

export default {
  title: "Molecules/Card",
  component: Card,
  args: {
    href: "#Text",
    title: "OceanDex",
    color: "blue",
    description: "Animal's List",
    img: "/assets/images/icons/pacific.svg"
  },
  argTypes: {
    color: {
      control: "inline-radio",
      options: ["blue", "purple", "green", "oliveGreen", "red", "pink"],
    },
    img: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
