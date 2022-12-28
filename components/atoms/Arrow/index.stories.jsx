import Arrow from ".";

export default {
  title: "Atoms/Arrows",
  component: Arrow,
  args: {},
};

export const Left = () => <Arrow direction="left" />;

export const Right = () => <Arrow direction="right" />;

export const Up = () => <Arrow />;

export const UpWhite = () => <Arrow white />;

UpWhite.parameters = {
  backgrounds: { default: "dark-mode" },
};
