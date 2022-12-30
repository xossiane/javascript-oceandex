import AnimalsTag from ".";

export default {
  title: "Molecules/AnimalsTag",
  component: AnimalsTag,
  args: {},
  parameters: {
    backgrounds: { default: "dark-mode" },
  },
};

export const SmallTag = () => <AnimalsTag label="Crab" text="text" />;
export const MediumTag = () => <AnimalsTag label="Dumbo octopus" text="text" />;
export const LargeTag = () => (
  <AnimalsTag label="Green Sea Turtle" text="text" />
);
