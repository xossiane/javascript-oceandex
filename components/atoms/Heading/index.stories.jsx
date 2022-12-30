import Heading from ".";

export default {
  title: "Atoms/Heading",
  component: Heading,
  args: {},
};

export const H1 = () => (
  <Heading level="1" color="black">
    Ocean Curiosities
  </Heading>
);

export const H2 = () => (
  <Heading level="2" color="black" style="italic">
    Animal's Curiosities
  </Heading>
);

export const H2Small = () => (
  <Heading level="2" color="black" style="italic" size="small">
    Animal's Curiosities
  </Heading>
);
