import Input from '.'

export default {
    title: "Molecules/Input",
    component: Input,
    args: {}
}

export const OceanDex = () => <Input OceanDex placeholder="Search for animals, filos..." aria-label="Search for animals, filos..." />;

export const FavoriteAnimals = () => <Input FavoriteAnimals placeholder="Search for your favorite animals" aria-label="Search for your favorite animals" />;