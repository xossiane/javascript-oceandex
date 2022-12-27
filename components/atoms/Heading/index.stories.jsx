import Heading from ".";

export default {
  title: "Atoms/Heading",
  component: Heading,
  args: {},
};

export const H1 = () => (
  <Heading H1 level="1" color="black">
    Ocean Curiosities
  </Heading>
);

export const H2 = () => (
  <Heading H2 level="2" color="black" style="italic">
    Animal's Curiosities
  </Heading>
);

export const H2Small = () => (
  <Heading H2Small level="2" color="black" style="italic" size="small">
    Animal's Curiosities
  </Heading>
);
