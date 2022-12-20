import ArrowRight from ".";

export default {
  title: "Atoms/ArrowRight",
  component: ArrowRight,
  args: {},
};

export const BlackArrow = () => <ArrowRight BlackArrow />;

export const WhiteArrow = () => <ArrowRight WhiteArrow white="true" />;
