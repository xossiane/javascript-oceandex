import AnimalsCard from ".";

import jellyfish from '../../../public/assets/images/icons/11-jellyfish.png';

export default {
  title: "Molecules/AnimalsCard",
  component: AnimalsCard,
  args: {},
};

export const Cnidaria = () => (
  <AnimalsCard
    Cnidaria
    name="Jellyfish"
    order="Semaeostomeae"
    phylum="Cnidaria"
    Class="Scyphozoa"
    kingdom="Animalia"
    src="../../../public/assets/images/icons/11-jellyfish.png"
  />
);

export const Chordata = () => (
  <AnimalsCard
    Chordata
    name="Dolphin"
    order="Cetacea"
    phylum="Chordata"
    Class="Mammalia"
    kingdom="Animalia"
    src=""
  />
);

export const Arthropoda = () => (
  <AnimalsCard
    Arthropoda
    name="Shrimp"
    order="Decapoda"
    phylum="Arthropoda"
    Class="Malacostraca"
    kingdom="Animalia"
    src=""
  />
);

export const Mollusca = () => (
  <AnimalsCard
    Mollusca
    name="Nautilus"
    order="Nautilida"
    phylum="Mollusca"
    Class="Cephalopoda"
    kingdom="Animalia"
    src=""
  />
);

export const Echinodermata = () => (
  <AnimalsCard
    Echinodermata
    name="Sea Urchin"
    order="Arbacioida"
    phylum="Echinodermata"
    Class="Echinoidea"
    kingdom="Animalia"
    src=""
  />
);

export const Others = () => (
  <AnimalsCard
    Others
    name="Seaweed"
    order="Ulvales"
    phylum="Chlorophyta"
    Class="Ulvophyceae"
    kingdom="Plantae"
    src=""
  />
);
