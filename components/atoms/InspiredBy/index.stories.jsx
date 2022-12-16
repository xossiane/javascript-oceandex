import InspiredBy from ".";

export default {
  title: "Atoms/InspiredBy",
  component: InspiredBy,
  args: {},
};

export const Credits = () => (
  <InspiredBy
    Credits
    picture="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
    text="Design inspired by:"
    name="Saepul Nahwan"
  />
);
