import Button from ".";

export default {
  title: "Molecules/Button",
  component: Button,
  args: {},
};

export const BlueButton = () => (
  <Button BlueButton color="blue" title="OceanDex" />
);

export const GreenButton = () => (
  <Button GreenButton color="green" title="Animals Curiosities" />
);

export const PurpleButton = () => (
  <Button PurpleButton color="purple" title="Ocean Curiosities" />
);

export const OliveGreenButton = () => (
  <Button OliveGreenButton color="oliveGreen" title="Trophic Level" />
);

export const PinkButton = () => (
  <Button PinkButton color="pink" title="Favorite Animals" />
);

export const RedButton = () => <Button RedButton color="red" title="Authors" />;
