import AnimalsCard from ".";
import jellyfish from "../../../public/assets/images/icons/11-jellyfish.png";

export default {
  title: "Molecules/AnimalsCard",
  component: AnimalsCard,
  args: {
    name: "Jellyfish",
    order: "Semaeostomeae",
    phylum: "Cnidaria",
    Class: "Scyphozoa",
    kingdom: "Animalia",
    src: jellyfish,
  },
  argTypes: {
    phylum: {
      control: "inline-radio",
      options: [
        "Cnidaria",
        "Chordata",
        "Arthropoda",
        "Mollusca",
        "Echinodermata",
      ],
    },
    src: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
