import AnimalsCard from ".";

import jellyfish from '../../../public/assets/images/icons/11-jellyfish.png';
import dolphin from '../../../public/assets/images/icons/03-dolphin.png';
import shrimp from '../../../public/assets/images/icons/25-shrimp.png';
import nautilus from '../../../public/assets/images/icons/15-nautilus.png';
import seaUrchin from '../../../public/assets/images/icons/21-seaUrchin.png';
import seaweed from '../../../public/assets/images/icons/23-seaweed.png';

export default {
  title: "Molecules/AnimalsCard",
  component: AnimalsCard,
  args: {},
};

export const Cnidaria = () => (
  <AnimalsCard
    name="Jellyfish"
    order="Semaeostomeae"
    phylum="Cnidaria"
    Class="Scyphozoa"
    kingdom="Animalia"
    src={jellyfish}
  />
);

export const Chordata = () => (
  <AnimalsCard
    name="Dolphin"
    order="Cetacea"
    phylum="Chordata"
    Class="Mammalia"
    kingdom="Animalia"
    src={dolphin}
  />
);

export const Arthropoda = () => (
  <AnimalsCard
    name="Shrimp"
    order="Decapoda"
    phylum="Arthropoda"
    Class="Malacostraca"
    kingdom="Animalia"
    src={shrimp}
  />
);

export const Mollusca = () => (
  <AnimalsCard
    name="Nautilus"
    order="Nautilida"
    phylum="Mollusca"
    Class="Cephalopoda"
    kingdom="Animalia"
    src={nautilus}
  />
);

export const Echinodermata = () => (
  <AnimalsCard
    name="Sea Urchin"
    order="Arbacioida"
    phylum="Echinodermata"
    Class="Echinoidea"
    kingdom="Animalia"
    src={seaUrchin}
  />
);

export const Others = () => (
  <AnimalsCard
    name="Seaweed"
    order="Ulvales"
    phylum="Chlorophyta"
    Class="Ulvophyceae"
    kingdom="Plantae"
    src={seaweed}
  />
);
