import Card from ".";

export default {
  title: "Molecules/Card",
  component: Card,
  args: {},
};

export const CardA = () => (
  <Card
    CardA
    title="Pelagic Ocean"
    color="oliveGreen"
    description="Where light meets water"
    img="/assets/images/icons/pelagic_ocean.svg"
  />
);
