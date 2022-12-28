import Button from ".";

export default {
  title: "Molecules/Button",
  component: Button,
};

export const BlueButton = () => <Button color="blue" title="OceanDex" />;

export const GreenButton = () => (
  <Button color="green" title="Animals Curiosities" />
);

export const PurpleButton = () => (
  <Button color="purple" title="Ocean Curiosities" />
);

export const OliveGreenButton = () => (
  <Button color="oliveGreen" title="Trophic Level" />
);

export const PinkButton = () => (
  <Button color="pink" title="Favorite Animals" />
);

export const RedButton = () => <Button color="red" title="Authors" />;
