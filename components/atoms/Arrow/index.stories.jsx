import Arrow from ".";

export default {
  title: "Atoms/Arrows",
  component: Arrow,
  args: {},
};

export const Left = () => <Arrow Left direction="left" />;

export const Right = () => <Arrow Right direction="right" />;

export const Up = () => <Arrow Up />;

export const UpWhite = () => <Arrow UpWhite white />;
