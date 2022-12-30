import Like from ".";

export default {
  title: "Atoms/Like",
  component: Like,
  args: {},
};

export const BlackHeart = () => <Like />;
export const WhiteHeart = () => <Like white="true" />;

WhiteHeart.parameters = {
  backgrounds: { default: "dark-mode" },
};
