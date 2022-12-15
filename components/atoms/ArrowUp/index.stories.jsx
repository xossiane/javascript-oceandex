import ArrowUp from ".";

export default {
  title: "Atoms/ArrowUp",
  component: ArrowUp,
  args: {},
};

export const BlackArrow = () => <ArrowUp BlackArrow />;

export const WhiteArrow = () => <ArrowUp WhiteArrow white="true" />;
