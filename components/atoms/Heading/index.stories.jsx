import Heading from ".";

export default {
  title: "Atoms/Heading",
  component: Heading,
  args: {},
};

export const Title = () => (
  <Heading Title level="1" size="Xlarge" color="black" style="italic">
    General Curiosities
  </Heading>
);
