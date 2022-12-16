import ArrowLeft from ".";

export default {
  title: "Atoms/ArrowLeft",
  component: ArrowLeft,
  args: {},
};

export const BlackArrow = () => <ArrowLeft BlackArrow />;

export const WhiteArrow = () => <ArrowLeft WhiteArrow white="true" />;
