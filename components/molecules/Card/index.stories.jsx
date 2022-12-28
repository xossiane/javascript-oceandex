import Card from ".";

export default {
  title: "Molecules/Card",
  component: Card,
  args: {},
};

export const CardExample = () => (
  <Card
    href="#Text"
    title="Ocean title"
    color="purple"
    description="Card description"
    img=""
  />
);
