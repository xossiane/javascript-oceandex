import AnimalsTag from ".";

export default {
  title: "Molecules/AnimalsTag",
  component: AnimalsTag,
  args: {},
};

export const Primary = () => <AnimalsTag primary label="Turtle" text="text" />;
