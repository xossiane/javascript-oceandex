import Like from ".";

export default {
  title: "Atoms/Like",
  component: Like,
  args: {},
};

export const BlackHeart = () => <Like BlackHeart />;
export const WhiteHeart = () => <Like WhiteHeart white="true" />;
