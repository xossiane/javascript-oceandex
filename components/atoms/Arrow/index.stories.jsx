import Arrow from ".";

export default {
  title: "Atoms/Arrow",
  args: {},
};

export const BlackArrow = () => <Arrow BlackArrow />;

export const WhiteArrow = () => <Arrow WhiteArrow white="true" />;
