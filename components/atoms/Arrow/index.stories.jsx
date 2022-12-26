import Arrow from ".";

export default {
  title: "Atoms/Arrow",
  component: Arrow,
  args: {},
};

export const Left = () => <Arrow Left direction="left" />;

export const Right = () => <Arrow Right direction="right" />;

export const Up = () => <Arrow Up />;
